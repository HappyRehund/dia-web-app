//src/components/track/AddMealDialog.tsx
"use client"
import { FoodItem, MealCategory } from "@/generated/prisma"
import { useDebounce } from "@/hooks/use-debounce";
import { useAddMeal } from "@/hooks/useDietTracking";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Loader2, Search } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    name: z.string().min(1, "Meal name is required"),
    category: z.nativeEnum(MealCategory),
    calories: z.coerce.number().min(0, "Must be a positive number"),
    carbs: z.coerce.number().min(0, "Must be a positive number"),
    protein: z.coerce.number().min(0, "Must be a positive number"),
    fat: z.coerce.number().min(0, "Must be a positive number"),
})

//type of Form
type FormValues = z.infer<typeof formSchema>

interface AddMealDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    selectedDate: Date,
}

export default function AddMealDialog({
    open, 
    onOpenChange,
    selectedDate
}: AddMealDialogProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const debouncedQuery = useDebounce(searchQuery)
    const [selectedSearchTab, setSelectedSearchTab] = useState<string>("all");
    const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    // Independent search function for the dialog
    const searchFoodItems = async () => {
        if (!open) return;
        
        setIsSearching(true);
        try {
            let url = `/api/track/food-items?q=${encodeURIComponent(debouncedQuery)}&limit=20`;
            if (selectedSearchTab !== "all") {
                url += `&category=${encodeURIComponent(selectedSearchTab)}`;
            }
            
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to search food items");
            }
            
            const data = await response.json();
            setFoodItems(data);
        } catch (error) {
            console.error("Error searching food items:", error);
        } finally {
            setIsSearching(false);
        }
    };

    // Effect to search when dialog is open
    useEffect(() => {
        if (open) {
            searchFoodItems();
        }
    }, [open]); // This will trigger when dialog opens

    // Update search when query changes
    useEffect(() => {
        if (open) {
            searchFoodItems();
        }
    }, [debouncedQuery, selectedSearchTab]); // This will trigger when search query changes

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            category: MealCategory.BREAKFAST,
            calories: 0,
            carbs: 0,
            protein: 0,
            fat: 0,
        }
    })

    const { mutate: addMeal, isPending } = useAddMeal();

    const onSubmit = (values: FormValues) => {
        addMeal(
            {
                ...values,
                date: selectedDate,
            },
            {
                onSuccess: () => {
                    toast.success("Meal added successfully")
                    form.reset();
                    onOpenChange(false);
                },
                onError: () => {
                    toast.error("Failed to add meal")
                }
            }
        )
    }

    const handleFoodItemSelect = (item: FoodItem) => {
        form.setValue("name", item.name)
        form.setValue("calories", item.calories)
        form.setValue("carbs", item.carbs)
        form.setValue("protein", item.protein)
        form.setValue("fat", item.fat)
    }

    return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Add a Meal</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 overflow-hidden">
          {/* Left side: Food search */}
          <div className="space-y-4 flex flex-col">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search for food..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <ScrollArea className="flex-1 h-[320px] border rounded-md p-2">
              {isSearching ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                </div>
              ) : foodItems.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No food items found
                </div>
              ) : (
                <div className="space-y-2">
                  {foodItems.map((item) => (
                    <Card 
                      key={item.id} 
                      className="cursor-pointer hover:bg-gray-50"
                      onClick={() => handleFoodItemSelect(item)}
                    >
                      <CardContent className="p-3">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500 flex gap-2">
                          <span>{item.calories} kcal</span>
                          <span>•</span>
                          <span>C: {item.carbs}g</span>
                          <span>•</span>
                          <span>P: {item.protein}g</span>
                          <span>•</span>
                          <span>F: {item.fat}g</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </ScrollArea>
          </div>
          
          {/* Right side: Meal form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meal Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="BREAKFAST">Breakfast</SelectItem>
                        <SelectItem value="LUNCH">Lunch</SelectItem>
                        <SelectItem value="DINNER">Dinner</SelectItem>
                        <SelectItem value="SNACK">Snack</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="calories"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Calories</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="carbs"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Carbs (g)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="protein"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Protein (g)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="fat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fat (g)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  "Add Meal"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}