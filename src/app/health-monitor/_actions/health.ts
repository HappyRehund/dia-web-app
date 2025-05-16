"use server";

import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

// Define a type for the input data
interface CreateDailyMonitoringData {
  date: Date;
  glucoseLevel: number;
  bloodPressure: number;
  cholesterol: number;
  uricAcid: number;
}

/**
 * Server action to create or update daily health monitoring data
 */
export async function createDailyMonitoring(data: CreateDailyMonitoringData) {
  // Get the current user or redirect to sign-in
  const user = await stackServerApp.getUser();
  if (!user) redirect("/handler/sign-in");

  try {
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
          date: data.date,
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
        date: data.date,
        glucoseLevel: data.glucoseLevel,
        bloodPressure: data.bloodPressure,
        cholesterol: data.cholesterol,
        uricAcid: data.uricAcid,
      },
    });

    // Revalidate the health-monitor path to refresh the UI
    revalidatePath("/health-monitor");
    
    return { success: true, data: dailyMonitoring };
  } catch (error) {
    console.error("Error creating daily monitoring:", error);
    return { success: false, error: "Failed to save health monitoring data" };
  }
}