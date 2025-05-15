//src/app/api/health-monitor/profile/route.ts
import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack";
import { NextResponse } from "next/server";


export async function GET(request: Request){
    const user = await stackServerApp.getUser();

    if(!user){
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    try {
        const userProfile = await prisma.dailyMonitoring.findFirst({
            where: {
                userId: user.id,
            }
        })

        return NextResponse.json(userProfile)
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return NextResponse.json({error: "Failed to fetch user profile"}, {status: 500});
    }
}