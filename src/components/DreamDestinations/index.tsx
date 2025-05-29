'use client';
import Image from 'next/image';
import Link from 'next/link';

const DreamDestinations = () => {
  return (
    <section className="py-20 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-[#1d2952] mb-12 text-center">
          Dream It. Name It. We'll Take You There.
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

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f5] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left side with links */}
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* International Trips */}
          <div>
            <h3 className="text-xl font-medium text-[#1d2952] mb-6">International Trips</h3>
            <ul className="space-y-3">
              {['Europe', 'Bali', 'Vietnam', 'Turkey', 'Thailand', 'Azerbaijan', 'Singapore'].map((item) => (
                <li key={item}>
                  <Link href={`/international/${item.toLowerCase()}`} className="text-gray-600 hover:text-[#1d2952]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* India Trips */}
          <div>
            <h3 className="text-xl font-medium text-[#1d2952] mb-6">India Trips</h3>
            <ul className="space-y-3">
              {['Ladakh', 'Spiti Valley', 'Kashmir', 'Andaman', 'Kerala', 'Rajasthan'].map((item) => (
                <li key={item}>
                  <Link href={`/india/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-[#1d2952]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Trekking */}
          <div>
            <h3 className="text-xl font-medium text-[#1d2952] mb-6">Trekking</h3>
            <ul className="space-y-3">
              {['Kalsubai Peak', 'Raigad Fort', 'Harihar Fort', 'Kalavanti Durg Fort'].map((item) => (
                <li key={item}>
                  <Link href={`/trekking/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-[#1d2952]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Middle section - Quick Links and Contact */}
        <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium text-[#1d2952] mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Privacy Policy', 'Terms & Conditions', 'Payments'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} className="text-gray-600 hover:text-[#1d2952]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-medium text-[#1d2952] mb-6">Contact Us</h3>
            <address className="not-italic text-gray-600 space-y-5">
              <p>One Apple Park Way, Cupertino, CA</p>
              <p>95014, United States</p>
              <p className="pt-2">+91 93257 37063</p>
              <p>
                <a href="mailto:contact-us@vaaigo.com" className="hover:text-[#1d2952]">
                  contact-us@vaaigo.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        {/* Right side image - Beach with hammock */}
        <div className="md:col-span-12 lg:absolute lg:right-0 lg:top-0 lg:w-1/3 lg:h-full">
          <div className="relative h-64 lg:h-full w-full">
            <Image
              src="/images/footer-beach.jpg"
              alt="Relaxing beach with hammock"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg lg:rounded-none"
            />
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <p className="text-gray-600 text-sm">
          © RoamEvo Pvt. Ltd. , All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default DreamDestinations;