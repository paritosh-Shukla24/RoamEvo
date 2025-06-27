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
    <div className="mt-4 sm:mt-6">
      <h3 className="text-lg sm:text-xl lg:text-2xl text-[#000000B2] mb-2 sm:mb-3">Things to Carry</h3>
      <div className="space-y-1.5">
        {carryItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-gray-400 mr-2">•</span>
            <span className="text-xs sm:text-sm lg:text-base text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThingsToCarry;
