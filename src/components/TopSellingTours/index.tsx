'use client';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

interface TourCardProps {
  destination: string;
  rating: number;
  reviews: string;
  title: string;
  imageSrc: string;
  price: string;
  itinerary: { city: string; isStart?: boolean; isEnd?: boolean }[];
}

const TourCard = ({ destination, rating, reviews, title, imageSrc, price, itinerary }: TourCardProps) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden">
      <div className="relative h-52 w-full overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          className="rounded-lg object-cover"
        />
      </div>
      
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IoLocationSharp className="text-[#1d2952]" />
            <span className="font-medium text-[#1d2952]">{destination}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-400" />
            <span>{rating}</span>
            <span className="text-gray-500 text-sm">({reviews})</span>
          </div>
        </div>
        
        <h3 className="text-xl text-[#1d2952] font-medium">{title}</h3>
        
        {/* Itinerary Points */}
        <div className="flex items-center space-x-1 py-2">
          {itinerary.map((stop, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <div className="h-[1px] w-5 bg-gray-400"></div>}
              <div className={`h-3 w-3 rounded-full ${stop.isStart || stop.isEnd ? 'bg-[#1d2952]' : 'border border-[#1d2952] bg-white'}`}></div>
            </div>
          ))}
        </div>
        
        {/* City Names */}
        <div className="flex justify-between text-sm text-gray-600">
          {itinerary.filter(stop => stop.isStart || stop.isEnd).map((stop, index) => (
            <div key={index}>
              {stop.city}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-4">
          <div>
            <span className="text-xl font-bold text-[#1d2952]">₹{price}</span>
            <span className="text-gray-600 ml-1">per person</span>
          </div>
        </div>
        
        <button className="w-full py-3 bg-[#1d2952] text-white rounded text-center hover:bg-opacity-90 transition">
          Request a callback
        </button>
      </div>
    </div>
  );
};

const TopSellingTours = () => {
  const tours = [
    {
      destination: 'Rajasthan',
      rating: 4.6,
      reviews: '1.2k',
      title: 'Royal Rajasthan Escape',
      imageSrc: '/tours/rajasthan.png',
      price: '18,499',
      itinerary: [
        { city: 'Jaipur' },
        { city: 'Jodhpur' },
        { city: 'Udaipur' }
      ]
    },
    {
      destination: 'Himachal Pradesh',
      rating: 4.2,
      reviews: '840k',
      title: 'Himalayan Adventure Retreat',
      imageSrc: '/tours/adventure.png',
      price: '14,999',
      itinerary: [
        { city: 'Manali' },
        { city: 'Kasol' }
      ]
    },
    {
      destination: 'Delhi, Agra ... 3+',
      rating: 4.9,
      reviews: '3.2k',
      title: 'Grand North India Explorer',
      imageSrc: '/tours/rajasthan.png',
      price: '29,999',
      itinerary: [
        { city: 'Delhi' },
        { city: 'Agra' },
        { city: 'Jaipur' },
        { city: 'Jodhpur' }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#f9f9f5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-16">
          <p className="text-gray-500 mb-4 md:mb-0">
            Experience, Trust, and Adventures Tailored Just for You.
          </p>
          <div className="w-full md:w-64 h-px bg-gray-300"></div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-medium text-[#1d2952] mb-12">
          Our Top Selling Tours
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <TourCard 
              key={index}
              destination={tour.destination}
              rating={tour.rating}
              reviews={tour.reviews}
              title={tour.title}
              imageSrc={tour.imageSrc}
              price={tour.price}
              itinerary={tour.itinerary}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingTours;