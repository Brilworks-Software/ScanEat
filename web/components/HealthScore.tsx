'use client';

import { NOVA_GROUPS } from '../utils/novaGrouping';

interface HealthScoreProps {
  healthScore: any;
  size?: 'small' | 'medium' | 'large';
}

export default function HealthScore({ healthScore, size = 'medium' }: HealthScoreProps) {
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'excellent':
        return 'bg-green-500';
      case 'good':
        return 'bg-green-400';
      case 'moderate':
        return 'bg-yellow-500';
      case 'poor':
        return 'bg-orange-500';
      case 'avoid':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getNutriScoreColor = (nutriScore: string) => {
    switch (nutriScore.toUpperCase()) {
      case 'A':
        return 'bg-green-600';
      case 'B':
        return 'bg-green-500';
      case 'C':
        return 'bg-yellow-500';
      case 'D':
        return 'bg-orange-500';
      case 'E':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getGradeText = (grade: string) => {
    switch (grade) {
      case 'excellent':
        return 'Excellent';
      case 'good':
        return 'Good';
      case 'moderate':
        return 'Moderate';
      case 'poor':
        return 'Poor';
      case 'avoid':
        return 'Avoid';
      default:
        return 'Unknown';
    }
  };

  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-2xl',
  };

  const sizeDimensions = {
    small: 'w-16 h-16 text-lg',
    medium: 'w-24 h-24 text-2xl',
    large: 'w-32 h-32 text-4xl',
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Score Circle */}
      <div className="relative">
        <div className={`${sizeDimensions[size]} rounded-full ${getGradeColor(healthScore.grade)} flex items-center justify-center text-white font-bold shadow-lg transform hover:scale-105 transition-transform`}>
          <span className="drop-shadow-md">{healthScore.score}</span>
        </div>
        {healthScore.nutriScore && (
          <div className={`absolute -top-2 -right-2 ${getNutriScoreColor(healthScore.nutriScore)} text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white`}>
            {healthScore.nutriScore === "UNKNOWN" ? "NA" : healthScore.nutriScore}
          </div>
        )}
        {/* Score indicator ring */}
        <svg className="absolute inset-0 transform -rotate-90" width={size === 'large' ? 128 : size === 'medium' ? 96 : 64} height={size === 'large' ? 128 : size === 'medium' ? 96 : 64}>
          <circle
            cx={size === 'large' ? 64 : size === 'medium' ? 48 : 32}
            cy={size === 'large' ? 64 : size === 'medium' ? 48 : 32}
            r={size === 'large' ? 60 : size === 'medium' ? 44 : 28}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${(healthScore.score / 100) * 2 * Math.PI * (size === 'large' ? 60 : size === 'medium' ? 44 : 28)} ${2 * Math.PI * (size === 'large' ? 60 : size === 'medium' ? 44 : 28)}`}
            className="text-white opacity-30"
          />
        </svg>
      </div>

      {/* Grade Badge */}
      <div className={`px-6 py-2 rounded-full ${getGradeColor(healthScore.grade)} text-white text-sm font-bold shadow-md transform hover:scale-105 transition-transform`}>
        {getGradeText(healthScore.grade)}
      </div>

      {/* NOVA Group */}
      {healthScore.novaGroup && (
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 ${NOVA_GROUPS[healthScore.novaGroup as keyof typeof NOVA_GROUPS]?.bgColor || 'bg-gray-100'} ${NOVA_GROUPS[healthScore.novaGroup as keyof typeof NOVA_GROUPS]?.borderColor || 'border-gray-200'}`}>
          <span className="text-xs font-semibold text-gray-600">NOVA</span>
          <span className={`text-sm font-bold ${NOVA_GROUPS[healthScore.novaGroup as keyof typeof NOVA_GROUPS]?.color || 'text-gray-800'}`}>
            Group {healthScore.novaGroup}
          </span>
          <div className="text-xs text-gray-600 ml-1 max-w-32 truncate" title={NOVA_GROUPS[healthScore.novaGroup as keyof typeof NOVA_GROUPS]?.description || ''}>
            {NOVA_GROUPS[healthScore.novaGroup as keyof typeof NOVA_GROUPS]?.name.split(' ').join(' ')}
          </div>
        </div>
      )}
    </div>
  );
}

