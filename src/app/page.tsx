import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TopSellingTours from "@/components/TopSellingTours";
import DreamDestinations from "@/components/DreamDestinations";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative w-full h-screen -mt-16 sm:-mt-21">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-background.png')",
          }}
        />

        <HeroSection />
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Top Selling Tours Section */}
      <TopSellingTours />

      {/* Dream Destinations Section */}
      <DreamDestinations />
    </div>
  );
}
