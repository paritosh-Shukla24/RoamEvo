'use client';
import { forwardRef } from 'react';
import FeatureCard from './FeatureCard';
import Stat from './Stat';
import ScrollingMountains from './ScrollingMountains';

const WhyChooseUs = forwardRef<HTMLElement>((props, ref) => (
  <section ref={ref} className="relative bg-white py-20 pb-60 px-6 overflow-hidden" id='why-choose-us'>
    <div className="max-w-7xl mx-auto">
      <div className="text-center md:text-left mb-16">
        <h2 className="text-4xl md:text-5xl font-medium text-[#1d2952] mb-4">
          Why Choose Us
        </h2>
        <div className="flex justify-end">
          <p className="text-right text-gray-700 max-w-md">
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
      {/* Horizontal Line */}
      <div className="w-full h-px bg-gray-200 my-16"></div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto mb-20">
        <Stat value="4500+" label="HAPPY CUSTOMERS" />
        <Stat value="200+" label="DESTINATIONS COVERED" />
        <Stat value="98%" label="CUSTOMER SATISFACTION" />
      </div>
    </div>
    {/* Mountains at the bottom */}
    <ScrollingMountains />
  </section>
));

WhyChooseUs.displayName = 'WhyChooseUs';
export default WhyChooseUs;