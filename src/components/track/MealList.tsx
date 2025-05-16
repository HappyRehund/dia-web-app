//src/components/track/MealList.tsx
"use client";
import { Meal } from "@/generated/prisma";
import { useRemoveMeal } from "@/hooks/useDietTracking";
import { useState } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";

interface MealsListProps {
  meals: Meal[];
}

export default function MealsList({ meals }: MealsListProps) {
  const { mutate: removeMeal, isPending } = useRemoveMeal();
  const [mealToDelete, setMealToDelete] = useState<string | null>(null);

  const handleDelete = () => {
    if (!mealToDelete) return;

    removeMeal(mealToDelete, {
      onSuccess: () => {
        toast.success("Meal removed successfully");
        setMealToDelete(null);
      },
      onError: () => {
        toast.error("Failed to remove meal");
        setMealToDelete(null);
      },
    });
  };

  // Group meals by category
  const mealsByCategory: Record<string, Meal[]> = meals.reduce(
    (groups, meal) => {
      const category = meal.category;

      if (!groups[category]) {
        groups[category] = [];
      }

      groups[category].push(meal);
      return groups;
    },
    {} as Record<string, Meal[]>
  );

  const categoryOrder = ["BREAKFAST", "LUNCH", "DINNER", "SNACK"];
  const sortedCategories = Object.keys(mealsByCategory).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  if (meals.length == 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No meals added for today, Click "Add Meal" to get started
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {sortedCategories.map((category) => (
        <div key={category} className="space-y-1">
          <h3 className="font-bold text-lg capitalize">
            {category.toLowerCase()}
          </h3>
          <div className="grid gap-3 md:grid-cols-3">
            {mealsByCategory[category].map((meal) => (
              <Card key={meal.id} className="overflow-hidden bg-secondary w-full">
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-semibold">
                    {meal.name}
                  </CardTitle>
                  <AlertDialog
                    open={mealToDelete === meal.id}
                    onOpenChange={(open) => !open && setMealToDelete(null)}
                  >
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => setMealToDelete(meal.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Remove this meal?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will remove "{meal.name}" from your tracked
                          meals.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleDelete}
                          className="bg-red-500 hover:bg-red-600"
                          disabled={isPending}
                        >
                          {isPending ? "Removing..." : "Remove"}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">{meal.calories} kcal</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant={"outline"} className="px-2 py-2 space-x-2 bg-[#484848] text-white">
                      Carbs: {meal.carbs}g
                    </Badge>
                    <Badge variant={"outline"} className="px-2 py-2 space-x-2 bg-[#96661A] text-white">
                      Protein: {meal.protein}g
                    </Badge>
                    <Badge variant={"outline"} className="px-2 py-2 space-x-2 bg-[#f9dd29] text-black">
                      Fat: {meal.fat}g
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
