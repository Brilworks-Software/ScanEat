/**
 * Direct API calls to OpenFoodFacts
 * No backend needed - faster and simpler
 */

const OPENFOODFACTS_API_URL = 'https://world.openfoodfacts.org/api/v2';

export interface OpenFoodFactsProduct {
  status: number;
  product?: {
    product_name?: string;
    product_name_en?: string;
    brands?: string;
    categories?: string;
    categories_tags?: string[];
    labels?: string;
    labels_tags?: string[];
    image_front_url?: string;
    image_ingredients_url?: string;
    image_nutrition_url?: string;
    ingredients?: Array<{
      text?: string;
      vegan?: string;
      vegetarian?: string;
      id?: string;
    }>;
    ingredients_text?: string;
    additives_tags?: string[];
    allergens?: string;
    allergens_tags?: string[];
    traces_tags?: string[];
    nutriments?: {
      energy_kcal_100g?: number;
      fat_100g?: number;
      'saturated-fat_100g'?: number;
      carbohydrates_100g?: number;
      sugars_100g?: number;
      fiber_100g?: number;
      proteins_100g?: number;
      salt_100g?: number;
      sodium_100g?: number;
    };
    nova_group?: number;
    nutriscore_grade?: string;
    nutriscore_score?: number;
    nutrition_grades?: string;
    packaging?: string;
    packaging_tags?: string[];
    ecoscore_data?: {
      grade?: string;
    };
  };
}

/**
 * Fetch product directly from OpenFoodFacts API
 */
export async function fetchProductFromOpenFoodFacts(barcode: string): Promise<any> {
  try {
    console.log(`[OpenFoodFacts] Fetching product for barcode: ${barcode}`);
    const url = `${OPENFOODFACTS_API_URL}/product/${barcode}.json`;
    console.log(`[OpenFoodFacts] URL: ${url}`);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Scaneat/1.0 (https://github.com/drdhavaltrivedi/scaneat)',
      },
    });

    console.log(`[OpenFoodFacts] Response status: ${response.status} ${response.statusText}`);
    console.log(response)


    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unable to read error response');
      console.error(`[OpenFoodFacts] HTTP Error ${response.status}:`, errorText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}. ${errorText.substring(0, 100)}`);
    }

    const data: OpenFoodFactsProduct = await response.json();
    console.log(`[OpenFoodFacts] Response JSON:`, JSON.stringify(data));
    console.log(`[OpenFoodFacts] Response data status: ${data.status}`, data.product ? 'Product found' : 'No product');
    
    if (data.status === 1 && data.product) {
      const parsed = parseProduct(data, barcode);
      console.log(`[OpenFoodFacts] Product parsed successfully:`, parsed.name);
      return parsed;
    }
    
    if (data.status === 0) {
      console.log(`[OpenFoodFacts] Product not found in database`);
      throw new Error('Product not found in OpenFoodFacts database.');
    }
    
    console.warn(`[OpenFoodFacts] Unexpected status: ${data.status}`);
    return null;
  } catch (error: any) {
    console.error('[OpenFoodFacts] Error details:', {
      name: error?.name,
      message: error?.message,
      stack: error?.stack,
      barcode,
    });
    
    // Provide more specific error messages
    if (error?.message?.includes('Failed to fetch') || error?.message?.includes('NetworkError')) {
      throw new Error('Network error: Unable to connect to OpenFoodFacts. Please check your internet connection.');
    }
    
    if (error?.message?.includes('CORS')) {
      throw new Error('CORS error: The API is blocking requests. This may be a temporary issue.');
    }
    
    if (error?.message?.includes('timeout')) {
      throw new Error('Request timed out. The OpenFoodFacts API may be slow. Please try again.');
    }
    
    // Re-throw with original message if it's already descriptive
    if (error?.message && !error.message.includes('Failed to fetch product')) {
      throw error;
    }
    
    throw new Error(`Failed to fetch product: ${error?.message || 'Unknown error occurred'}`);
  }
}

/**
 * Parse OpenFoodFacts product to our format
 */
function parseProduct(offProduct: OpenFoodFactsProduct, barcode: string): any {
  const product = offProduct.product;
  if (!product) {
    throw new Error('Invalid product data');
  }

  return {
    barcode,
    name: product.product_name || product.product_name_en || 'Unknown Product',
    brand: product.brands || '',
    category: product.categories || product.categories_tags?.[0] || '',
    labels: product.labels_tags || [],
    imageUrl: product.image_front_url || '',
    ingredientsImageUrl: product.image_ingredients_url || '',
    nutritionImageUrl: product.image_nutrition_url || '',
    ingredients: (product.ingredients || []).map((ing, index) => ({
      name: ing.text || `Ingredient ${index + 1}`,
      rank: index + 1,
      id: ing.id || '',
      vegan: ing.vegan === 'yes',
      vegetarian: ing.vegetarian === 'yes',
    })),
    ingredientsText: product.ingredients_text || '',
    nutrition: {
      energy: product.nutriments?.energy_kcal_100g ?? 0,
      fat: product.nutriments?.fat_100g ?? 0,
      saturatedFat: product.nutriments?.['saturated-fat_100g'] ?? 0,
      carbohydrates: product.nutriments?.carbohydrates_100g ?? 0,
      sugars: product.nutriments?.sugars_100g ?? 0,
      fiber: product.nutriments?.fiber_100g ?? 0,
      proteins: product.nutriments?.proteins_100g ?? 0,
      salt: product.nutriments?.salt_100g ?? 0,
      sodium: product.nutriments?.sodium_100g ?? 0,
    },
    allergens: product.allergens_tags || [],
    traces: product.traces_tags || [],
    additives: (product.additives_tags || []).map((tag) => ({
      code: tag.replace('en:', '').toUpperCase(),
      name: tag.replace('en:', '').toUpperCase(),
      category: 'Additive',
    })),
    novaGroup: product.nova_group ?? 0,
    nutriScore: product.nutriscore_grade?.toUpperCase() ?? '',
    nutriScoreValue: product.nutriscore_score ?? 0,
    nutritionGrade: product.nutrition_grades?.toUpperCase() ?? '',
    packaging: product.packaging_tags || [],
    ecoscore: product.ecoscore_data?.grade ?? '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

