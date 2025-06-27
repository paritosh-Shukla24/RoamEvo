import SearchBar from './SearchBar';
import LocationPin from './LocationPin';
import SocialLinks from './SocialLinks';

interface HeroSectionProps {
  currentLocation?: string;
}

const HeroSection = ({ currentLocation = "Mountain Adventures" }: HeroSectionProps) => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center">
      <div className="text-center z-10 px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light mb-12">
          Your Journey Starts Here
        </h1>
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-24">
          <SearchBar />
          <button className="bg-[#101349] hover:bg-[#2a3761] text-white px-8 py-2.5 rounded-full transition">
            Explore Packages
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center z-10">
        <LocationPin location={currentLocation} />
        <SocialLinks />
      </div>
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
    </div>
  );
};

export default HeroSection;