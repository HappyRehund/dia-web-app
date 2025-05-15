//src/hooks/useDietTracking.ts
import {
  addFoodItem,
  addMeal,
  removeMeal
} from "@/app/track/_actions/diet";
import { FoodItem, Meal, MealCategory } from "@/generated/prisma";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export interface DietTracking {
  id: string;
  userId: string;
  date: string;
  totalCalories: number;
  totalCarbs: number;
  totalProtein: number;
  totalFat: number;
  meals: Meal[];
}

export const fetchDailyDietTracking = async (
  date?: Date | string
): Promise<DietTracking> => {
  // Parse the date parameter
  const targetDate = date ? new Date(date) : new Date();

  // Format as YYYY-MM-DD for the API parameter
  // Gunakan langsung tahun, bulan, dan hari dari tanggal lokal
  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, "0"); // +1 karena getMonth() dimulai dari 0
  const day = String(targetDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const response = await fetch(`/api/track/daily?date=${formattedDate}`);
  if (!response.ok) {
    const data = await response.json();
    // Handle authentication error
    if (data.code === "AUTH_REQUIRED") {
      // Instead of redirecting here, throw a special error
      throw new Error("AUTH_REQUIRED");
    }
    throw new Error(data.error || "Failed to fetch diet tracking data");
  }

  return response.json();
};

export const fetchMealHistory = async (
  limit = 7,
  category?: MealCategory
): Promise<Meal[]> => {
  let url = `/api/track/meals?limit=${limit}`;
  if (category) {
    url += `&category=${category}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    const data = await response.json();
    // Handle authentication error
    if (data.code === "AUTH_REQUIRED") {
      throw new Error("AUTH_REQUIRED");
    }
    throw new Error(data.error || "Failed to fetch meal history");
  }
  return response.json();
};

export const searchFoodItems = async (
  query: string,
  limit = 20,
  category?: string
): Promise<FoodItem[]> => {
  let url = `/api/track/food-items?q=${encodeURIComponent(
    query
  )}&limit=${limit}`;
  if (category) {
    url += `&category=${encodeURIComponent(category)}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    const data = await response.json();
    // Handle authentication error
    if (data.code === "AUTH_REQUIRED") {
      throw new Error("AUTH_REQUIRED");
    }
    throw new Error(data.error || "Failed to search food items");
  }
  return response.json();
};

export function useDailyDietTracking(date?: Date | string) {
  // Format tanggal untuk query key
  const targetDate = date ? new Date(date) : new Date();
  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, "0");
  const day = String(targetDate.getDate()).padStart(2, "0");
  const queryDate = `${year}-${month}-${day}`;

  return useQuery({
    queryKey: ["dietTracking", queryDate],
    queryFn: () => fetchDailyDietTracking(date),
  });
}
export function useMealHistory(limit = 7, mealCategory?: MealCategory) {
  return useQuery({
    queryKey: ["mealHistory", limit, mealCategory],
    queryFn: () => fetchMealHistory(limit, mealCategory),
  });
}

export function useFoodItemSearch(query: string, limit = 20, category: string) {
  return useQuery({
    queryKey: ["foodItems", query, limit, category],
    queryFn: () => searchFoodItems(query, limit, category),
    enabled: true,
  });
}

//Mutation
export function useAddMeal() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addMeal,
    onSuccess: (_, variables) => {
      const date = new Date(variables.date);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const queryDate = `${year}-${month}-${day}`;

      queryClient.invalidateQueries({
        queryKey: ["dietTracking", queryDate],
      });
      queryClient.invalidateQueries({ queryKey: ["mealHistory"] });
    },
  });
}

export function useRemoveMeal() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeMeal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dietTracking"] });
      queryClient.invalidateQueries({ queryKey: ["mealHistory"] });
    },
  });
}

export function useAddFoodItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addFoodItem,
    onSuccess: () => {
      
      queryClient.invalidateQueries({ queryKey: ["foodItems"] });
      queryClient.invalidateQueries({ queryKey: ["dietTracking"] });
    },
  });
}