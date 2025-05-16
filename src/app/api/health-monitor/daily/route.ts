import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const user = await stackServerApp.getUser();
  
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.date || 
        data.glucoseLevel === undefined || 
        data.bloodPressure === undefined || 
        data.cholesterol === undefined || 
        data.uricAcid === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" }, 
        { status: 400 }
      );
    }

    // Ensure date is a valid Date object
    const monitoringDate = new Date(data.date);
    
    // Check if user profile exists, if not create it with default values
    await prisma.userProfile.upsert({
      where: {
        userId: user.id,
      },
      update: {},
      create: {
        userId: user.id,
        height: 0,
        weight: 0,
      },
    });

    // Create or update the daily monitoring record
    const dailyMonitoring = await prisma.dailyMonitoring.upsert({
      where: {
        userId_date: {
          userId: user.id,
          date: monitoringDate,
        },
      },
      update: {
        glucoseLevel: data.glucoseLevel,
        bloodPressure: data.bloodPressure,
        cholesterol: data.cholesterol,
        uricAcid: data.uricAcid,
      },
      create: {
        userId: user.id,
        date: monitoringDate,
        glucoseLevel: data.glucoseLevel,
        bloodPressure: data.bloodPressure,
        cholesterol: data.cholesterol,
        uricAcid: data.uricAcid,
      },
    });

    return NextResponse.json(dailyMonitoring);
  } catch (error) {
    console.error("Error creating daily monitoring:", error);
    return NextResponse.json(
      { error: "Failed to save health monitoring data" }, 
      { status: 500 }
    );
  }
}