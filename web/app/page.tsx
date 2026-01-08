"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BarcodeScanner from "../components/BarcodeScanner";
import Header from "../components/Header";
import { fetchProductFromOpenFoodFacts } from "../lib/openFoodFacts";
import { getErrorMessage } from "../lib/errorHandler";
import { HistoryService } from "@/lib/services/HistoryService";
import { ProductService } from "@/lib/services/ProductService";
import { auth } from "@/lib/firebase";
import { processImageWithGemini, sendImageToAI } from "@/utils/gemini";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const userId = auth.currentUser?.uid;

  useEffect(() => {
    console.log("Current user: ", auth.currentUser);
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [sendingImage, setSendingImage] = useState(false);

  const handleScan = async (barcode: string) => {
    setLoading(true);
    setError(null);

    // const responce = await sendMessageToGemini(barcode);

    // console.log(responce)
    // console.log(typeof responce)
    // return;
    try {
      // Fetch product directly from OpenFoodFacts API
      console.log("Fetching product from OpenFoodFacts for barcode:", barcode);

      // Add timeout protection
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Request timed out. Please try again.")),
          30000
        )
      );

      let productData: any;
      const productDBData = await ProductService.getProduct(barcode);
      if (productDBData) {
        await HistoryService.updateOrCreateHistory(
          userId || "",
          barcode
        );
        productData = productDBData;
      } else {
        try {
          productData = await Promise.race([
            fetchProductFromOpenFoodFacts(barcode),
            timeoutPromise,
          ]);
          await HistoryService.addToHistory(userId || "", productData);
          await ProductService.saveProduct(productData)
         
          
          console.log("Product fetched successfully:", productData);
        } catch (fetchError: any) {
          console.error("Error fetching product:", fetchError);
          throw new Error(
            fetchError.message || "Failed to fetch product from OpenFoodFacts"
          );
        }
      }
      if (!productData) {
        throw new Error("Product not found in OpenFoodFacts database.");
      }

      // Navigate to product detail page
      router.push(`/product/${barcode}`);
    } catch (err: any) {
      // Capture all possible error information
      const errorInfo: any = {
        barcode,
        timestamp: new Date().toISOString(),
      };

      // Try to extract all error information
      if (err) {
        errorInfo.name = err.name;
        errorInfo.message = err.message;
        errorInfo.code = err.code;
        errorInfo.details = err.details;
        errorInfo.stack = err.stack;
        errorInfo.toString = err.toString();

        // Get all properties
        try {
          errorInfo.allProperties = Object.getOwnPropertyNames(err).reduce(
            (acc, key) => {
              try {
                acc[key] = (err as any)[key];
              } catch (e) {
                acc[key] = "[Unable to access]";
              }
              return acc;
            },
            {} as any
          );
        } catch (e) {
          errorInfo.propertyExtractionError = String(e);
        }

        // Check if it's a Firebase error
        if (err.code && err.code.startsWith("functions/")) {
          errorInfo.isFirebaseError = true;
        }
      } else {
        errorInfo.errorIsNull = true;
      }

      console.error("Error fetching product - Full details:", errorInfo);

      const errorMessage = getErrorMessage(
        err || { message: "Unknown error occurred" }
      );
      setError(errorMessage);
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const responce = setSelectedImage(imageUrl);
      processImageWithGemini(file);
    }
  };

  

  const handleError = (err: Error) => {
    setError(err.message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-10 md:mb-16 animate-fade-in px-4">
          <div className="inline-block mb-4 md:mb-6 transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-4 md:p-5 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <svg
                className="w-12 h-12 md:w-16 md:h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight">
            Scaneat
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 mb-3 font-semibold">
            Know What You Eat
          </p>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Scan any food barcode to get instant health analysis, nutrition
            facts, and personalized recommendations
          </p>
        </div>

        {/* Nutrition Analysis Feature */}
        <div className="max-w-4xl mx-auto mb-12 px-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-green-100">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                Advanced Nutrition Analysis
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Upload any food photo and get detailed nutritional breakdown with AI-powered analysis.
                Perfect for homemade meals, restaurant food, or anything without a barcode.
              </p>
              <button
                onClick={() => router.push('/nutrition-analysis')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-green-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Try Nutrition Analysis
              </button>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-blue-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">
                Scan Barcode
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Use your camera or enter the barcode manually to get started
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-purple-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">
                Get Analysis
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Instant health score and detailed nutrition breakdown
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-green-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">
                Make Decisions
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Get personalized recommendations based on your health goals
              </p>
            </div>
          </div>
        </div>

        {error && (
          <div className="max-w-2xl mx-auto mb-8 animate-slide-down">
            <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-5 rounded-xl shadow-lg">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="font-semibold text-base">{error}</p>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div className="max-w-2xl mx-auto mb-8 animate-pulse">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 text-blue-800 p-5 rounded-xl shadow-lg">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
                <p className="font-semibold text-base">
                  Analyzing product information...
                </p>
              </div>
            </div>
          </div>
        )}
        
        
        

        {/* Scanner Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">

            <BarcodeScanner onScan={handleScan} onError={handleError} />
          </div>
        </div>
      </div>
    </div>
  );
}
