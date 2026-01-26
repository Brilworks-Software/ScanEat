'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { fetchProductFromOpenFoodFacts } from '../../../lib/openFoodFacts';
import { analyzeProductHealth } from '../../../lib/healthAnalysis';
import { Product } from '../../../types/product';
import { getErrorMessage } from '../../../lib/errorHandler';
import HealthScore from '../../../components/HealthScore';
import IngredientList from '../../../components/IngredientList';
import RecommendationCard from '../../../components/RecommendationCard';
import { getAdditiveInfo, getConcernColor, getConcernText } from '../../../lib/additives';
import { getAllergenInfo, getAllergenSeverityColor } from '../../../lib/allergens';
import { ProductService } from '@/lib/services/ProductService';
import { ChevronLeft, ScanLine, Info, AlertTriangle, ChevronDown, CheckCircle, Clipboard } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const barcode = params.barcode as string;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedAllergens, setExpandedAllergens] = useState<Set<number>>(new Set());

  // Helper function to format nutrition values to 2 decimal places
  const formatNutritionValue = (value: number | string | undefined): string => {
    if (value === undefined || value === null) return '0.00';
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numValue)) return '0.00';
    return numValue.toFixed(2);
  };

  // Helper function to format numbers in text strings to 2 decimal places
  const formatNumbersInText = (text: string): string => {
    // Match decimal numbers (e.g., 25.5, 10.123, 0.3)
    // Format them to 2 decimal places
    return text.replace(/(\d+\.\d+)/g, (match, p1, offset, fullString) => {
      // Check if this number is part of an additive code (E followed by numbers)
      const beforeMatch = fullString.substring(Math.max(0, offset - 2), offset);
      if (beforeMatch.match(/E\d*$/)) {
        return match; // Don't format if it's part of an additive code like E102
      }
      const num = parseFloat(match);
      if (!isNaN(num)) {
        return num.toFixed(2);
      }
      return match;
    });
  };

  const toggleAllergenDetails = (index: number) => {
    setExpandedAllergens(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch product directly from OpenFoodFacts API
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timed out')), 30000)
        );
        
        const productData = await Promise.race([
          ProductService.getProduct(barcode),
          timeoutPromise
        ]) as any;
        
        if (!productData) {
          throw new Error('Product not found in OpenFoodFacts database.');
        }

        // Analyze health directly in the browser
        const healthScore = analyzeProductHealth(productData);

        // Combine data
        const fullProduct: Product = {
          ...productData,
          healthScore
        };
        console.log("Full product data:", JSON.stringify(fullProduct, null, 2));
        setProduct(fullProduct);
      } catch (err: any) {
        console.error('Error fetching product:', {
          error: err,
          code: err?.code,
          message: err?.message,
          details: err?.details,
          barcode
        });
        setError(getErrorMessage(err));
      } finally {
        setLoading(false);
      }
    };

    // Fetch product directly (no auth needed)
    if (barcode) {
      fetchProduct();
    }
  }, [barcode]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <img 
              src="/favicon.png" 
              alt="Loading" 
              className="w-16 h-16 mx-auto mb-4 animate-spin rounded-full"
            />
          </div>
          <p className="text-lg font-medium text-gray-700 mb-2">Analyzing Product</p>
          <p className="text-sm text-gray-500">Fetching nutrition data and calculating health score...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The product could not be found.'}</p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Scanner
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="mb-6 group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Scanner</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Product Header */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {product.imageUrl && (
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                )}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3">{product.name}</h1>
                  {product.brand && (
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2 md:mb-3">
                      <span className="text-base md:text-lg text-gray-600 font-medium">{product.brand}</span>
                    </div>
                  )}
                  {product.category && (
                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
                      {product.category.split(',')[0]}
                    </div>
                  )}
                  <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-lg inline-block">
                    <ScanLine className="w-4 h-4" />
                    <span>Barcode: {product.barcode}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Score */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Health Analysis</h2>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                  <Info className="w-4 h-4" />
                  <span>Score out of 100</span>
                </div>
              </div>
              <div className="flex justify-center mb-4 md:mb-6">
                <HealthScore healthScore={product.healthScore} size="large" />
              </div>
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
                <p className="text-xs md:text-sm text-gray-600 text-center">
                  This score is calculated based on nutrition facts, additives, processing level, and ingredient quality
                </p>
              </div>
            </div>

            {/* Nutrition Information */}
            {product.nutrition && (
              <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 gap-2">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Nutrition Facts</h2>
                  <span className="text-xs md:text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Per 100g</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                      <p className="text-xs font-medium text-orange-700 mb-1">Energy</p>
                      <p className="text-2xl font-bold text-orange-900">{formatNutritionValue(product.nutrition.energy)}</p>
                      <p className="text-xs text-orange-600 mt-1">kcal</p>
                    </div>
                  
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200">
                      <p className="text-xs font-medium text-yellow-700 mb-1">Fat</p>
                      <p className="text-2xl font-bold text-yellow-900">{formatNutritionValue(product.nutrition.fat)}</p>
                      <p className="text-xs text-yellow-600 mt-1">grams</p>
                    </div>
                  
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                      <p className="text-xs font-medium text-blue-700 mb-1">Carbs</p>
                      <p className="text-2xl font-bold text-blue-900">{formatNutritionValue(product.nutrition.carbohydrates)}</p>
                      <p className="text-xs text-blue-600 mt-1">grams</p>
                    </div>
                  
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                      <p className="text-xs font-medium text-green-700 mb-1">Protein</p>
                      <p className="text-2xl font-bold text-green-900">{formatNutritionValue(product.nutrition.proteins)}</p>
                      <p className="text-xs text-green-600 mt-1">grams</p>
                    </div>
                  
                  
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
                      <p className="text-xs font-medium text-red-700 mb-1">Sugars</p>
                      <p className="text-2xl font-bold text-red-900">{formatNutritionValue(product.nutrition.sugars)}</p>
                      <p className="text-xs text-red-600 mt-1">grams</p>
                    </div>
                  
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                      <p className="text-xs font-medium text-purple-700 mb-1">Salt</p>
                      <p className="text-2xl font-bold text-purple-900">{formatNutritionValue(product.nutrition.salt)}</p>
                      <p className="text-xs text-purple-600 mt-1">grams</p>
                    </div>
                  
                 
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
                      <p className="text-xs font-medium text-emerald-700 mb-1">Fiber</p>
                      <p className="text-2xl font-bold text-emerald-900">{formatNutritionValue(product.nutrition.fiber)}</p>
                      <p className="text-xs text-emerald-600 mt-1">grams</p>
                    </div>
                  
                  
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
                      <p className="text-xs font-medium text-amber-700 mb-1">Saturated Fat</p>
                      <p className="text-2xl font-bold text-amber-900">{formatNutritionValue(product.nutrition.saturatedFat)}</p>
                      <p className="text-xs text-amber-600 mt-1">grams</p>
                    </div>
                  
                </div>
              </div>
            )}

            {/* Ingredients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 border border-gray-100">
                <IngredientList ingredients={product.ingredients} />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4 md:space-y-6">
            {/* Recommendations */}
            <RecommendationCard healthScore={product.healthScore} />

            {/* Allergens */}
            {product.allergens && product.allergens.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-red-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-red-100 rounded-full p-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Allergens</h3>
                </div>
                <div className="space-y-3">
                  {product.allergens.map((allergen, index) => {
                    const cleanAllergen = allergen.replace('en:', '').replace(/_/g, ' ');
                    const allergenInfo = getAllergenInfo(cleanAllergen);
                    const isExpanded = expandedAllergens.has(index);

                    if (allergenInfo) {
                      const severityColor = getAllergenSeverityColor(allergenInfo.severity);
                      return (
                        <div key={index} className={`border-l-4 rounded-lg overflow-hidden ${severityColor}`}>
                          {/* Header */}
                          <div className="p-3 flex items-start justify-between cursor-pointer" onClick={() => toggleAllergenDetails(index)}>
                            <div className="flex items-start gap-2 flex-1">
                              <span className="text-lg">⚠️</span>
                              <div className="flex-1">
                                <div className="font-medium">{allergenInfo.name}</div>
                                <div className="text-xs opacity-75 mt-1 capitalize">
                                  Severity: {allergenInfo.severity.replace('_', ' ')} • {allergenInfo.prevalence}
                                </div>
                              </div>
                            </div>
                            <button className="text-gray-500 hover:text-gray-700 transition-colors">
                              <ChevronDown
                                className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                              />
                            </button>
                          </div>

                          {/* Expanded Details */}
                          {isExpanded && (
                            <div className="px-3 pb-3 border-t border-gray-200 bg-white bg-opacity-50">
                              <div className="space-y-3 mt-3">
                                {/* Description */}
                                <div>
                                  <h4 className="font-semibold text-sm text-gray-900 mb-1">Description</h4>
                                  <p className="text-sm text-gray-700">{formatNumbersInText(allergenInfo.description)}</p>
                                </div>

                                {/* Symptoms */}
                                <div>
                                  <h4 className="font-semibold text-sm text-gray-900 mb-1">Symptoms</h4>
                                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                                    {allergenInfo.symptoms.map((symptom, symptomIndex) => (
                                      <li key={symptomIndex}>{formatNumbersInText(symptom)}</li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Cross-contamination */}
                                <div>
                                  <h4 className="font-semibold text-sm text-gray-900 mb-1">Cross-contamination Risks</h4>
                                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                                    {allergenInfo.crossContamination.map((risk, riskIndex) => (
                                      <li key={riskIndex}>{formatNumbersInText(risk)}</li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Management */}
                                <div>
                                  <h4 className="font-semibold text-sm text-gray-900 mb-1">Management</h4>
                                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                                    {allergenInfo.management.map((advice, adviceIndex) => (
                                      <li key={adviceIndex}>{formatNumbersInText(advice)}</li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Related Allergens */}
                                {allergenInfo.relatedAllergens && allergenInfo.relatedAllergens.length > 0 && (
                                  <div>
                                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Related Allergens</h4>
                                    <div className="flex flex-wrap gap-1">
                                      {allergenInfo.relatedAllergens.map((related, relatedIndex) => (
                                        <span key={relatedIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                          {related}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    }

                    // Fallback for allergens not in database
                    return (
                      <div key={index} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-3 text-sm text-red-800 flex items-center gap-2">
                        <span className="text-red-600">⚠️</span>
                        <span className="font-medium capitalize">{cleanAllergen}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Additives */}
            {product.additives && product.additives.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 border border-yellow-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-yellow-100 rounded-full p-2">
                    <Info className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Additives</h3>
                  <span className="ml-auto text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {product.additives.length} found
                  </span>
                </div>
                <div className="space-y-4">
                  {product.additives.map((additive, index) => {
                    const additiveInfo = getAdditiveInfo(additive.code);
                    const concern = additiveInfo?.concern || 'moderate';
                    const concernColor = getConcernColor(concern);
                    const concernText = getConcernText(concern);
                    
                    return (
                      <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                        {/* Additive Header */}
                        <div className={`${concernColor} px-4 py-3 flex items-center justify-between`}>
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-lg">{additive.code}</span>
                          </div>
                          <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
                            {concernText}
                          </span>
                        </div>
                        
                        {/* Additive Details */}
                        <div className="p-4 bg-gray-50">
                          {additiveInfo ? (
                            <>
                              <div className="mb-3">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                  {additiveInfo.category}
                                </span>
                                <p className="text-sm text-gray-700 mt-1">{formatNumbersInText(additiveInfo.description)}</p>
                              </div>
                              
                              {/* Why Avoid */}
                              {additiveInfo.whyAvoid && additiveInfo.whyAvoid.length > 0 && (
                                <div className="mb-3">
                                  <h4 className="text-sm font-bold text-red-700 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4" />
                                    Why Avoid This Additive
                                  </h4>
                                  <ul className="space-y-1">
                                    {additiveInfo.whyAvoid.map((reason, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                        <span className="text-red-500 mt-1">•</span>
                                        <span>{formatNumbersInText(reason)}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {/* Health Effects */}
                              {additiveInfo.healthEffects && additiveInfo.healthEffects.length > 0 && (
                                <div className="mb-3">
                                  <h4 className="text-sm font-bold text-orange-700 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4" />
                                    Potential Health Effects
                                  </h4>
                                  <ul className="space-y-1">
                                    {additiveInfo.healthEffects.map((effect, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                        <span className="text-orange-500 mt-1">•</span>
                                        <span>{formatNumbersInText(effect)}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {/* Benefits */}
                              {additiveInfo.benefits && additiveInfo.benefits.length > 0 && (
                                <div className="mb-3">
                                  <h4 className="text-sm font-bold text-green-700 mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4" />
                                    Benefits
                                  </h4>
                                  <ul className="space-y-1">
                                    {additiveInfo.benefits.map((benefit, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span>{formatNumbersInText(benefit)}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {/* Alternatives */}
                              {additiveInfo.alternatives && (
                                <div className="mt-3 pt-3 border-t border-gray-200">
                                  <h4 className="text-sm font-bold text-blue-700 mb-2 flex items-center gap-2">
                                    <Clipboard className="w-4 h-4" />
                                    Better Alternatives
                                  </h4>
                                  <p className="text-sm text-gray-700">{formatNumbersInText(additiveInfo.alternatives)}</p>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="text-sm text-gray-600">
                              <p className="font-medium mb-1">{additive.code}: {additive.name}</p>
                              <p className="text-xs text-gray-500">Limited information available for this additive. Consider researching before consuming.</p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* General Additive Warning */}
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-xs text-yellow-800">
                    <strong>Note:</strong> Many additives are generally safe, but some may cause reactions in sensitive individuals. 
                    Consider limiting processed foods with multiple additives for better health.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

