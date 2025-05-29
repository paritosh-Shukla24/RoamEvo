import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full z-10 flex items-center justify-between px-6 md:px-12 py-6">
      <div className="logo">
        <Link href="/" className="text-white text-2xl font-light">
          RoamEvo
        </Link>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link href="/about-us" className="text-white hover:text-gray-300 transition">
          About Us
        </Link>
        <Link href="/why-choose-us" className="text-white hover:text-gray-300 transition">
          Why Choose Us
        </Link>
        <Link href="/domestic-tours" className="text-white hover:text-gray-300 transition">
          Domestic Tours
        </Link>
        <Link href="/international-tours" className="text-white hover:text-gray-300 transition">
          International Tours
        </Link>
        <Link href="/trekking-camping" className="text-white hover:text-gray-300 transition">
          Trekking & Camping
        </Link>
      </div>
      <div className="md:hidden">
        {/* Mobile menu button would go here */}
      </div>
    </nav>
  );
};

export default Navbar;