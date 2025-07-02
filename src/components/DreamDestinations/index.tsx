'use client';
import Image from 'next/image';
import Link from 'next/link';

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
            {/* Rajasthan Tours */}
            <Link href="/tours" className="block rounded-[32px] overflow-hidden h-[280px] relative hover:scale-105 transition-transform duration-300">
              <Image
                src="/tours/rajasthan.png" 
                alt="Rajasthan desert adventure tours - Camel rides, palace visits and cultural experiences"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Rajasthan Adventures</h3>
                <p className="text-sm opacity-90">Desert safaris & royal palaces</p>
              </div>
            </Link>
            
            {/* Adventure Tours */}
            <Link href="/tours" className="block rounded-[32px] overflow-hidden h-[280px] relative hover:scale-105 transition-transform duration-300">
              <Image
                src="/tours/adventure.png" 
                alt="Mountain adventure tours - Himalayan trekking, camping and outdoor activities"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Adventure Expeditions</h3>
                <p className="text-sm opacity-90">Trekking & outdoor thrills</p>
              </div>
            </Link>
          </div>
          
          {/* Right column with tall image */}
          <div className="md:col-span-6">
            <Link href="/tours" className="block rounded-[32px] overflow-hidden h-[580px] relative hover:scale-105 transition-transform duration-300">
              <Image
                src="/tours/grand.png" 
                alt="Grand Himalayan tour packages - Scenic mountain landscapes and spiritual destinations"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-semibold">Grand Himalayan Tours</h3>
                <p className="text-base opacity-90">Majestic peaks & spiritual journeys</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamDestinations;