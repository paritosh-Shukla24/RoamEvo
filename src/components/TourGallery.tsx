'use client';

import Image from 'next/image';
import { useRef } from 'react';

interface TourGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const TourGallery = ({ images }: TourGalleryProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={scrollContainerRef}
      className="flex gap-4 overflow-x-auto pb-6 hide-scrollbar"
    >
      {images.map((image, index) => (
        <div 
          key={index} 
          className="flex-shrink-0 relative rounded-lg overflow-hidden"
          style={{ 
            width: index === 0 ? '520px' : '380px', 
            height: index === 0 ? '400px' : '380px' 
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 520px"
          />
          {index === 0 && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center justify-center">
              <div className="text-white text-6xl md:text-7xl font-bold tracking-wider text-center">
                <div>BYASI</div>
                <div className="text-right -mt-2">RISH</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TourGallery;