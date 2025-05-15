// src/app/api/health-monitor/history/route.ts
import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const user = await stackServerApp.getUser();
    if(!user) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401})    
    }

    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || "7", 10);

    try {
        const history = await prisma.dailyMonitoring.findMany({
            where: {
                userId: user.id
            },
            orderBy: {
                date: "desc"
            },
            take: limit
        })

        return NextResponse.json(history)
    } catch (error) {
        console.error("Error fetching monitoring history:", error);
        return NextResponse.json({error: "Failed to fetch monitoring history"}, {status: 500})
    }
    

}