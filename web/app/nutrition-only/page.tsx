'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { processImageWithGemini } from '@/utils/gemini';
import { NutritionAnalysisService } from '@/lib/services/NutritionAnalysisService';
import { ImageUploadService } from '@/lib/services/ImageUploadService';
import { DetectedFood, FoodItem } from '@/types/product';
import { auth } from '@/lib/firebase';
import Image from 'next/image';

export default function NutritionOnlyPage() {
  const router = useRouter();
  const [detectedFood, setDetectedFood] = useState<DetectedFood | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
  }, []);

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


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* File Upload Section */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
            <div className="flex flex-col items-center space-y-6">
              {/* File Input */}
              <div className="w-full max-w-md">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Food Image
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
                <div className="relative w-full max-w-md h-64 bg-gray-100 rounded-xl overflow-hidden">
                  <Image
                    src={URL.createObjectURL(selectedFile)}
                    alt="Selected food"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Analyze Button */}
              <button
                onClick={() => handleAnalyze()}
                disabled={!selectedFile || loading}
                className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading && (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                )}
                {loading ? 'Analyzing...' : 'Analyze Nutrition'}
              </button>

              {/* Error Message */}
              {error && (
                <div className="w-full max-w-md p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
            </div>
          </div>

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
    </div>
  );
}
