//src/app/api/track/food-items/route.ts
import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const user = await stackServerApp.getUser();
  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized", code: "AUTH_REQUIRED" },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";
  const limit = parseInt(searchParams.get("limit") || "20", 10);
  const category = searchParams.get("category");
  
  try {
    // nyari food items berdasarkan nama dan category makanan
    const foodItems = await prisma.foodItem.findMany({
      where: {
        // Filter by name if query is not empty
        ...(query !== "" && {
          name: {
            contains: query,
            mode: "insensitive",
          },
        }),
        // Filter by category if provided and not empty
        ...(category && category !== "" && { category }),
      },
      orderBy: {
        name: "asc",
      },
      take: limit,
    });
    
    return NextResponse.json(foodItems);
  } catch (error) {
    console.error("Error searching food items:", error);
    return NextResponse.json(
      { error: "Failed to search food items" },
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
    
    return NextResponse.json(foodItem);
  } catch (error) {
    console.error("Error adding food item:", error);
    return NextResponse.json(
      { error: "Failed to add food item" },
      { status: 500 }
    );
  }
}