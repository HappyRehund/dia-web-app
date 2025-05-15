//src/lib/helpers/track-nutrients.ts
import { DietTracking } from "@/hooks/useDietTracking";

export function calculateNutrientPercentages(dietTracking: DietTracking) {
  // Convert grams to calories
  // (rough approximation: 4 calories per gram of carbs/protein, 9 for fat)
  const carbsCalories = dietTracking.totalCarbs * 4;
  const proteinCalories = dietTracking.totalProtein * 4;
  const fatCalories = dietTracking.totalFat * 9;

  const totalNutrientCalories = carbsCalories + proteinCalories + fatCalories;

  // Avoid division by zero
  if (totalNutrientCalories === 0) {
    return {
      carbsPercentage: 0,
      proteinPercentage: 0,
      fatPercentage: 0,
      isBalanced: true,
      warning: null,
    };
  }

  const carbsPercentage = (carbsCalories / totalNutrientCalories) * 100;
  const proteinPercentage = (proteinCalories / totalNutrientCalories) * 100;
  const fatPercentage = (fatCalories / totalNutrientCalories) * 100;

  // Check if diet is balanced according to the requirements
  let isBalanced = true;
  let warning = null;

  if (carbsPercentage > 60) {
    isBalanced = false;
    warning = "Your diet is not balanced. Avoid eating carbs too much.";
  } else if (fatPercentage > 35) {
    isBalanced = false;
    warning = "Your diet is not balanced. Avoid eating fat too much.";
  }

  return {
    carbsPercentage,
    proteinPercentage,
    fatPercentage,
    isBalanced,
    warning,
  };
}
