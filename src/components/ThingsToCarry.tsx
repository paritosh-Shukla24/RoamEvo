const ThingsToCarry = () => {
  const carryItems = [
    'Govt ID proof (Aadhar/Passport)',
    'Durable backpack (40L+)',
    'Trekking shoes',
    'Warm layers (nights are chilly)',
    'Lightweight rain jacket',
    'Water bottle (reusable)',
    'Headlamp/flashlight',
    'Sunscreen, cap, and sunglasses',
    'Toiletries, towel, and power bank',
    'Personal medications'
  ];
  return (
    <div className="mt-8 sm:mt-12 md:mt-15">
      <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#000000B2] mb-4 sm:mb-6">Things to Carry</h3>
      <div className="space-y-2 sm:space-y-3">
        {carryItems.map((item, index) => (
          <div key={index} className="flex items-start">
            <span className="text-gray-400 mr-2 sm:mr-3 mt-1">•</span>
            <span className="text-base sm:text-lg md:text-xl text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThingsToCarry;
