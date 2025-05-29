'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import FeatureCard from './FeatureCard';
import Stat from './Stat';

const WhyChooseUs = () => {
  const mountainRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!mountainRef.current || !sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the user has scrolled into the section
      const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.bottom - windowHeight) / rect.height));
      
      // Transform the mountains based on scroll position
      // Initially hidden below, move up as user scrolls
      const translateY = 100 - (scrollProgress * 100);
      mountainRef.current.style.transform = `translateY(${translateY}%)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section ref={sectionRef} className="relative bg-white py-20 px-6 overflow-hidden">
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
      
      {/* Scrolling Mountains Effect */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <div 
          ref={mountainRef} 
          className="absolute bottom-0 w-full transition-transform duration-300 ease-out"
        >
          <Image 
            src="/images/himalaya.png" 
            alt="Himalaya Mountains"
            width={1920}
            height={400}
            className="w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;