import React from 'react';

interface TourHeaderProps {
  title: string;
  emoji?: string;
}

const TourHeader = ({ title, emoji = "🏔️" }: TourHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{emoji}</span>
        <h1 className="text-3xl md:text-4xl font-serif text-[#4A5B2D] font-normal">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TourHeader;