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
    <div className="mt-12">
      <h3 className="text-lg text-[#000000B2] mb-6">Things to Carry</h3>
      <div className="space-y-3">
        {carryItems.map((item, index) => (
          <div key={index} className="flex items-start">
            <span className="text-gray-400 mr-2 mt-1">•</span>
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThingsToCarry;
