import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TopSellingTours from "@/components/TopSellingTours";
import DreamDestinations from "@/components/DreamDestinations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="relative w-full h-screen">
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

      {/* Footer */}
      <Footer />
    </main>
  );
}
