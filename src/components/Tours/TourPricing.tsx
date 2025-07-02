'use client';

const TourPricing = () => {
  const handleDownloadItinerary = () => {
    try {
      // Create a temporary anchor element to trigger the download
      const link = document.createElement('a');
      link.href = '/pdfs/Roamevo Uttarakhand 2025.pdf';
      link.download = 'Roamevo-Uttarakhand-2025-Itinerary.pdf';
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
      // Fallback: open in new tab
      window.open('/pdfs/Roamevo Uttarakhand 2025.pdf', '_blank');
    }
  };

  return (
    <div className="space-y-2 sm:space-y-3 2xl:space-y-4">
      <h3 className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-gray-600 mb-2 2xl:mb-3">Price Per Person</h3>
      <div className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#4A5B2D] mb-3 sm:mb-4 2xl:mb-6">₹17,999</div>
      
      <a
        href="tel:+919665398773"
        className="text-sm sm:text-base 2xl:text-lg w-full bg-[#313825] text-white py-2 sm:py-2.5 2xl:py-3 px-3 sm:px-4 2xl:px-6 rounded-full text-center hover:bg-[#4A5B2D] transition-all duration-300 font-medium block"
      >
        Book Now!
      </a>

      <button 
        onClick={handleDownloadItinerary}
        className="text-sm sm:text-base 2xl:text-lg w-full border border-[#4A5B2D] text-[#4A5B2D] py-2 sm:py-2.5 2xl:py-3 px-3 sm:px-4 2xl:px-6 rounded-full hover:bg-[#4A5B2D] hover:text-white transition-all duration-300 font-medium"
      >
        Download Itinerary
      </button>
    </div>
  );
};

export default TourPricing;