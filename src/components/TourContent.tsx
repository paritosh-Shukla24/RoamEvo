interface TourContentProps {
  activeTab: string;
}

const TourContent = ({ activeTab }: TourContentProps) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-justify">
              The Himalayan Adventure Retreat is more than just a trip — it&apos;s a soul-refreshing journey into the heart of the majestic Garhwal Himalayas. Designed for nature lovers, thrill seekers, and those looking to disconnect from the chaos of everyday life, this 4-day adventure offers a powerful blend of adrenaline-pumping activities, serene landscapes, and local cultural immersion.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Your journey begins in Dehradun, from where we drive through winding roads surrounded by pine forests and river valleys to our peaceful riverside base camp near Rishikesh. Enjoy starlit nights by the fire, thrilling white-water rafting on the Ganga, hikes to hidden waterfalls, and morning yoga sessions by the river. Dive deep into the Himalayan lifestyle with a guided village visit, where you&apos;ll connect with locals and learn about their traditions.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              From misty sunrise treks to mountain viewpoints, to spontaneous laughter over hot chai with fellow travelers, this experience is crafted to help you rest, recharge, and reconnect — with nature and yourself.
            </p>
          </div>
        );
      case 'itinerary':
        return (
          <div>
            <h3 className="text-2xl font-serif text-gray-800 mb-6">Itinerary</h3>
            <p className="text-gray-600">Detailed itinerary content will be displayed here...</p>
          </div>
        );
      case 'things-to-know':
        return (
          <div>
            <h3 className="text-2xl font-serif text-gray-800 mb-6">Things you should know</h3>
            <p className="text-gray-600">Important information and guidelines will be displayed here...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="flex-1">{renderContent()}</div>;
};

export default TourContent;