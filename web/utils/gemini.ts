import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenAI } from "@google/genai";
import {
  Ingredient as IngredientType,
  NutritionInfo,
  Additive,
  HealthScore,
} from "../types/product";
import { FoodItem, DetectedFood } from '../types/product';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  console.error("API_KEY is not defined in the environment.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || "DUMMY_KEY_FOR_BUILD" });
// function resizeImage(file: File, maxWidth = 1024) {
//   return new Promise((resolve) => {
//     const img = new Image();
//     const reader = new FileReader();

//     reader.onload = () => {
//       img.src = reader.result;
//     };

//     img.onload = () => {
//       const canvas = document.createElement("canvas");
//       const scale = maxWidth / img.width;
//       canvas.width = maxWidth;
//       canvas.height = img.height * scale;

//       const ctx = canvas.getContext("2d");
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//       resolve(canvas.toDataURL("image/jpeg", 0.8));
//     };

//     reader.readAsDataURL(file);
//   });
// }

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (!reader.result) {
        reject("Failed to read file");
        return;
      }
      resolve(reader.result as string); // data:image/...;base64,...
    };

    reader.onerror = () => reject(reader.error);

    reader.readAsDataURL(file);
  });
}

export async function fileToBase64Only(file: File): Promise<string> {
  const base64 = await fileToBase64(file);
  return base64.split(",")[1];
}

function extractJson(text: string): string {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

function parseGeminiJson<T>(text: string): T {
  const cleanJson = extractJson(text);
  return JSON.parse(cleanJson) as T;
}

export const sendImageToAI = async (file: File): Promise<string> => {
  try {
    // Construct the history for the chat
    // We only take the last few messages to keep context relevant and avoid token limits,
    // though Flash has a large context window.

    const systemPromptGeneratorPrompt = `You are a food analysis AI agent.

You will receive ONE OR MORE IMAGES of a food item.
The food may be:
- Packaged food (with label)
- Restaurant food
- Street food
- Homemade food
- Fresh or cooked dishes (e.g., pizza, burger, curry, salad)

Your task is to analyze the image(s) and return food information ONLY when it is clearly and confidently identifiable.

====================================================
CRITICAL RULE (HIGHEST PRIORITY)
====================================================
- You MUST NOT guess, invent, or assume ingredients, nutrition, brand, or preparation.
- You may ONLY return specific information if it is:
  - Explicitly visible on packaging OR
  - Visually obvious and universally recognizable (e.g., plain cheese pizza, whole apple).
- If there is ANY uncertainty, the data MUST be treated as UNKNOWN.

NEVER infer:
- Ingredients from appearance alone (except universally obvious foods)
- Cooking method, oil type, or portion size
- Nutrition values without a visible nutrition label
- Additives, allergens, or NOVA group without explicit evidence

====================================================
FOOD IDENTIFICATION RULES
====================================================
You MAY confidently identify ONLY:
- Whole fruits and vegetables (e.g., apple, banana)
- Plain, common foods with universally accepted ingredients
  (e.g., plain cheese pizza, plain rice, plain omelette)

You MUST treat the food as UNKNOWN if:
- It is a mixed dish with unclear ingredients
- It has toppings, sauces, or fillings that cannot be verified
- It is restaurant or street food without labels
- Multiple foods are visible and unclear

====================================================
UNKNOWN FOOD HANDLING
====================================================
If the food cannot be confidently identified:
- Set name to "Unknown Food Item"
- Set brand, category, imageUrl, nutriScore, novaGroup to null
- Set ingredients to an empty array []
- Set nutrition to an empty object {}
- Set allergens to an empty array []
- Set additives to an empty array []
- Provide a conservative healthScore with warnings
- Still return a valid Product object

====================================================
OUTPUT RULES (MANDATORY)
====================================================
- Respond with ONLY valid JSON
- No explanations, comments, markdown, or extra text
- JSON must strictly conform to the Product interface
- Do NOT fabricate nutrition values, ingredients, or additives
- Unknown fields MUST be null or empty
- Nutrition values must be per 100g (ONLY if label exists)
- imageUrl must be null unless an explicit URL is visible

====================================================
PRODUCT RULES
====================================================
- ingredients must be ordered by rank ONLY if order is certain
- healthScore.score must be between 0 and 100
- healthScore.grade must be one of:
  "excellent", "good", "moderate", "poor", "avoid"
- novaGroup must be between 1 and 4
- nutriScore must be A–E (ONLY if explicitly known)
- NOVA 4 foods cannot receive "excellent"

====================================================
HEALTH LOGIC
====================================================
- Unpackaged or unclear foods → conservative healthScore
- Default for unknown foods:
  score: 40–55
  grade: "moderate" or "poor"
- Warnings MUST explain:
  - Ingredients are unknown
  - Nutrition data is unavailable
  - Food preparation cannot be verified

====================================================
OUTPUT STRUCTURE
====================================================
Return exactly ONE Product JSON object:

{
  "barcode": string | null,
  "name": string,
  "brand": string | null,
  "category": string | null,
  "imageUrl": string | null,
  "ingredients": Ingredient[],
  "nutrition": NutritionInfo,
  "allergens": string[],
  "additives": Additive[],
  "novaGroup": number | null,
  "nutriScore": string | null,
  "healthScore": HealthScore
}

Ingredient {
    name: string;
    rank: number;
    vegan?: boolean;
    vegetarian?: boolean;
    allergen?: boolean;
    additive?: boolean;
    healthConcern?: HealthConcern;
    description?: string;
}

NutritionInfo {
    energy?: number;
    fat?: number;
    saturatedFat?: number;
    carbohydrates?: number;
    sugars?: number;
    fiber?: number;
    proteins?: number;
    salt?: number;
    sodium?: number;
}

Additive {
    code: string;
    name: string;
    category: string;
    healthConcern?: HealthConcern;
    description?: string;
}

HealthScore {
    score: number;
    grade: "excellent" | "good" | "moderate" | "poor" | "avoid";
    nutriScore?: string;
    novaGroup?: number;
    reasons: HealthReason[];
    recommendations: string[];
    warnings: string[];
}

HealthReason {
    type: "positive" | "negative" | "warning";
    category: string;
    message: string;
    impact: number;
}

HealthConcern =
    | "low"
    | "moderate"
    | "high"
    | "very_high";

example Product JSON:
    {
  "traces": [
    
  ],
  "nutriScore": "E",
  "name": "Kurkure",
  "nutrition": {
    "energy": 0,
    "fat": 33.7,
    "carbohydrates": 57.7,
    "fiber": 0,
    "sugars": 2.2,
    "salt": 1.99,
    "sodium": 0.796,
    "proteins": 6,
    "saturatedFat": 7.7
  },
  "barcode": "8901491100519",
  "additives": [
    {
      "name": "E160C",
      "category": "Additive",
      "code": "E160C"
    },
    {
      "code": "E296",
      "name": "E296",
      "category": "Additive"
    },
    {
      "category": "Additive",
      "code": "E330",
      "name": "E330"
    },
    {
      "category": "Additive",
      "code": "E334",
      "name": "E334"
    }
  ],
  "ecoscore": "unknown",
  "imageUrl": "https://images.openfoodfacts.org/images/products/890/149/110/0519/front_en.48.400.jpg",
  "nutritionGrade": "E",
  "packaging": [
    "en:plastic"
  ],
  "ingredients": [
    {
      "id": "en:cereal-products",
      "rank": 1,
      "name": "Cereal Products",
      "vegan": false,
      "vegetarian": false
    },
    {
      "id": "en:vegetable-oil",
      "vegetarian": true,
      "vegan": true,
      "name": "Edible Vegetable Oil",
      "rank": 2
    },
    {
      "vegetarian": false,
      "id": "en:coating",
      "vegan": false,
      "name": "Seasoning",
      "rank": 3
    },
    {
      "name": "~Spices",
      "vegetarian": true,
      "rank": 4,
      "id": "en:spice",
      "vegan": true
    },
    {
      "id": "en:condiment",
      "name": "Condiments",
      "vegan": false,
      "vegetarian": false,
      "rank": 5
    },
    {
      "vegan": false,
      "vegetarian": false,
      "name": "lodised Salt",
      "rank": 6,
      "id": "en:lodised-salt"
    },
    {
      "id": "en:sugar",
      "name": "Sugar",
      "rank": 7,
      "vegetarian": true,
      "vegan": true
    },
    {
      "name": "Flavour",
      "id": "en:flavouring",
      "rank": 8,
      "vegan": false,
      "vegetarian": false
    },
    {
      "rank": 9,
      "name": "Black Salt",
      "vegetarian": true,
      "id": "en:black-salt",
      "vegan": true
    },
    {
      "id": "en:tomato",
      "vegetarian": true,
      "rank": 10,
      "name": "Tomato",
      "vegan": true
    },
    {
      "vegan": false,
      "rank": 11,
      "id": "en:acidity-regulator",
      "vegetarian": false,
      "name": "Acidity Regulators"
    },
    {
      "name": "Colour",
      "vegetarian": false,
      "rank": 12,
      "id": "en:colour",
      "vegan": false
    },
    {
      "name": "Maltodextrin",
      "rank": 13,
      "id": "en:maltodextrin",
      "vegan": true,
      "vegetarian": true
    },
    {
      "vegan": false,
      "rank": 14,
      "vegetarian": false,
      "id": "en:gram-meal",
      "name": "Gram Meal"
    }
  ],
  "createdAt": "2026-01-06T10:02:56.256Z",
  "ingredientsImageUrl": "https://images.openfoodfacts.org/images/products/890/149/110/0519/ingredients_en.50.400.jpg",
  "novaGroup": 4,
  "updatedAt": "2026-01-07T10:53:11.249Z",
  "ingredientsText": "Cereal Products (66%) (Rice Meal (43.5%), Corn Meal (23%)), Edible Vegetable Oil (Palmolein),*Seasoning (~Spices and Condiments, lodised Salt, Sugar, Flavour (Natural and Nature Identical Flavouring Substances), Black Salt, Tomato Powder, Acidity Regulators (330, 296, 334), Colour(160c), Maltodextrin) , Gram Meal (0.5%).",
  "category": "Snacks, Salty snacks, Namkeen, en:crisps",
  "labels": [
    "en:vegetarian"
  ],
  "nutritionImageUrl": "https://images.openfoodfacts.org/images/products/890/149/110/0519/nutrition_en.52.400.jpg",
  "allergens": [
    
  ],
  "brand": "Kurkure",
  "nutriScoreValue": 22,
  "healthScore": {
    "score": 22,
    "grade": "avoid",
    "nutriScore": "E",
    "novaGroup": 4,
    "reasons": [
      {
        "type": "negative",
        "category": "processing",
        "message": "Ultra-processed food",
        "impact": -20
      }
    ],
    "recommendations": [
      "Consider limiting consumption of this product."
    ],
    "warnings": [
      "Ultra-processed food"
    ],
    "updatedAt": "2026-01-07T10:53:11.250Z"
  }
}
====================================================
FINAL REQUIREMENT
====================================================
- Always return a valid Product JSON object
- Never guess or over-analyze images
- When in doubt → mark as UNKNOWN and be conservative
- Output ONLY valid JSON
`;
    const imageBase64 = await fileToBase64Only(file);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          parts: [
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: imageBase64 || "",
              },
            },
          ],
        },
      ],
      config: {
        systemInstruction: systemPromptGeneratorPrompt,
        temperature: 0.7,
      },
    });

    const JsonData = parseGeminiJson<any>(response.text || "");
    console.log(
      "Text response from Gemini:",
      JSON.stringify(JsonData, null, 2)
    );
    console.log("Type of response.text:", typeof JsonData);

    return JsonData || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the server). Please try again later.";
  }
};

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;


  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "DUMMY_KEY_FOR_BUILD");
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

  
export async function processImageWithGemini(file: File): Promise<string> {
  const imageBase64 = await fileToBase64Only(file);

  const prompt = `You are an expert food nutritionist AI with strong visual recognition skills. Analyze this image and identify every distinct food item visible, regardless of cuisine, using visual cues such as color, texture, shape, layering, and garnish. Provide a detailed nutritional breakdown for each identified food item, including estimated weight in grams and approximate calorie content.

Pay close attention to **texture, color, layering, and garnish** to differentiate items. If items are similar, still try to name them differently (e.g., "Laccha Paratha" vs "Garlic Paratha"). Use common Indian dish knowledge and visual clues to make your best guess.

⚠️ **EDGE CASE LOGIC:** If no food items are detected in the image:
1. Return an empty array \`[]\` for the food items.
2. Return the \`total_nutrition_summary\` object with all numerical values set to \`0\`.

For each food item, return the following fields:
- "food": Name of the dish
- "quantity": Approximate count/serving size (e.g., "2 pieces", "1 bowl")
- "quantity_grams": Estimated weight in grams
- "calories", "fat_grams", "carbs_grams", "protein_grams", "fiber_grams", "sugar_grams", "sodium_mg", "vitamin_a", "vitamin_c", "calcium_mg", "iron_mg"

Return the data in the following format:

[
  {
    "food": string,
    "quantity": string,
    "quantity_grams": number,
    "calories": number,
    "fat_grams": number,
    "carbs_grams": number,
    "protein_grams": number,
    "fiber_grams": number,
    "sugar_grams": number,
    "sodium_mg": number,
    "vitamin_a": number,
    "vitamin_c": number,
    "calcium_mg": number,
    "iron_mg": number
  }
] and
{
  "total_nutrition_summary": {
    "total_calories": number,
    "total_protein_grams": number,
    "total_fat_grams": number,
    "total_carbs_grams": number,
    "total_fiber_grams": number,
    "total_sugar_grams": number,
    "total_sodium_mg": number,
    "total_vitamin_a_mcg_RAE": number,
    "total_vitamin_c_mg": number,
    "total_calcium_mg": number,
    "total_iron_mg": number
  }
}

      `;
      const image = {
        inlineData: {
          data: imageBase64 || "",
          mimeType: "image/jpeg",
        },
      };

      const result = await model.generateContent([prompt, image]);

      const output = result.response.candidates?.[0]?.content?.parts?.[0]?.text;
      console.log('output', output);

      if (!output) {
        console.warn('No output from Gemini');
        return "No response generated.";
      }
      const firstBracketIndex = output.indexOf('[');
      const lastBracketIndex = output.lastIndexOf(']');
      const firstCurlyIndex = output.indexOf('{', lastBracketIndex);
      const lastCurlyIndex = output.lastIndexOf('}');
      console.log('firstBracketIndex', firstBracketIndex);
      console.log('lastBracketIndex', lastBracketIndex);
      console.log('firstCurlyIndex', firstCurlyIndex);
      console.log('lastCurlyIndex', lastCurlyIndex);

      if (
        firstBracketIndex !== -1 &&
        lastBracketIndex !== -1 &&
        firstCurlyIndex !== -1 &&
        lastCurlyIndex !== -1
      ) {
        const foodItemsJson = output.substring(firstBracketIndex, lastBracketIndex + 1);
        const totalNutritionJson = output.substring(firstCurlyIndex, lastCurlyIndex + 1);

        const foodItems: FoodItem[] = JSON.parse(foodItemsJson);
        const totals = JSON.parse(totalNutritionJson);
        console.log('Parsed foodItems:', foodItems);
        console.log('Parsed totals:', totals);

        const finalData: DetectedFood = {
          items: foodItems,
          totalCalories: totals.total_nutrition_summary.total_calories,
          totalProtein: totals.total_nutrition_summary.total_protein_grams,
          totalFat: totals.total_nutrition_summary.total_fat_grams,
          totalCarbs: totals.total_nutrition_summary.total_carbs_grams,
          totalFiber: totals.total_nutrition_summary.total_fiber_grams,
          totalCalcium: totals.total_nutrition_summary.total_calcium_mg,
          totalIron: totals.total_nutrition_summary.total_iron_mg,
          totalSodium: totals.total_nutrition_summary.total_sodium_mg,
          totalSugar: totals.total_nutrition_summary.total_sugar_grams,
          totalQuantityGrams: totals.total_nutrition_summary.total_quantity_grams,
          totalVitaminA: totals.total_nutrition_summary.total_vitamin_a_mcg_RAE,
          totalVitaminC: totals.total_nutrition_summary.total_vitamin_c_mg
        };

        // console.log('finalData:- ', finalData.items.length);
        // console.log('finalData:- ', JSON.stringify(finalData));
        return JSON.stringify(finalData);
      } else {
        console.warn('JSON structure not found in Gemini response.');
        return "Could not parse response.";
      }

}