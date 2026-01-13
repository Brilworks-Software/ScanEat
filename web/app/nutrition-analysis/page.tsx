'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { processImageWithGemini } from '@/utils/gemini';
import { NutritionAnalysisService, NutritionAnalysis } from '@/lib/services/NutritionAnalysisService';
import { ImageUploadService } from '@/lib/services/ImageUploadService';
import { DetectedFood, FoodItem } from '@/types/product';
import { auth } from '@/lib/firebase';
import Image from 'next/image';
import { Upload, Camera, Search, AlertTriangle, Trash2, Image as ImageIcon, Eye, BarChart3, Loader2 } from 'lucide-react';

export default function NutritionAnalysisPage() {
  const router = useRouter();
  const [detectedFood, setDetectedFood] = useState<DetectedFood | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previousAnalyses, setPreviousAnalyses] = useState<NutritionAnalysis[]>([]);
  const [loadingPrevious, setLoadingPrevious] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [uploadMode, setUploadMode] = useState<'file' | 'camera'>('file');
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Check for captured image from camera page
    const capturedImageData = sessionStorage.getItem('capturedImage');
    if (capturedImageData) {
      try {
        const { data, name, type } = JSON.parse(capturedImageData);
        const uint8Array = new Uint8Array(data);
        const file = new File([uint8Array], name, { type });

        setSelectedFile(file);
        sessionStorage.removeItem('capturedImage'); // Clear the stored data

        // Automatically start analysis
        handleAnalyze(file);
      } catch (err) {
        console.error('Error processing captured image:', err);
        setError('Failed to process captured image.');
      }
    }

    // Fetch previous analyses
    fetchPreviousAnalyses();

    // Cleanup camera on unmount
    return () => {
      stopCamera();
    };
  }, []);

  const fetchPreviousAnalyses = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      setLoadingPrevious(true);
      const analyses = await NutritionAnalysisService.getUserAnalyses(user.uid, 10); // Get last 10 analyses
      setPreviousAnalyses(analyses);
    } catch (err) {
      console.error('Error fetching previous analyses:', err);
      // Don't show error for previous analyses, just log it
    } finally {
      setLoadingPrevious(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setError(null);
    }
  };

  const handleAnalyze = async (file?: File) => {
    const fileToAnalyze = file || selectedFile;
    if (!fileToAnalyze) {
      setError('Please select an image first.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Process image with Gemini AI
      const result = await processImageWithGemini(fileToAnalyze);
      const parsedData: DetectedFood = JSON.parse(result);

      // Get current user
      const user = auth.currentUser;
      if (!user) {
        throw new Error('User must be logged in to save analysis');
      }

      // Upload image to Firebase Storage
      let imageUrl: string | undefined;
      try {
        const uploadResult = await ImageUploadService.uploadImage(
          fileToAnalyze,
          'nutrition-analysis/',
          `analysis_${Date.now()}`
        );
        imageUrl = uploadResult.downloadURL;
      } catch (uploadError) {
        console.warn('Failed to upload image, continuing without image URL:', uploadError);
        // Continue without image URL if upload fails
      }

      // Save analysis to Firestore
      const savedAnalysis = await NutritionAnalysisService.saveAnalysis(
        user.uid,
        parsedData,
        imageUrl,
        fileToAnalyze.name
      );

      // Navigate to detail page
      router.push(`/nutrition-analysis/${savedAnalysis.id}`);

    } catch (err) {
      console.error('Analysis error:', err);
      setError('Failed to analyze the image. Please try again.');
      setLoading(false);
    }
  };

  const handleViewAnalysis = (analysisId: string) => {
    router.push(`/nutrition-analysis/${analysisId}`);
  };

  const handleDeleteAnalysis = async (e: React.MouseEvent, analysis: NutritionAnalysis) => {
    e.stopPropagation(); // Prevent card click from firing

    const user = auth.currentUser;
    if (!user) {
      alert('You must be logged in to delete analyses.');
      return;
    }

    // Check if user owns this analysis
    if (analysis.userId !== user.uid) {
      alert('You do not have permission to delete this analysis.');
      return;
    }

    const confirmed = window.confirm(
      'Are you sure you want to delete this nutrition analysis? This action cannot be undone.'
    );

    if (!confirmed) return;

    try {
      setDeletingId(analysis.id);
      await NutritionAnalysisService.deleteAnalysis(analysis.id);
      // Refresh the list after deletion
      await fetchPreviousAnalyses();
    } catch (err: any) {
      console.error('Error deleting analysis:', err);
      alert('Failed to delete analysis. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  const startCamera = async () => {
    try {
      setCameraError(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment', // Prefer back camera
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });

      setCameraStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      setCameraError('Unable to access camera. Please check permissions and try again.');
      setUploadMode('file'); // Fallback to file upload
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'captured-food.jpg', { type: 'image/jpeg' });
            setSelectedFile(file);
            setError(null);
            stopCamera();
            setUploadMode('file'); // Switch back to file mode for preview
          }
        }, 'image/jpeg', 0.8);
      }
    }
  };

  const switchToCamera = () => {
    setUploadMode('camera');
    startCamera();
  };

  const switchToFile = () => {
    stopCamera();
    setUploadMode('file');
    setCameraError(null);
  };


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Nutrition Analysis</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upload a photo of your food and get detailed nutritional information using AI analysis.
            </p>
          </div>

          {/* Image Upload Section */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
            <div className="flex flex-col items-center space-y-6">
              {/* Mode Selection */}
              <div className="w-full max-w-md">
                <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
                  <button
                    onClick={switchToFile}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                      uploadMode === 'file'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <Upload className="w-4 h-4" />
                    Upload File
                  </button>
                  <button
                    onClick={switchToCamera}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                      uploadMode === 'camera'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <Camera className="w-4 h-4" />
                    Take Photo
                  </button>
                </div>
              </div>

              {/* File Upload Mode */}
              {uploadMode === 'file' && (
                <div className="w-full max-w-md space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Food Image from Device
                    </label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>

                  {/* Image Preview */}
                  {selectedFile && (
                    <div className="relative w-full h-64 bg-gray-100 rounded-xl overflow-hidden">
                      <Image
                        src={URL.createObjectURL(selectedFile)}
                        alt="Selected food"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Camera Mode */}
              {uploadMode === 'camera' && (
                <div className="w-full max-w-md space-y-4">
                  {cameraError ? (
                    <div className="text-center py-8">
                      <div className="text-red-500 mb-4">
                        <AlertTriangle className="w-12 h-12 mx-auto" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Camera Error</h3>
                      <p className="text-gray-600 mb-4">{cameraError}</p>
                      <button
                        onClick={switchToFile}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Switch to File Upload
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="relative w-full h-64 bg-black rounded-xl overflow-hidden">
                        <video
                          ref={videoRef}
                          autoPlay
                          playsInline
                          muted
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 border-2 border-white border-dashed rounded-xl flex items-center justify-center">
                          <div className="text-white text-center">
                            <Search className="w-8 h-8 mx-auto mb-2" />
                            <p className="text-sm font-medium">Position your food in the frame</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={switchToFile}
                          className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={takePhoto}
                          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          Take Photo
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Analyze Button */}
              {uploadMode === 'file' && selectedFile && (
                <button
                  onClick={() => handleAnalyze()}
                  disabled={loading}
                  className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {loading && (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  )}
                  {loading ? 'Analyzing...' : 'Analyze Nutrition'}
                </button>
              )}

              {/* Error Message */}
              {error && (
                <div className="w-full max-w-md p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
            </div>
          </div>

          {/* Previous Analyses Section */}
          {!loading && previousAnalyses.length > 0 && (
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Previous Analyses</h2>

              {loadingPrevious ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-200 border-t-blue-600 mx-auto mb-2"></div>
                  <p className="text-gray-600">Loading previous analyses...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {previousAnalyses.map((analysis) => (
                    <div
                      key={analysis.id}
                      onClick={() => handleViewAnalysis(analysis.id)}
                      className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden relative"
                    >
                      {/* Delete Button */}
                      <button
                        onClick={(e) => handleDeleteAnalysis(e, analysis)}
                        disabled={deletingId === analysis.id}
                        className="absolute top-2 right-2 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Delete this analysis"
                      >
                        {deletingId === analysis.id ? (
                          <Loader2 className="animate-spin h-4 w-4 text-red-600" />
                        ) : (
                          <Trash2 className="w-4 h-4 text-red-600" />
                        )}
                      </button>

                      {/* Image */}
                      {analysis.imageUrl ? (
                        <div className="relative h-48 bg-gray-100">
                          <Image
                            src={analysis.imageUrl}
                            alt="Analyzed food"
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="h-48 bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                          <ImageIcon className="w-12 h-12 text-gray-400" />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-800 text-sm">
                            {analysis.detectedFood.items.length} item{analysis.detectedFood.items.length !== 1 ? 's' : ''} detected
                          </h3>
                          <span className="text-xs text-gray-500">
                            {new Date(analysis.analysisDate).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Calories:</span>
                            <span className="font-semibold text-orange-600">
                              {Math.round(analysis.detectedFood.totalCalories)} cal
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Protein:</span>
                            <span className="font-semibold text-blue-600">
                              {Math.round(analysis.detectedFood.totalProtein)}g
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Carbs:</span>
                            <span className="font-semibold text-green-600">
                              {Math.round(analysis.detectedFood.totalCarbs)}g
                            </span>
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <div className="flex items-center justify-center text-xs text-blue-600 font-medium">
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {previousAnalyses.length === 0 && !loadingPrevious && (
                <div className="text-center py-8">
                  <BarChart3 className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">No Previous Analyses</h3>
                  <p className="text-gray-600">Your nutrition analysis history will appear here.</p>
                </div>
              )}
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-12 shadow-lg border border-gray-100 text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Analyzing Your Food</h3>
              <p className="text-gray-600">This may take a few moments...</p>
            </div>
          )}
        </div>
      </div>

      {/* Hidden canvas for camera photo capture */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
