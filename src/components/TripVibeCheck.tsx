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
    };

    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${index < level ? getColor() : 'text-gray-300'}`}
          >
            {icon}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-12">
      <h3 className="text-lg text-[#000000B2] mb-6">Trip&apos;s Vibe Check</h3>
      <div className="grid grid-cols-2 gap-y-6 gap-x-4">
        {vibes.map((vibe) => (
          <div key={vibe.category} className="flex flex-col">
            <span className="text-sm text-[#000000B2] mb-2">{vibe.category}</span>
            {renderLevel(vibe.level, vibe.icon, vibe.category)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripVibeCheck;