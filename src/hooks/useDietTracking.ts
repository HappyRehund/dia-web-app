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

// API Function for adding a meal
export const addMealApi = async (data: {
  name: string;
  category: MealCategory;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  date: Date | string;
}) => {
  const response = await fetch('/api/track/meals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    if (errorData.code === "AUTH_REQUIRED") {
      throw new Error("AUTH_REQUIRED");
    }
    throw new Error(errorData.error || "Failed to add meal");
  }

  return response.json();
};

// API Function for removing a meal
export const removeMealApi = async (mealId: string) => {
  const response = await fetch(`/api/track/meals?id=${mealId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const errorData = await response.json();
    if (errorData.code === "AUTH_REQUIRED") {
      throw new Error("AUTH_REQUIRED");
    }
    throw new Error(errorData.error || "Failed to remove meal");
  }

  return response.json();
};

// API Function for adding a food item
export const addFoodItemApi = async (data: {
  name: string;
  category?: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  recipe?: string;
}) => {
  const response = await fetch('/api/track/food-items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    if (errorData.code === "AUTH_REQUIRED") {
      throw new Error("AUTH_REQUIRED");
    }
    throw new Error(errorData.error || "Failed to add food item");
  }

  return response.json();
};

export const fetchDailyDietTracking = async (
  date?: Date | string
): Promise<DietTracking> => {
  // Parse the date parameter
  const targetDate = date ? new Date(date) : new Date();

  // Format as YYYY-MM-DD for the API parameter
  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, "0"); // +1 because getMonth() starts from 0
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
  // Format date for query key
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

// Mutations
export function useAddMeal() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addMealApi,
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
    mutationFn: removeMealApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dietTracking"] });
      queryClient.invalidateQueries({ queryKey: ["mealHistory"] });
    },
  });
}

export function useAddFoodItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addFoodItemApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foodItems"] });
      queryClient.invalidateQueries({ queryKey: ["dietTracking"] });
    },
  });
}