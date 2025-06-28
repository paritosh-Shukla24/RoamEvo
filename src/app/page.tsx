"use client";

import { useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import HeroSlideshow from "@/components/Slideshow";
import WhyChooseUs from "@/components/WhyChooseUs";
import TopSellingTours from "@/components/TopSellingTours";
import DreamDestinations from "@/components/DreamDestinations";

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState("Mountain Adventures");
  const whyChooseUsRef = useRef<HTMLElement>(null);

  const handleSlideChange = (title: string) => {
    setCurrentLocation(title);
  };

  return (
    <div className="relative">
      <div className="relative w-full h-screen">
        {/* Background Slideshow */}
        <HeroSlideshow onSlideChange={handleSlideChange} />

        <HeroSection currentLocation={currentLocation} />
      </div>

      {/* Top Selling Tours Section */}
      <TopSellingTours />

      {/* Why Choose Us Section */}
      <WhyChooseUs ref={whyChooseUsRef} />

      {/* Dream Destinations Section */}
      <DreamDestinations />
    </div>
  );
}
