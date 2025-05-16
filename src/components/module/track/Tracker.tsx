import Container from "@/components/Container";
import Heading from "@/components/Heading";
import ActivityContent from "@/components/track/ActivityContent";
import DietContent from "@/components/track/DietContent";
import { Button } from "@/components/ui/button";
import { useDietContext } from "@/hooks/useDietContext";
import React from "react";

function Tracker() {
  const [isDiet, setIsDiet] = useDietContext();

  return (
    <Container>
      {/* Header */}
      <Heading className="font-semibold">Track</Heading>

      {/* Tabs */}
      <div className="flex justify-betwee">
        <div className="inline-flex gap-2">
          <Button
            onClick={() => setIsDiet(true)}
            className={`px-8 py-2 rounded-3xl text-lg font-medium ${
              isDiet
                ? "bg-secondary text-black hover:bg-yellow-600"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Diet
          </Button>
          <Button
            onClick={() => setIsDiet(false)}
            className={`px-8 py-2 rounded-3xl text-lg font-medium ${
              !isDiet
                ? "bg-secondary text-black hover:bg-yellow-600"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Activity
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-transparent p-4">
        {isDiet ? <DietContent /> : <ActivityContent />}
      </div>
    </Container>
  );
}

export default Tracker;
