//src/components/track/FoodSearch.tsx
"use client";
import { FoodItem } from "@/generated/prisma";
import { useDebounce } from "@/hooks/use-debounce";
import { useFoodItemSearch } from "@/hooks/useDietTracking";
import { useState } from "react";
import { Input } from "../ui/input";
import { BookOpen, ChevronRight, Loader2, Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

export default function FoodSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedFoodItem, setSelectedFoodItem] = useState<FoodItem | null>(
    null
  );

  const debouncedQuery = useDebounce(searchQuery);

  const { data: foodItems = [], isLoading } = useFoodItemSearch(
    debouncedQuery,
    20,
    selectedCategory === "all" ? "" : selectedCategory
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          placeholder="Search for recipes and food items..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs
        defaultValue="all"
        value={selectedCategory}
        onValueChange={setSelectedCategory}
      >
        <TabsList className="grid grid-cols-6 w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
          <TabsTrigger value="cereals">Cereals</TabsTrigger>
          <TabsTrigger value="protein">Protein</TabsTrigger>
          <TabsTrigger value="oilsandfats">Oils and fats</TabsTrigger>
          <TabsTrigger value="beverages">Beverages</TabsTrigger>
        </TabsList>
      </Tabs>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      ) : foodItems.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          {searchQuery ? "No food items found" : "Search for food recipes"}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {foodItems.map((item) => (
            <Card
              key={item.id}
              className="cursor-pointer bg-secondary hover:bg-yellow-500 transition-colors"
              onClick={() => setSelectedFoodItem(item)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                {item.category && (
                  <CardDescription>
                    <Badge variant="outline" className="capitalize">
                      {item.category.toLowerCase()}
                    </Badge>
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="pb-2">
                <div className="text-sm space-y-1">
                  <div className="font-semibold">{item.calories} kcal</div>
                  <div className="grid grid-cols-3 gap-2">
                    <Badge variant={"outline"} className="px-2 py-2 space-x-2 bg-[#484848]">
                      <div className="text-xs text-white">Carbs : </div>
                      <div className="text-white">{item.carbs}g</div>
                    </Badge>
                    <Badge variant={"outline"} className="px-2 py-2 space-x-2 bg-[#96661A]">
                      <div className="text-xs text-white">Protein :</div>
                      <div className="text-white">{item.protein}g</div>
                    </Badge>
                    <Badge variant={"outline"} className="px-2 py-2 space-x-2 bg-[#f9dd29]">
                      <div className="text-xs text-black">Fat :</div>
                      <div className="text-black">{item.fat}g</div>
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex items-center text-sm text-black font-semibold">
                  <span className="mr-1">View recipe</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <FoodRecipeDialog
        open={!!selectedFoodItem}
        onOpenChange={(open) => !open && setSelectedFoodItem(null)}
        foodItem={selectedFoodItem}
      />
    </div>
  );
}

interface FoodRecipeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  foodItem: any | null;
}

function FoodRecipeDialog({
  open,
  onOpenChange,
  foodItem,
}: FoodRecipeDialogProps) {
  if (!foodItem) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] bg-yellow-50">
        <DialogHeader>
          <DialogTitle>{foodItem.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="text-lg font-medium">{foodItem.calories} kcal</div>
            {foodItem.category && (
              <Badge variant="outline" className="capitalize">
                {foodItem.category.toLowerCase()}
              </Badge>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-[#484848] p-3 rounded-lg">
              <div className="text-sm text-white">Carbs</div>
              <div className="font-semibold text-white">{foodItem.carbs}g</div>
            </div>
            <div className="bg-[#96661A] p-3 rounded-lg">
              <div className="text-sm text-white">Protein</div>
              <div className="font-semibold text-white">{foodItem.protein}g</div>
            </div>
            <div className="bg-[#f9dd29] p-3 rounded-lg">
              <div className="text-sm text-black">Fat</div>
              <div className="font-semibold">{foodItem.fat}g</div>
            </div>
          </div>

          {foodItem.recipe && (
            <>
              <div className="flex items-center text-lg font-medium gap-2">
                <BookOpen className="h-5 w-5" />
                <span>Recipe</span>
              </div>
              <ScrollArea className="h-[200px]">
                <div className="whitespace-pre-wrap">{foodItem.recipe}</div>
              </ScrollArea>
            </>
          )}

          {!foodItem.recipe && (
            <div className="text-center text-gray-500 py-4">
              No recipe available for this food item.
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
