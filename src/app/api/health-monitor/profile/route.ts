import { prisma } from "@/lib/prisma";
import { stackServerApp } from "@/stack";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const user = await stackServerApp.getUser();
    
    if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    try {
        // Try to find existing profile
        let profile = await prisma.userProfile.findUnique({
            where: {
                userId: user.id
            }
        });
        
        // If no profile exists, create one with default values
        if (!profile) {
            profile = await prisma.userProfile.create({
                data: {
                    userId: user.id,
                    height: 0,
                    weight: 0
                }
            });
        }
        
        return NextResponse.json(profile);
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return NextResponse.json(
            { error: "Failed to fetch user profile" }, 
            { status: 500 }
        );
    }
}