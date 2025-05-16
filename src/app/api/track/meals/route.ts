//src/app/api/track/meals/route.ts
import { MealCategory } from "@/generated/prisma";
import { DateToUTCDate, getDateRange } from "@/lib/helpers/date2utc";
import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const user = await stackServerApp.getUser();
  if (!user)
    return NextResponse.json({ error: "Unauthorized", code: "AUTH_REQUIRED" }, { status: 401 });
  
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const limit = parseInt(searchParams.get("limit") || "7", 10);
  const dateParam = searchParams.get("date");
  
  try {
    // Build query conditions
    const whereClause: any = {
      userId: user.id,
    };
    
    // Add category filter if provided
    if (category) {
      whereClause.category = category as MealCategory;
    }
    
    // Add date filter if provided
    if (dateParam) {
      const date = new Date(dateParam);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      
      whereClause.date = {
        gte: new Date(Date.UTC(year, month, day, 0, 0, 0)),
        lt: new Date(Date.UTC(year, month, day + 1, 0, 0, 0)),
      };
    }
    
    const meals = await prisma.meal.findMany({
      where: whereClause,
      orderBy: {
        date: "desc",
      },
      take: limit,
    });
    
    return NextResponse.json(meals);
  } catch (error) {
    console.error("Error fetching meal history", error);
    return NextResponse.json(
      { error: "Failed to fetch meal history" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const user = await stackServerApp.getUser();
  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized", code: "AUTH_REQUIRED" }, 
      { status: 401 }
    );
  }

  try {
    const data = await request.json();
    
    // Create UTC date with just the date part (no time)
    const utcDate = DateToUTCDate(data.date);

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
        category: data.category as MealCategory,
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

    return NextResponse.json(meal);
  } catch (error) {
    console.error("Error adding meal:", error);
    return NextResponse.json(
      { error: "Failed to add meal" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const user = await stackServerApp.getUser();
  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized", code: "AUTH_REQUIRED" },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const mealId = searchParams.get("id");

  if (!mealId) {
    return NextResponse.json(
      { error: "Meal ID is required" },
      { status: 400 }
    );
  }

  try {
    // Get meal to know how much to subtract from tracking
    const meal = await prisma.meal.findUnique({
      where: { id: mealId },
      include: { dietTracking: true },
    });

    if (!meal || meal.userId !== user.id) {
      return NextResponse.json(
        { error: "Meal not found or unauthorized" },
        { status: 404 }
      );
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error removing meal:", error);
    return NextResponse.json(
      { error: "Failed to remove meal" },
      { status: 500 }
    );
  }
}