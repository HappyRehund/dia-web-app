"use client"
import { useDailyDietTracking } from '@/hooks/useDietTracking'
import { calculateNutrientPercentages } from '@/lib/helpers/track-nutrients';
import React, { useState } from 'react'
import AddMealDialog from './AddMealDialog';
import MealsList from './MealList';
import { Skeleton } from '../ui/skeleton';
import FoodSearch from './FoodSearch';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { DatePicker } from './DatePicker';
import { Card, CardContent } from '../ui/card';
import NutrientProgressBar from './NutrientProgressBar';
import { formatDate } from '@/lib/helpers/date2utc';
import AddFoodItemDialog from './AddFoodItemDialog';

function DietContent() {
  const [date, setDate] = useState<Date>(new Date())
  const [isAddMealDialogOpen, setIsAddMealDialogOpen] = useState(false)
  
  // useDailyDietTracking should now work with the API Routes
  const { data: dietTracking, isLoading } = useDailyDietTracking(date);
  
  const nutrientData = dietTracking ? calculateNutrientPercentages(dietTracking) : {
    carbsPercentage: 0,
    proteinPercentage: 0,
    fatPercentage: 0,
    isBalanced: true,
    warning: null
  }
 
  return (
    <div className="container w-full pb-8 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">{formatDate(date)}</h1>
        {/* <DatePicker date={date} setDate={setDate} /> */}
      </div>
      <Card>
        <CardContent className="pt-6 bg-secondary rounded-lg">
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-6 w-1/2" />
            </div>
          ) : (
            <NutrientProgressBar
              totalCalories={dietTracking?.totalCalories || 0}
              carbsPercentage={nutrientData.carbsPercentage}
              proteinPercentage={nutrientData.proteinPercentage}
              fatPercentage={nutrientData.fatPercentage}
              warning={nutrientData.warning}
            />
          )}
        </CardContent>
      </Card>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">My Meals</h2>
        <Button onClick={() => setIsAddMealDialogOpen(true)} variant={'outline'} className='bg-black text-white'>
          <Plus className="mr-2 h-4 w-4" /> Add Meal
        </Button>
      </div>
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      ) : (
        <MealsList meals={dietTracking?.meals || []} />
      )}
      <div className="pt-6">
        <h2 className="text-2xl font-semibold mb-4">Food Library</h2>
        <div className="flex flex-col text-center text-sm md:text-base md:flex-row justify-between items-center mb-4">
          <div>Search or add custom food items to your library</div>
          <AddFoodItemDialog />
        </div>
        <FoodSearch />
      </div>
      <AddMealDialog
        open={isAddMealDialogOpen}
        onOpenChange={setIsAddMealDialogOpen}
        selectedDate={date}
      />
    </div>
  )
}

export default DietContent