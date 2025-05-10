"use client";

import { Send, X } from "lucide-react";
import { useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1">
        <textarea
          rows={1}
          className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        {message && (
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={() => setMessage("")}
            aria-label="Clear input"
          >
            <X size={16} />
          </button>
        )}
      </div>
      
      <button
        className={`p-2 rounded-full transition-colors ${
          message.trim()
            ? "bg-secondary text-white hover:bg-secondary/90"
            : "bg-gray-100 text-gray-500 cursor-not-allowed"
        }`}
        onClick={handleSend}
        disabled={!message.trim()}
        aria-label="Send message"
      >
        <Send size={20} />
      </button>
    </div>
  );
}