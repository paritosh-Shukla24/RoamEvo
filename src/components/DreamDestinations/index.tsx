'use client';
import Image from 'next/image';

const DreamDestinations = () => {
  return (
    <section className="py-20 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-[#1d2952] mb-12 text-center">
          Dream It. Name It. We&apos;ll Take You There.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left column with 2 images */}
          <div className="md:col-span-6 flex flex-col gap-6">
            {/* Top destination */}
            <div className="rounded-[32px] overflow-hidden h-[280px] relative">
              <Image
                src="/tours/rajasthan.png" 
                alt="Buddhist Monastery in mountains"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            {/* Bottom destination */}
            <div className="rounded-[32px] overflow-hidden h-[280px] relative">
              <Image
                src="/tours/adventure.png" 
                alt="Roman Colosseum"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          {/* Right column with tall image */}
          <div className="md:col-span-6">
            <div className="rounded-[32px] overflow-hidden h-[580px] relative">
              <Image
                src="/tours/grand.png" 
                alt="Person at sunset viewpoint"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamDestinations;