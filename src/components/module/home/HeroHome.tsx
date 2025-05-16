  "use client";
import React, { useState, useEffect } from "react";
import Container from "../../Container";
import Image from "next/image";
import { History, MessageCircleMore } from "lucide-react";
import ChatbotModal from "../../chat-bot/ChatBotModal";
import Heading from "../../Heading";
import { StackClientApp, useUser } from "@stackframe/stack";

const ITEMS = [
  {
    image: "/foot.webp",
    title: "Ulcer Detect",
    href: "/ulcer-detect",
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

function HeroHome() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const user = useUser();

  return (
    <Container>
      <Heading className="font-semibold">Hi there, {user?.displayName}</Heading>
      <div className="md:flex md:gap-6">
        {/* Left column: Health Summary + DiabetAI */}

        {/* Health Summary */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="bg-secondary rounded-xl p-4 md:p-6 mb-2 md:my-0 shadow-md text-white">
            <h3 className="text-xl font-semibold mb-2">Health Summary</h3>
            <div className="flex items-center gap-2">
              <Image src="/hero/kaki.webp" alt="kaki" width={24} height={24} />
              <p>Foot Temperature : - </p>
            </div>
            <div className="flex items-center gap-2 pt-3">
              <Image src="/hero/ulcus.webp" alt="kaki" width={24} height={24} />
              <p>Ulcus Indication : - </p>
            </div>
            <div className="flex items-center gap-2 pt-3">
              <Image src="/hero/bmi.webp" alt="kaki" width={24} height={24} />
              <p>BMI : - </p>
            </div>
          </div>

          {/*DiabetAI*/}
          <button
            onClick={() => setIsChatOpen(true)}
            className="absolute z-50 right-20 bottom-14 bg-secondary text-white rounded-full p-4 md:p-6 text-xl flex justify-between items-center shadow-md hover:bg-secondary/90 transition-colors"
          >
            <MessageCircleMore size={64} />
          </button>
        </div>

        {/* Right column: ITEMS grid */}
        <div className="bg-transparent rounded-xl py-3 md:p-6 my-4 md:my-0 md:w-1/2 flex items-center">
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
                  width={72}
                  height={72}
                  className="object-cover"
                />
                <span className="mt-1 text-xs lg:text-base font-medium text-gray-900 group-hover:text-secondary text-center">
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

export default HeroHome;
