'use client';

import Image from 'next/image';

interface TourGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const TourGallery = ({ images }: TourGalleryProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
      {/* Main large image */}
      <div className="relative rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <Image
          src={images[0]?.src || ''}
          alt={images[0]?.alt || 'Main tour image'}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center justify-center">
          <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-center">
            <div>BYASI</div>
            <div className="text-right -mt-1 sm:-mt-2">RISH</div>
          </div>
        </div>
      </div>      {/* Right side - 3 smaller images stacked */}
      <div className="grid grid-cols-3 lg:grid-rows-3 lg:grid-cols-1 gap-3 sm:gap-4 h-auto lg:h-[500px]">
        {images.slice(1, 4).map((image, index) => (
          <div 
            key={index + 1} 
            className="relative rounded-lg overflow-hidden h-20 sm:h-24 md:h-32 lg:h-auto"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourGallery;