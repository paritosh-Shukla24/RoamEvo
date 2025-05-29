'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const ScrollingMountains = () => {
  const mountainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!mountainRef.current) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      // Calculate the scroll percentage (0 to 1)
      const scrollPercentage = Math.min(scrollPosition / (documentHeight - windowHeight), 1);
      
      // Transform the mountains based on scroll position
      // Start with mountains below the viewport and move them up as user scrolls
      const translateY = 100 - (scrollPercentage * 100);
      mountainRef.current.style.transform = `translateY(${translateY}%)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
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
        />
      </div>
    </div>
  );
};

export default ScrollingMountains;