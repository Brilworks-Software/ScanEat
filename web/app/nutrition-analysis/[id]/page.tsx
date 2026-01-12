'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { NutritionAnalysisService, NutritionAnalysis } from '@/lib/services/NutritionAnalysisService';
import {  DetectedFood, FoodItem } from '@/types/product';
import Image from 'next/image';

export default function NutritionAnalysisDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [analysis, setAnalysis] = useState<NutritionAnalysis | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const id = params.id as string;

  useEffect(() => {
    if (id) {
      fetchAnalysis();
    }
  }, [id]);

  const fetchAnalysis = async () => {
    try {
      setLoading(true);
      setError(null);

      const analysisData = await NutritionAnalysisService.getAnalysis(id);

      if (!analysisData) {
        throw new Error('Analysis not found');
      }

      setAnalysis(analysisData);
    } catch (err) {
      console.error('Error fetching analysis:', err);
      setError('Failed to load nutrition analysis. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatValue = (value: number | string, unit: string = '') => {
    console.log(typeof value);
    console.log(value);
    if (typeof value === 'string') return value;
    if (value === 0) return '0';
    return (value || 0).toFixed(1) + unit;
  };

  const NutritionCard = ({ title, value, unit = '', color = 'blue' }: { title: string; value: number | string; unit?: string; color?: string }) => (
    <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <h3 className="text-sm font-semibold text-gray-600 mb-2">{title}</h3>
      <p className={`text-2xl font-bold text-${color}-600`}>
        {formatValue(value, unit)}
      </p>
    </div>
  );

  const FoodItemCard = ({ item }: { item: FoodItem }) => (
    <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">{item.food}</h3>
            <p className="text-sm text-gray-600">{formatValue(item.quantity_grams || 0, 'g')}</p>
          </div>
          <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
            {formatValue(item.calories || 0, ' cal')}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Protein</p>
            <p className="text-lg font-semibold text-blue-600">{formatValue(item.protein_grams || 0, 'g')}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Carbs</p>
            <p className="text-lg font-semibold text-green-600">{formatValue(item.carbs_grams || 0, 'g')}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Fat</p>
            <p className="text-lg font-semibold text-yellow-600">{formatValue(item.fat_grams || 0, 'g')}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Fiber</p>
            <p className="text-lg font-semibold text-purple-600">{formatValue(item.fiber_grams || 0, 'g')}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Sugar</p>
            <p className="text-lg font-semibold text-pink-600">{formatValue(item.sugar_grams || 0, 'g')}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Sodium</p>
            <p className="text-lg font-semibold text-red-600">{formatValue(item.sodium_mg || 0, 'mg')}</p>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800">Loading Analysis...</h2>
          <p className="text-gray-600 mt-2">Fetching your nutrition data</p>
        </div>
      </div>
    );
  }

  if (error || !analysis) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg text-center">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Analysis Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The requested nutrition analysis could not be found.'}</p>
          <div className="space-y-3">
            <button
              onClick={fetchAnalysis}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors font-medium"
            >
              Try Again
            </button>
            <button
              onClick={() => router.push('/nutrition-analysis')}
              className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Start New Analysis
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { detectedFood } = analysis;
  const hasNoFoodItems = !detectedFood.items || detectedFood.items.length === 0;

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <h1 className="text-xl font-bold text-gray-800">Nutrition Analysis</h1>
            <div className="w-16"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Image Preview */}
          {analysis.imageUrl && (
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Analyzed Image</h2>
              <div className="relative w-full max-w-md h-64 bg-gray-100 rounded-xl overflow-hidden mx-auto">
                <Image
                  src={analysis.imageUrl}
                  alt="Analyzed food"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* No Food Detected UI */}
          {hasNoFoodItems ? (
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="max-w-md mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-12 shadow-xl border border-gray-100 text-center">
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto bg-linear-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">No Food Detected</h2>
                <p className="text-gray-600 text-lg mb-2">
                  We couldn't detect any food items in this image.
                </p>
                <p className="text-gray-500 text-sm mb-8">
                  Please try uploading a clearer image with visible food items.
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => router.push('/nutrition-analysis')}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    Start New Analysis
                  </button>
                  <button
                    onClick={() => router.back()}
                    className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Results Section - Only show when food items are detected */
            <div className="space-y-8">
              {/* Total Nutrition Summary */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Total Nutrition Summary</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <NutritionCard title="Total Calories" value={detectedFood.totalCalories} unit=" cal" color="orange" />
                  <NutritionCard title="Total Protein" value={detectedFood.totalProtein} unit="g" color="blue" />
                  <NutritionCard title="Total Carbs" value={detectedFood.totalCarbs} unit="g" color="green" />
                  <NutritionCard title="Total Fat" value={detectedFood.totalFat} unit="g" color="yellow" />
                  <NutritionCard title="Total Fiber" value={detectedFood.totalFiber} unit="g" color="purple" />
                  <NutritionCard title="Total Weight" value={detectedFood.totalQuantityGrams} unit="g" color="gray" />
                </div>
              </div>

              {/* Individual Food Items */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Detected Food Items ({detectedFood.items.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {detectedFood.items.map((item, index) => (
                    <FoodItemCard key={item.id || index} item={item} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
