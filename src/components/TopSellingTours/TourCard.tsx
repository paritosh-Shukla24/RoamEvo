import Image from 'next/image';
import { IoLocationSharp } from 'react-icons/io5';

interface TourCardProps {
  destination: string;
  rating: number;
  reviews: string;
  title: string;
  imageSrc: string;
  price: string;
  itinerary: { city: string }[];
}

const TourCardComponent = ({ destination, rating, reviews, title, imageSrc, price, itinerary }: TourCardProps) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden">
      {/* Tour Image */}
      <div className="relative h-64 w-full overflow-hidden rounded-lg">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      
      <div className="mt-4 space-y-3">
        {/* Location and Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-[#1d2952] rounded-full p-1.5 mr-2">
              <IoLocationSharp className="text-white text-sm" />
            </div>
            <span className="font-medium text-[#1d2952]">{destination}</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-[#1d2952] font-medium">{rating}</span>
            <span className="text-gray-500 text-sm ml-1">({reviews})</span>
          </div>
        </div>
        
        {/* Tour Title */}
        <h3 className="text-xl text-[#1d2952] font-medium">{title}</h3>
        
        {/* Itinerary Path - Styled Like the Image */}
        <div className="flex items-center justify-between py-6 mt-2">
          {itinerary.map((stop, index) => (
            <div key={index} className="flex items-center">
              {/* Connect with line if not first item */}
              {index > 0 && (
                <div className="h-[2px] w-full bg-[#0000aa] absolute -z-10"></div>
              )}
              
              {/* City node */}
              <div className="flex flex-col items-center relative">
                <div className="w-10 h-10 bg-[#1d2952] rounded-full flex items-center justify-center text-white text-xs z-10">
                  {stop.city.substring(0, 2)}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Cities */}
        <div className="flex justify-between text-sm text-[#1d2952] mt-0">
          {itinerary.map((stop, index) => (
            <div key={index} className="text-[#1d2952]">
              {stop.city}
            </div>
          ))}
        </div>
        
        {/* Price */}
        <div className="pt-3">
          <span className="text-xl font-bold text-[#1d2952]">₹{price}</span>
          <span className="text-gray-600 ml-1">per person</span>
        </div>
        
        {/* Button */}
        <button className="w-full py-3.5 bg-[#1d2952] text-white rounded-md text-center hover:bg-opacity-90 transition mt-4">
          Request a callback
        </button>
      </div>
    </div>
  );
};

export default TourCardComponent;