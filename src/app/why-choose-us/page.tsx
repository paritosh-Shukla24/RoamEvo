import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/WhyChooseUs/FeatureCard';
import Stat from '@/components/WhyChooseUs/Stat';
import ScrollingMountains from '@/components/WhyChooseUs/ScrollingMountains';

export default function WhyChooseUs() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-[#1d2952] mb-4">
            Why Choose Us
          </h1>
          <div className="flex flex-col md:flex-row justify-end">
            <p className="text-right text-gray-700 max-w-md ml-auto">
              Experience, Trust, and Adventures<br />
              Tailored Just for You
            </p>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <FeatureCard
            icon="expertly-curated.svg"
            title="Expertly Curated Tours"
            description="We handpick the best experiences, you enjoy every moment without stress."
          />
          <FeatureCard
            icon="personalized-service.svg"
            title="Personalized Service"
            description="Your journey is tailored to fit your style, making every trip truly yours."
          />
          <FeatureCard
            icon="trusted-travelers.svg"
            title="Trusted by Travelers"
            description="Thousands trust us for safe, seamless, and memorable adventures."
          />
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto mb-20">
          <Stat value="4500+" label="HAPPY CUSTOMERS" />
          <Stat value="200+" label="DESTINATIONS COVERED" />
          <Stat value="98%" label="CUSTOMER SATISFACTION" />
        </div>
      </section>
      
      {/* Scrolling Mountains Effect */}
      <ScrollingMountains />
    </main>
  );
}