'use client';

import { usePathname } from 'next/navigation';
import ScrollNavbar from './ScrollNavbar';

const NavbarWrapper = () => {
  const pathname = usePathname();
  
  // Pages that need dark navbar (white background pages)
  const darkNavbarPages = ['/tours', '/international-tours'];

  const shouldUseDarkNavbar = darkNavbarPages.some(page => pathname.startsWith(page));
  
  return <ScrollNavbar startDark={shouldUseDarkNavbar} />;
};

export default NavbarWrapper;
