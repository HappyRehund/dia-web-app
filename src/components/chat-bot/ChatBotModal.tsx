"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ChatInput from "./ChatInput";
import MessageWindow from "./MessageWindow";
import { ChatHistory, ChatSettings, Message, MessageRole } from "@/lib/types";
import { useState } from "react";

// Predefined settings
const DEFAULT_SETTINGS: ChatSettings = {
  temperature: 0.7,
  model: "gemini-1.5-pro",
  systemInstruction: "You are DiabetAI, a helpful medical assistant specializing in diabetes care. Provide accurate, helpful, and empathetic responses to users' health-related questions. Always encourage users to consult healthcare professionals for medical advice. Please don't answer any questions that are not related to diabetes and health field.",
};

interface ChatbotModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ChatbotModal({ open, onOpenChange }: ChatbotModalProps) {
  const [history, setHistory] = useState<ChatHistory>([]);

  const handleSend = async (message: string) => {
    const newUserMessage: Message = {
      role: "user" as MessageRole,
      parts: [{ text: message }],
    };

    const updatedHistory = [...history, newUserMessage];
    setHistory(updatedHistory);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userMessage: message,
          history: updatedHistory,
          settings: DEFAULT_SETTINGS,
        }),
      });

      const data = await response.json();

      if (data.error) {
        console.error("AI Error:", data.error);
        return;
      }

      const aiMessage: Message = {
        role: "model" as MessageRole,
        parts: [{ text: data.response }],
      };

      setHistory([...updatedHistory, aiMessage]);
    } catch (error) {
      console.error("Request Failed:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[800px] h-[80vh] flex flex-col p-0 z-50">
        <DialogHeader className="px-4 py-4 border-b">
          <DialogTitle>DiabetAI Chat</DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-hidden flex flex-col">
          <MessageWindow history={history} />
          
          <div className="p-4 border-t">
            <ChatInput onSend={handleSend} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}