'use client';

import { useEffect, useState } from 'react';

interface TourTabsProps {
  onTabChange?: (tab: string) => void;
}

const TourTabs = ({ onTabChange = () => {} }: TourTabsProps) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isScrolling, setIsScrolling] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'things-to-know', label: 'Things you should know' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return; // Don't update active section while programmatically scrolling
      
      const sections = ['overview', 'itinerary', 'things-to-know'];
      let current = 'overview';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250) { // Increased threshold for better detection
            current = sectionId;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    setActiveSection(sectionId); // Immediately set the target section as active
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 140; // Account for sticky navbar + sticky tabs height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    onTabChange(sectionId);
    
    // Re-enable scroll detection after scrolling is complete
    setTimeout(() => {
      setIsScrolling(false);
    }, 800); // Slightly longer than scroll animation
  };
  return (
    <div className="flex border-b border-gray-200 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => scrollToSection(tab.id)}
          className={`py-2 sm:py-3 2xl:py-4 pr-3 sm:pr-4 lg:pr-6 2xl:pr-8 mr-3 sm:mr-4 lg:mr-6 2xl:mr-8 transition-colors text-base sm:text-lg lg:text-xl 2xl:text-2xl font-medium whitespace-nowrap ${
            activeSection === tab.id
              ? 'border-b-2 2xl:border-b-3 border-[#4A5B2D] text-[#4A5B2D] font-medium'
              : 'text-black hover:text-[#4A5B2D]'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TourTabs;