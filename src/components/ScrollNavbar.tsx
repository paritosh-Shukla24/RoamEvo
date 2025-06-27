'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface ScrollNavbarProps {
  startDark?: boolean; // For pages without hero backgrounds
}

const ScrollNavbar = ({ startDark = false }: ScrollNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Change background after 100px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For pages with hero backgrounds (home, about-us)
  const heroNavbarClasses = `
    sticky top-0 w-full z-50 transition-all duration-300 ease-in-out
    flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-6 text-lg sm:text-xl
    border-b
    ${isScrolled 
      ? 'bg-white text-black border-gray-200' 
      : 'bg-transparent text-white border-transparent'
    }
  `;

  // For pages without hero backgrounds (tours, etc.)
  const standardNavbarClasses = `
    sticky top-0 w-full z-50 transition-all duration-300 ease-in-out
    flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-6 text-lg sm:text-xl
    bg-white text-black border-b
    ${isScrolled ? 'border-gray-200' : 'border-transparent'}
  `;

  const navbarClasses = startDark ? standardNavbarClasses : heroNavbarClasses;
  const textColor = startDark ? 'text-black' : (isScrolled ? 'text-black' : 'text-white');
  const hoverColor = startDark ? 'hover:text-gray-600' : (isScrolled ? 'hover:text-gray-600' : 'hover:text-gray-300');

  return (
    <nav className={navbarClasses}>
      <div className="logo">
        <Link href="/" className={`${textColor} text-2xl sm:text-3xl font-light transition-colors duration-300`}>
          RoamEvo
        </Link>
      </div>
      <div className="hidden lg:flex space-x-6 xl:space-x-8">
        <Link href="/about-us" className={`${textColor} ${hoverColor} transition-colors duration-300`}>
          About Us
        </Link>
        <Link href="/why-choose-us" className={`${textColor} ${hoverColor} transition-colors duration-300`}>
          Why Choose Us
        </Link>
        <Link href="/tours" className={`${textColor} ${hoverColor} transition-colors duration-300`}>
          Domestic Tours
        </Link>
        <Link href="/international-tours" className={`${textColor} ${hoverColor} transition-colors duration-300`}>
          International Tours
        </Link>
        <Link href="/trekking-camping" className={`${textColor} ${hoverColor} transition-colors duration-300`}>
          Trekking & Camping
        </Link>
      </div>
      <div className="lg:hidden">
        {/* Mobile menu button */}
        <button className={`${textColor} text-2xl transition-colors duration-300`}>☰</button>
      </div>
    </nav>
  );
};

export default ScrollNavbar;
