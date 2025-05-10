import { chat2gemini } from "@/lib/helpers/gemini";
import { ChatHistory, ChatSettings } from "@/lib/types";
import { NextResponse } from "next/server";

//This API route handles POST requests from the frontend, processes user messages, and returns AI-generated responses.
export async function POST(request: Request) {
  try {
    const { userMessage, history, settings } = (await request.json()) as {
      userMessage: string;
      history: ChatHistory;
      settings: ChatSettings;
    };

    const aiResponse = await chat2gemini(userMessage, history, settings);
    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Error obtaining the AI model's response" },
      { status: 500 }
    );
  }
}
