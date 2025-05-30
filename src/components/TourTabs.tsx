'use client';

interface TourTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TourTabs = ({ activeTab, onTabChange }: TourTabsProps) => {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'things-to-know', label: 'Things you should know' },
  ];

  return (
    <div className="flex border-b border-gray-200 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`pb-4 pr-8 mr-8 text-base transition-colors ${
            activeTab === tab.id
              ? 'border-b-2 border-[#4A5B2D] text-[#4A5B2D] font-medium'
              : 'text-[#000000B2] hover:text-gray-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TourTabs;