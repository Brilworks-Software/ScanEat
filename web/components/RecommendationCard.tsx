'use client';

import { HealthScore } from '../types/product';
import { CheckCircle2, AlertTriangle, BarChart3 } from 'lucide-react';

interface RecommendationCardProps {
  healthScore: HealthScore;
}

export default function RecommendationCard({ healthScore }: RecommendationCardProps) {
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

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 rounded-full p-2">
          <CheckCircle2 className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Health Recommendations</h3>
      </div>
      
      {/* Recommendations */}
      {healthScore.recommendations.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
            <span className="bg-green-100 rounded-full p-1">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
            </span>
            Recommendations
          </h4>
          <ul className="space-y-3">
            {healthScore.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-3 bg-green-50 rounded-lg p-3 border border-green-200">
                <span className="text-green-600 mt-0.5 font-bold">✓</span>
                <span className="text-sm text-gray-800 flex-1">{formatNumbersInText(rec)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Warnings */}
      {healthScore.warnings.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-bold text-red-700 mb-3 flex items-center gap-2">
            <span className="bg-red-100 rounded-full p-1">
              <AlertTriangle className="w-4 h-4 text-red-600" />
            </span>
            Warnings
          </h4>
          <ul className="space-y-3">
            {healthScore.warnings.map((warning, index) => (
              <li key={index} className="flex items-start gap-3 bg-red-50 rounded-lg p-3 border border-red-200">
                <span className="text-red-600 mt-0.5 font-bold">⚠</span>
                <span className="text-sm text-gray-800 flex-1">{formatNumbersInText(warning)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Health Reasons */}
      {healthScore.reasons.length > 0 && (
        <div>
          <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
            <span className="bg-blue-100 rounded-full p-1">
              <BarChart3 className="w-4 h-4 text-blue-600" />
            </span>
            Analysis Details
          </h4>
          <div className="space-y-3">
            {healthScore.reasons.map((reason, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border text-sm ${
                  reason.type === 'positive'
                    ? 'bg-green-50 border-green-200 text-green-800'
                    : reason.type === 'negative'
                    ? 'bg-red-50 border-red-200 text-red-800'
                    : 'bg-yellow-50 border-yellow-200 text-yellow-800'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold capitalize">{reason.category.replace(/([A-Z])/g, ' $1').trim()}:</span>
                  {/* <span className={`font-bold text-lg ${reason.impact > 0 ? 'text-green-700' : 'text-red-700'}`}>
                    {reason.impact > 0 ? '+' : ''}{reason.impact}
                  </span> */}
                </div>
                <p className="text-xs mt-1 opacity-90">{formatNumbersInText(reason.message)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

