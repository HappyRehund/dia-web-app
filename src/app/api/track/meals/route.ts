import { MealCategory } from "@/generated/prisma";
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