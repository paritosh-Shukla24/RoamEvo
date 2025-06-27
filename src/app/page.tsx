import ScrollNavbar from "@/components/ScrollNavbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TopSellingTours from "@/components/TopSellingTours";
import DreamDestinations from "@/components/DreamDestinations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScrollNavbar />
      <div className="relative w-full h-screen -mt-15 sm:-mt-20 md:-mt-20">
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
