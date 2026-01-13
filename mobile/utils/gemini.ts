import { GoogleGenerativeAI } from '@google/generative-ai';
import {
  Ingredient as IngredientType,
  NutritionInfo,
  Additive,
  HealthScore,
} from "../types/product";
import { FoodItem, DetectedFood } from '../types/product';

const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  console.error("API_KEY is not defined in the environment.");
}



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



  const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GEMINI_API_KEY || "DUMMY_KEY_FOR_BUILD");
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
}`;
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