import React from "react";
import Container from "../Container";
import Image from "next/image";

const features = [
  {
    title: "Ulcus detect",
    icon: "/foot.webp", // You'll need to add these icons
  },
  {
    title: "Track",
    icon: "/track.webp",
  },
  {
    title: "Health monitoring",
    icon: "/health-monitor.webp",
  },
  {
    title: "DiaHeal",
    icon: "/dia-doctor.webp",
  },
];

function Features() {
  return (
    <section className="bg-yellow-500 py-2">
      <Container>
        <div className="flex items-center justify-center flex-wrap gap-8 py-2">
          <div className="text-start px-10">
            <h2 className="text-2xl font-bold text-white">
              Your Diabetes Management Is All Here
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="bg-white p-4 rounded-full mb-3">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                  />
                </div>
                <p className="text-white font-medium text-sm md:text-base">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Features;
