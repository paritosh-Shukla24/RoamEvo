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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      {/* Main large image */}
      <div className="relative rounded-lg overflow-hidden h-96 lg:h-[500px]">
        <Image
          src={images[0]?.src || ''}
          alt={images[0]?.alt || 'Main tour image'}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center justify-center">
          <div className="text-white text-5xl lg:text-7xl font-bold tracking-wider text-center">
            <div>BYASI</div>
            <div className="text-right -mt-2">RISH</div>
          </div>
        </div>
      </div>

      {/* Right side - 3 smaller images stacked */}
      <div className="grid grid-rows-3 gap-4 h-96 lg:h-[500px]">
        {images.slice(1, 4).map((image, index) => (
          <div 
            key={index + 1} 
            className="relative rounded-lg overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourGallery;