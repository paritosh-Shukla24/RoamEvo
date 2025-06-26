'use client';

import { useEffect, useState } from 'react';

interface TourTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TourTabs = ({ activeTab, onTabChange }: TourTabsProps) => {
  const [activeSection, setActiveSection] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'things-to-know', label: 'Things you should know' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'itinerary'];
      let current = 'overview';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            current = sectionId;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 120; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    onTabChange(sectionId);
  };
  return (
    <div className="flex border-b border-gray-200 mb-6 sm:mb-8 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => scrollToSection(tab.id)}
          className={`pb-3 sm:pb-4 pr-4 sm:pr-6 md:pr-8 mr-4 sm:mr-6 md:mr-8 transition-colors text-lg sm:text-xl md:text-2xl font-medium whitespace-nowrap ${
            activeSection === tab.id
              ? 'border-b-2 border-[#4A5B2D] text-[#4A5B2D] font-medium'
              : 'text-[#000000B2] hover:text-gray-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TourTabs;