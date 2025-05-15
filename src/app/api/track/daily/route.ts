import { DateToUTCDate } from "@/lib/helpers/date2utc";
import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const user = await stackServerApp.getUser();
    if(!user) return NextResponse.json({error: "unauthorized", code: "AUTH_REQUIRED"}, {status: 401})
   
    const { searchParams } = new URL(request.url);
    const dateParam = searchParams.get('date');
    
    let date;
    if (dateParam) {
        // Parse date parameter (expected format YYYY-MM-DD)
        const [year, month, day] = dateParam.split('-').map(Number);
        // Bulan dikurangi 1 karena dalam JavaScript bulan dimulai dari 0
        date = new Date(Date.UTC(year, month - 1, day));
    } else {
        date = new Date();
    }
   
    // Extract year, month, day for date matching
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
   
    try {
        // Find all diet tracking entries for the same date (ignoring time)
        const dietTrackingEntries = await prisma.dietTracking.findMany({
            where: {
                userId: user.id,
                date: {
                    // Match entries from the start of the day to the end of the day
                    gte: new Date(Date.UTC(year, month, day, 0, 0, 0)),
                    lt: new Date(Date.UTC(year, month, day + 1, 0, 0, 0)),
                }
            },
            include: {
                meals: {
                    orderBy: {
                        category: 'asc'
                    }
                }
            }
        });
       
        if (dietTrackingEntries.length === 0) {
            return NextResponse.json({
                userId: user.id,
                date: new Date(Date.UTC(year, month, day)),
                totalCalories: 0,
                totalCarbs: 0,
                totalProtein: 0,
                totalFat: 0,
                meals: [],
            });
        }
       
        // If multiple entries exist for the same day, combine them
        if (dietTrackingEntries.length > 1) {
            // Combine all meals
            const allMeals = dietTrackingEntries.flatMap(entry => entry.meals);
           
            // Sum up nutrition totals
            const totalCalories = dietTrackingEntries.reduce((sum, entry) => sum + entry.totalCalories, 0);
            const totalCarbs = dietTrackingEntries.reduce((sum, entry) => sum + entry.totalCarbs, 0);
            const totalProtein = dietTrackingEntries.reduce((sum, entry) => sum + entry.totalProtein, 0);
            const totalFat = dietTrackingEntries.reduce((sum, entry) => sum + entry.totalFat, 0);
           
            return NextResponse.json({
                userId: user.id,
                date: new Date(Date.UTC(year, month, day)),
                totalCalories,
                totalCarbs,
                totalProtein,
                totalFat,
                meals: allMeals,
            });
        }
       
        // Return the single entry if only one exists
        return NextResponse.json(dietTrackingEntries[0]);
    } catch (error) {
        console.error("Error fetching diet tracking:", error);
        return NextResponse.json({ error: "Failed to fetch diet tracking" }, { status: 500 });
    }
}