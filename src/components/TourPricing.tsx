const TourPricing = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 mb-3 sm:mb-5">Price Per Person</h3>
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#4A5B2D] mb-6 sm:mb-8">₹14,999</div>
      
      <button className="text-lg sm:text-xl w-full bg-[#313825] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-full text-center hover:bg-gray-700 transition font-medium">
        Book Now!
      </button>

      <button className="text-lg sm:text-xl w-full border border-[#4A5B2D] text-[#4A5B2D] py-3 sm:py-4 px-4 sm:px-6 rounded-full hover:bg-gray-50 transition font-medium">
        Download Itinerary
      </button>
    </div>
  );
};

export default TourPricing;