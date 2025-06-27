const TourPricing = () => {
  return (
    <div className="space-y-2 sm:space-y-3 2xl:space-y-4">
      <h3 className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-gray-600 mb-2 2xl:mb-3">Price Per Person</h3>
      <div className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#4A5B2D] mb-3 sm:mb-4 2xl:mb-6">₹14,999</div>
      
      <button className="text-sm sm:text-base 2xl:text-lg w-full bg-[#313825] text-white py-2 sm:py-2.5 2xl:py-3 px-3 sm:px-4 2xl:px-6 rounded-full text-center hover:bg-[#4A5B2D] transition-all duration-300 font-medium">
        Book Now!
      </button>

      <button className="text-sm sm:text-base 2xl:text-lg w-full border border-[#4A5B2D] text-[#4A5B2D] py-2 sm:py-2.5 2xl:py-3 px-3 sm:px-4 2xl:px-6 rounded-full hover:bg-[#4A5B2D] hover:text-white transition-all duration-300 font-medium">
        Download Itinerary
      </button>
    </div>
  );
};

export default TourPricing;