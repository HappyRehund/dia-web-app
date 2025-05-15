import React from "react";
import Container from "../Container";
import Image from "next/image";
import { Button } from "../ui/button";

function Hero() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row lg:items-center xl:items-stretch justify-between gap-4 md:gap-8 py-8 md:py-16">
        {/* Image Hero */}
        <div className="w-full md:w-1/2 h-full">
          <Image
            src="/hero-dia.webp"
            alt="hero"
            width={768}
            height={768}
            className="w-full h-full object-cover rounded-lg"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-start flex-wrap gap-6 w-full md:w-1/2 p-8 rounded-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
            From Glucose to Ulcers, We've Got You Covered!
          </h1>
          <p className="text-gray-700 pl-2 text-base md:text-lg xl:text-2xl">
            Diasole helps you monitor, detect, and manage diabetes-related foot
            health with the power of AI and IoT. From tracking glucose to
            spotting early signs of foot ulcers, Diasole keeps your journey
            safe, smart, and supported every step of the way.
          </p>
          <Button size={"lg"} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl mt-auto">
            Get Diasole Now
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Hero;