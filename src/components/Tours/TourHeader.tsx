import React from 'react';

interface TourHeaderProps {
  title: string;
  emoji?: string;
}

const TourHeader = ({ title, emoji = "🏔️" }: TourHeaderProps) => {
  return (
    <div className="mb-4 sm:mb-6 lg:mb-5">
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <span className="text-xl sm:text-2xl lg:text-3xl">{emoji}</span>
        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-serif text-[#4A5B2D] font-normal leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TourHeader;