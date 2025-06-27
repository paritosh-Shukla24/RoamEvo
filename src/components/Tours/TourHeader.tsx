import React from 'react';

interface TourHeaderProps {
  title: string;
  emoji?: string;
}

const TourHeader = ({ title, emoji = "🏔️" }: TourHeaderProps) => {
  return (
    <div className="mb-4 sm:mb-6 lg:mb-5 2xl:mb-8">
      <div className="flex items-center gap-2 2xl:gap-3 mb-2 sm:mb-3 2xl:mb-4">
        <span className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl">{emoji}</span>
        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-serif text-[#4A5B2D] font-normal leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TourHeader;