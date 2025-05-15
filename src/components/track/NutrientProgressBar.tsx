//src/components/track/NutrientProgressBar.tsx
"use client"

import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "../ui/alert"

interface NutrientProgressBarProps {
    totalCalories: number
    carbsPercentage: number
    proteinPercentage: number
    fatPercentage: number
    warning: string | null
}

export default function NutrientProgressBar({
  totalCalories,
  carbsPercentage,
  proteinPercentage,
  fatPercentage,
  warning,
}: NutrientProgressBarProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Total Calories Today</h3>
        <span className="text-2xl font-bold">{totalCalories} kcal</span>
      </div>

      <div className="h-8 w-full rounded-full overflow-hidden flex">
        {carbsPercentage > 0 && (
          <div 
            className="h-full bg-blue-500 flex items-center justify-center text-xs font-medium text-white"
            style={{ width: `${carbsPercentage}%` }}
          >
            {carbsPercentage > 10 && `${Math.round(carbsPercentage)}% Carbs`}
          </div>
        )}
        {proteinPercentage > 0 && (
          <div 
            className="h-full bg-green-500 flex items-center justify-center text-xs font-medium text-white"
            style={{ width: `${proteinPercentage}%` }}
          >
            {proteinPercentage > 10 && `${Math.round(proteinPercentage)}% Protein`}
          </div>
        )}
        {fatPercentage > 0 && (
          <div 
            className="h-full bg-yellow-500 flex items-center justify-center text-xs font-medium text-white"
            style={{ width: `${fatPercentage}%` }}
          >
            {fatPercentage > 10 && `${Math.round(fatPercentage)}% Fat`}
          </div>
        )}
        {totalCalories === 0 && (
          <div className="h-full bg-gray-200 w-full flex items-center justify-center text-xs font-medium text-gray-500">
            No meals tracked today
          </div>
        )}
      </div>

      <div className="flex gap-4 text-sm">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-blue-500 mr-1"></div>
          <span>Carbs: {Math.round(carbsPercentage)}%</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-green-500 mr-1"></div>
          <span>Protein: {Math.round(proteinPercentage)}%</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-yellow-500 mr-1"></div>
          <span>Fat: {Math.round(fatPercentage)}%</span>
        </div>
      </div>

      {warning && (
        <Alert variant="destructive" className="mt-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>{warning}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}