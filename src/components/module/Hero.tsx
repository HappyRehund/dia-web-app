"use client"
import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import { History, MessageCircleMore } from "lucide-react"; 
import ChatbotModal from "../chat-bot/ChatBotModal";

const ITEMS = [
  {
    image: "/foot.webp",
    title: "Ulcus Detect",
    href: "/ulcus-detect",
  },
  {
    image: "/track.webp",
    title: "Track",
    href: "/track",
  },
  {
    image: "/health-monitor.webp",
    title: "Health Monitoring",
    href: "/health-monitor",
  },
  {
    image: "/dia-doctor.webp",
    title: "DiaDoctor",
    href: "/dia-doctor",
  },
];

function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <Container>
      <div className="px-2 font-semibold text-2xl">Hi there, Miaw</div>
      <div className="md:flex md:gap-6">
        {/* Left column: Health Summary + DiabetAI */}

        {/* Health Summary */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="bg-secondary rounded-xl p-4 md:p-6 my-2 md:my-0 shadow-md text-white">
            <h3 className="text-lg font-semibold mb-2">Health Summary</h3>
            <p>Foot Temperature : </p>
            <p>Ulcus Indication : </p>
            <p>BMI: </p>
          </div>

          {/*DiabetAI*/}
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-secondary text-white rounded-tr-2xl rounded-br-2xl rounded-bl-2xl py-2 px-4 md:p-6 text-xl flex justify-between items-center shadow-md hover:bg-secondary/90 transition-colors"
          >
            <div className="flex items-center gap-2">
              <MessageCircleMore />
              <span className="text-lg leading-relaxed">DiabetAI</span>
            </div>
            <div>
              <History />
            </div>
          </button>
        </div>

        {/* Right column: ITEMS grid */}
        <div className="bg-white rounded-xl py-3 md:p-6 my-4 md:my-0 md:w-1/2 flex items-center">
          <div className="grid grid-cols-4 gap-2 md:gap-6 w-full">
            {ITEMS.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex flex-col items-center group hover:scale-105 transition-transform"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <span className="mt-1 text-xs md:text-base font-medium text-gray-900 group-hover:text-secondary text-center">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <ChatbotModal open={isChatOpen} onOpenChange={setIsChatOpen} />
    </Container>
  );
}

export default Hero;
