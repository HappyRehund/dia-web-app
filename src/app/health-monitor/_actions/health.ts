"use server";

import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack";
import { redirect } from "next/navigation";

interface CreateDailyMonitoringData {
  date: Date;
  glucoseLevel: number;
  bloodPressure: number;
  cholesterol: number;
  uricAcid: number;
}

export async function createDailyMonitoring(data: CreateDailyMonitoringData) {
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

    return dailyMonitoring;
  } catch (error) {
    console.error("Error creating daily monitoring:", error);
    throw new Error("Failed to save health monitoring data");
  }
}

export async function getMonitoringHistory(limit = 7) {
  const user = await stackServerApp.getUser();

  if (!user) redirect("/handler/sign-in");

  try {
    const history = await prisma.dailyMonitoring.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        date: "desc",
      },
      take: limit,
    });

    return history;
  } catch (error) {
    console.error("Error fetching monitoring history:", error);
    throw new Error("Failed to fetch monitoring history");
  }
}

export async function getUserProfile() {
  const user = await stackServerApp.getUser();

  if (!user) redirect("/handler/sign-in");

  try {
    const userProfile = await prisma.userProfile.findUnique({
      where: {
        userId: user.id,
      },
    });

    return userProfile;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw new Error("Failed to fetch user profile");
  }
}
