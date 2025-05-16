import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link"; // Add this import

const features = [
  {
    title: "Ulcus detect",
    icon: "/white-foot.webp", 
    href: "/ulcus-detect",
  },
  {
    title: "Track",
    icon: "/white-track.webp",
    href: "/track",
  },
  {
    title: "Health monitoring",
    icon: "/white-monitor.webp",
    href: "/health-monitor",
  },
  {
    title: "DiaHeal",
    icon: "/white-doctor.webp",
    href: "/dia-doctor",
  },
];

function Features() {
  return (
    <section className="bg-yellow-500 py-2">
      <Container>
        <div className="flex items-center justify-center flex-wrap gap-8 py-2">
          <div className="text-start px-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white">
              Your Diabetes Management Is All Here
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="flex flex-col items-center justify-center hover:opacity-80 transition-opacity"
              >
                <div className="bg-white rounded-full mb-3">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={72}
                    height={72}
                  />
                </div>
                <p className="text-white font-semibold text-sm md:text-base">
                  {feature.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Features;