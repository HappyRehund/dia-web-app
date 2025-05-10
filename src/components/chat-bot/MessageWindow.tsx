"use client";

import { ChatHistory } from "@/lib/types";
import { Bot, User } from "lucide-react";
import { useEffect, useRef } from "react";

//props that this component will receive
interface MessageWindowProps {
  history: ChatHistory;
}

//init component and set up ref for scrolling
export default function MessageWindow({ history }: MessageWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);
  return (
    <div className="flex-1 p-3 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        {history.map((message, index) => {
          const isUser = message.role === "user";

          return (
            <div
              key={index}
              className={`flex ${
                isUser ? "justify-end" : "justify-start"
              } mb-4`}
            >
              {/* Avatar */}
              {!isUser && (
                <div className="mr-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300">
                    <Bot size={16} className="text-gray-700" />
                  </div>
                </div>
              )}

              {/* Message bubble */}
              <div
                className={`
                            px-4 py-2 shadow-sm rounded-lg
                            ${
                              isUser
                                ? "bg-secondary text-white rounded-br-none"
                                : "bg-gray-600 text-white rounded-bl-none"
                            }
                            max-w-xs sm:max-w-md
                            `}
              >
                <div className="whitespace-pre-wrap break-words">
                  {message.parts.map((part, idx) => (
                    <span key={idx}>{part.text}</span>
                  ))}
                </div>
              </div>

              {/* Avatar for user */}
              {isUser && (
                <div className="ml-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary">
                    {/* Placeholder for user, it can be changed later */}
                    <User size={16} className="text-white" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
