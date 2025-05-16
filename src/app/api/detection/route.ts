//src/app/api/health-monitor/profile/route.ts
import { Level } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack";
import { NextResponse } from "next/server";


export async function POST(request: Request){
    const user = await stackServerApp.getUser();

    if (!user) {
        return NextResponse.json(
        { error: "Unauthorized", code: "AUTH_REQUIRED" }, 
        { status: 401 }
        );
    }

    try {
        const likelyHasUlcer = await request.json();
        
        const detection = await prisma.ulcerDetection.create({
              data: {
                userId: user.id,
                ulcerpotential: likelyHasUlcer ? "High" : "Low" as Level
              },
            });

        return NextResponse.json(detection)
    } catch (error) {
        console.error("Error adding detection result:", error);
        return NextResponse.json({error: "Failed to store diagnosis"}, {status: 500});
    }
}
