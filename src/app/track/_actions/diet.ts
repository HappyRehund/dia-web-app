//src/app/track/_actions/diet.ts
"use server";
import { MealCategory } from "@/generated/prisma";
import { DateToUTCDate, getDateRange } from "@/lib/helpers/date2utc";
import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack";
import { redirect } from "next/navigation";

interface AddMealData {
  name: string;
  category: MealCategory;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  date: Date | string;
}

interface UpdateDietTrackingData {
  date: Date | string;
  totalCalories?: number;
  totalCarbs?: number;
  totalProtein?: number;
  totalFat?: number;
}

interface AddFoodItem {
  name: string;
  category?: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  recipe?: string;
}

export async function addMeal(data: AddMealData) {
  const user = await stackServerApp.getUser();
  if (!user) redirect("/handler/sign-in");

  // Create UTC date with just the date part (no time)
  const utcDate = DateToUTCDate(data.date);

  try {
    // Ensure user profile exists
    await prisma.userProfile.upsert({
      where: { userId: user.id },
      update: {},
      create: {
        userId: user.id,
        height: 0,
        weight: 0,
      },
    });

    // Get date range for the specified date
    const { startOfDay, endOfDay } = getDateRange(data.date);

    // Find or create diet tracking for the date (search by date range)
    let dietTracking = await prisma.dietTracking.findFirst({
      where: {
        userId: user.id,
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    if (!dietTracking) {
      dietTracking = await prisma.dietTracking.create({
        data: {
          userId: user.id,
          date: utcDate,
          totalCalories: 0,
          totalCarbs: 0,
          totalProtein: 0,
          totalFat: 0,
        },
      });
    }

    // Add the meal
    const meal = await prisma.meal.create({
      data: {
        userId: user.id,
        dietTrackingId: dietTracking.id,
        name: data.name,
        category: data.category,
        calories: data.calories,
        carbs: data.carbs,
        protein: data.protein,
        fat: data.fat,
        date: utcDate,
      },
    });

    // Update diet tracking totals
    await prisma.dietTracking.update({
      where: { id: dietTracking.id },
      data: {
        totalCalories: { increment: data.calories },
        totalCarbs: { increment: data.carbs },
        totalProtein: { increment: data.protein },
        totalFat: { increment: data.fat },
      },
    });

    return meal;
  } catch (error) {
    console.error("Error adding meal:", error);
    throw new Error("Failed to add meal");
  }
}
export async function removeMeal(mealId: string) {
  const user = await stackServerApp.getUser();
  if (!user) redirect("handler/sign-in");

  try {
    // get meal biar tau berapa yang mau dikurangin
    const meal = await prisma.meal.findUnique({
      where: { id: mealId },
      include: { dietTracking: true },
    });

    if (!meal || meal.userId !== user.id) {
      throw new Error("Meal not found or unauthorized");
    }

    await prisma.meal.delete({
      where: { id: mealId },
    });

    if (meal.dietTrackingId) {
      await prisma.dietTracking.update({
        where: { id: meal.dietTrackingId },
        data: {
          totalCalories: { decrement: meal.calories },
          totalCarbs: { decrement: meal.carbs },
          totalProtein: { decrement: meal.protein },
          totalFat: { decrement: meal.fat },
        },
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Error removing meal:", error);
    throw new Error("Failed to remove meal");
  }
}

export async function addFoodItem(data: AddFoodItem) {
  const user = await stackServerApp.getUser();
  if (!user) redirect("handler/sign-in");

  try {
    const foodItem = await prisma.foodItem.create({
      data: {
        name: data.name,
        category: data.category,
        calories: data.calories,
        carbs: data.carbs,
        protein: data.protein,
        fat: data.fat,
        recipe: data.recipe,
      },
    });
    
    return foodItem;
  } catch (error) {
    console.error("Error adding food item:", error);
    throw new Error("Failed to add food item");
  }
}