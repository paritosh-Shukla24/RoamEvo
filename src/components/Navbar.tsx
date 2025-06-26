import Link from 'next/link';

interface NavbarProps {
  variant?: 'light' | 'dark';
}

const Navbar = ({ variant = 'dark' }: NavbarProps) => {
  const textColor = variant === 'light' ? 'text-[#000000B2]' : 'text-white';
  const hoverColor = variant === 'light' ? 'hover:text-black' : 'hover:text-gray-300';
  return (
    <nav className="absolute top-0 w-full z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-6 text-lg sm:text-xl">
      <div className="logo">
        <Link href="/" className={`${textColor} text-2xl sm:text-3xl font-light transition`}>
          RoamEvo
        </Link>
      </div>
      <div className="hidden lg:flex space-x-6 xl:space-x-8">
        <Link href="/about-us" className={`${textColor} ${hoverColor} transition`}>
          About Us
        </Link>
        <Link href="/why-choose-us" className={`${textColor} ${hoverColor} transition`}>
          Why Choose Us
        </Link>
        <Link href="/tours" className={`${textColor} ${hoverColor} transition`}>
          Domestic Tours
        </Link>
        <Link href="/international-tours" className={`${textColor} ${hoverColor} transition`}>
          International Tours
        </Link>
        <Link href="/trekking-camping" className={`${textColor} ${hoverColor} transition`}>
          Trekking & Camping
        </Link>
      </div>
      <div className="lg:hidden">
        {/* Mobile menu button would go here */}
        <button className={`${textColor} text-2xl`}>☰</button>
      </div>
    </nav>
  );
};

export default Navbar;