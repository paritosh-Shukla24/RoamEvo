import React from 'react';

interface TourHeaderProps {
  title: string;
  emoji?: string;
}

const TourHeader = ({ title, emoji = "🏔️" }: TourHeaderProps) => {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <span className="text-2xl sm:text-3xl md:text-4xl">{emoji}</span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#4A5B2D] font-normal leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TourHeader;