const TripVibeCheck = () => {
  const vibes = [
    {
      category: 'Adventure',
      level: 4,
      icon: '🔥',
    },
    {
      category: 'Nature',
      level: 5,
      icon: '🌲',
    },
    {
      category: 'Spiritual',
      level: 3,
      icon: '🙏',
    },
    {
      category: 'Chill',
      level: 3,
      icon: '😎',
    }
  ];

  const renderLevel = (level: number, icon: string, category: string) => {
    const getColor = () => {
      if (category === 'Adventure') return 'text-orange-500';
      if (category === 'Nature') return 'text-green-500';
      return 'text-yellow-500';
    };    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-sm sm:text-base ${index < level ? getColor() : 'text-gray-300'}`}
          >
            {icon}
          </span>
        ))}
      </div>
    );
  };
  return (
    <div className="mt-4 sm:mt-6">
      <h3 className="text-lg sm:text-xl lg:text-2xl text-[#000000B2] mb-2 sm:mb-3">Trip&apos;s Vibe Check</h3>
      <div className="grid grid-cols-2 gap-y-2 sm:gap-y-3 gap-x-2 sm:gap-x-3">
        {vibes.map((vibe) => (
          <div key={vibe.category} className="flex flex-col">
            <span className="text-sm sm:text-base lg:text-lg text-[#000000B2] mb-1">{vibe.category}</span>
            {renderLevel(vibe.level, vibe.icon, vibe.category)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripVibeCheck;