const TourPricing = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-4xl text-gray-600 mb-5">Price Per Person</h3>
      <div className="text-7xl font-bold text-[#4A5B2D] mb-8">₹14,999</div>
      
      <button className="text-xl w-full bg-[#313825] text-white py-4 px-6 rounded-full text-center hover:bg-gray-700 transition font-medium">
        Book Now!
      </button>

      <button className="text-xl w-full border border-[#4A5B2D] text-[#4A5B2D] py-4 px-6 rounded-full hover:bg-gray-50 transition font-medium">
        Download Itinerary
      </button>
    </div>
  );
};

export default TourPricing;