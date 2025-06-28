'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ScrollNavbarProps {
  startDark?: boolean; // For pages without hero backgrounds
}

const ScrollNavbar = ({ startDark = false }: ScrollNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change (optional, for better UX)
  useEffect(() => {
    if (!menuOpen) return;
    const handleRouteChange = () => setMenuOpen(false);
    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // For pages with hero backgrounds (home, about-us)
  const heroNavbarClasses = `
    fixed top-0 w-full z-50 transition-all duration-300 ease-in-out
    flex items-center justify-between px-3 sm:px-4 lg:px-6 py-3 text-base sm:text-lg
    border-b
    ${isScrolled 
      ? 'bg-white text-black border-gray-200' 
      : 'bg-transparent text-white border-transparent'
    }
  `;

  // For pages without hero backgrounds (tours, etc.)
  const standardNavbarClasses = `
    sticky top-0 w-full z-50 transition-all duration-300 ease-in-out
    flex items-center justify-between px-3 sm:px-4 lg:px-6 py-3 text-base sm:text-lg
    bg-white text-black border-b
    ${isScrolled ? 'border-gray-200' : 'border-transparent'}
  `;

  const navbarClasses = startDark ? standardNavbarClasses : heroNavbarClasses;
  const textColor = startDark ? 'text-black' : (isScrolled ? 'text-black' : 'text-white');
  const hoverColor = startDark ? 'hover:text-gray-600' : (isScrolled ? 'hover:text-gray-600' : 'hover:text-gray-300');

  const menuItems = [
    { href: '/about-us', label: 'About Us', icon: '👥' },
    { href: '#why-choose-us', label: 'Why Choose Us', icon: '⭐' },
    { href: '/tours', label: 'Domestic Tours', icon: '🏔️' },
    { href: '/international-tours', label: 'International Tours', icon: '✈️' },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="logo flex items-center">
        <Link href="/" className="block">
          <Image
            src="/images/logo.png"
            alt="Roamevo Logo"
            width={160}
            height={50}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>
      </div>
      
      {/* Desktop menu */}
      <div className="hidden lg:flex space-x-4 xl:space-x-6">
        <Link href="/about-us" className={`${textColor} ${hoverColor} transition-colors duration-300`}>
          About Us
        </Link>
        <a
          href="#why-choose-us"
          className={`${textColor} ${hoverColor} transition-colors duration-300 cursor-pointer`}
          onClick={e => {
            e.preventDefault();
            const el = document.querySelector('#why-choose-us');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Why Choose Us
        </a>
        <Link href="/tours" className={`${textColor} ${hoverColor} transition-colors duration-300`}>
          Domestic Tours
        </Link>
        <Link href="/international-tours" className={`${textColor} ${hoverColor} transition-colors duration-300`}>
          International Tours
        </Link>
      </div>

      {/* Enhanced Mobile menu button */}
      <div className="lg:hidden">
        <button
          className={`${textColor} relative w-8 h-8 flex flex-col justify-center items-center transition-all duration-300 focus:outline-none group`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span 
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-0.5' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Enhanced Mobile menu */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            menuOpen ? 'bg-opacity-60' : 'bg-opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Roamevo Logo"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="py-4">
            <div className="px-4 mb-4">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Explore
              </p>
            </div>
            <div className="space-y-1">
              {menuItems.map((item, index) =>
                item.href === '#why-choose-us' ? (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group cursor-pointer"
                    onClick={e => {
                      e.preventDefault();
                      setMenuOpen(false);
                      const el = document.querySelector('#why-choose-us');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    <span className="font-medium text-base">
                      {item.label}
                    </span>
                    <svg 
                      className="w-5 h-5 ml-auto text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
                    onClick={() => setMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    <span className="font-medium text-base">
                      {item.label}
                    </span>
                    <svg 
                      className="w-5 h-5 ml-auto text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ScrollNavbar;