interface TourContentProps {
  activeTab: string;
}

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  mood: string;
  activities: string[];
  images: string[];
  places?: string[];
}

const itineraryData: ItineraryDay[] = [
  {
    day: 1,
    title: 'Arrival & Campfire by the Riverside - Byasi Riverside',
    description: 'Settle in, breathe deep, and let the world fade away. This day is about grounding yourself in nature\'s calm and preparing for the journey ahead.',
    mood: 'Chill',
    activities: [
      '🚌 Pickup from Dehradun ISBT (9 AM)',
      '🏔️ Scenic drive through foothills to our riverside base camp (approx. 3 hrs)',
      '🥤 Welcome drink & orientation by the river',
      '🏕️ Settle into twin-sharing tents, explore the camp surroundings',
      '🚶 Evening riverside walk & light yoga to decompress',
      '🔥 Bonfire night with snacks, soft music & open skies',
      '🛏️ Overnight in tents, river sounds as your lullaby'
    ],
    images: [
      'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    places: ['Devprayag - 35KM', 'Kaudiyala -10KM']
  },
  {
    day: 2,
    title: 'Waterfall Hike & Rafting Adventure - Neergarh, Shivpuri, Rishikesh',
    description: 'A day of adrenaline and pure mountain energy. Connect with the elements - water, wind, and wildness.',
    mood: 'Adventure',
    activities: [
      'Sunrise warm-up & meditation near the river',
      'Guided trek to a secluded waterfall (1.5 hrs)',
      'Return for a wholesome lunch at camp',
      'Rafting the Ganga Grade II-III rapids (2 hrs)',
      'Optional cliff jumping at designated safe spot',
      'Evening free time to journal, chill or dip toes in the river',
      'Overnight in tents'
    ],
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ]
  }
];

const TourContent = ({ activeTab }: TourContentProps) => {
  return (
    <div className="flex-1 space-y-16">
      {/* Overview Section */}
      <section id="overview" className="scroll-mt-24">
        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            The Himalayan Adventure Retreat is more than just a trip — it's a soul-
            refreshing journey into the heart of the majestic Garhwal Himalayas. Designed
            for nature lovers, thrill seekers, and those looking to disconnect from the
            chaos of everyday life, this 5-day adventure offers a powerful blend of
            adrenaline-pumping activities, serene landscapes, and local cultural
            immersion.
          </p>

          <p>
            Your journey begins in Dehradun, from where we drive through winding roads
            surrounded by pine forests and river valleys to our peaceful riverside base
            camp in Byasi. Here, you'll experience the thrill of white-water river
            rafting on the Ganga, hikes to hidden waterfalls, and morning yoga sessions by
            the river. Dive deep into the Himalayan lifestyle with a guided village visit,
            where you'll connect with locals and learn about their traditions.
          </p>

          <p>
            From misty sunrise treks to mountain viewpoints, to spontaneous laughter
            over hot chai with fellow travelers, this experience is crafted to help you reset,
            recharge, and reconnect — with nature and yourself.
          </p>
        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="scroll-mt-24">
        <div className="space-y-8">
          <h2 className="text-2xl font-light text-gray-800 mb-8">Itinerary</h2>
            {itineraryData.map((day) => (
            <div key={day.day} className="flex gap-8 mb-12">
              {/* Day indicator */}
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-4">
                  <div 
                    className="text-xs uppercase font-montserrat font-medium px-2 py-1 rounded text-white mb-1"
                    style={{ background: 'rgba(74, 91, 45, 0.6)' }}
                  >
                    DAY
                  </div>
                  <div 
                    className="text-2xl font-montserrat font-extrabold"
                    style={{ color: '#4A5B2D', fontWeight: 800 }}
                  >
                    {String(day.day).padStart(2, '0')}
                  </div>
                </div>
                {/* Vertical line */}
                <div className="w-0.5 bg-gray-300 flex-1 min-h-24"></div>
                {/* Dot */}
                <div 
                  className="w-3 h-3 rounded-full mt-2"
                  style={{ backgroundColor: '#4A5B2D' }}
                ></div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{day.title}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Mood:</span> {day.description}
                  </div>
                </div>

                {/* Activities list */}
                <div className="space-y-2 mb-6">
                  {day.activities.map((activity, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-sm text-gray-700 leading-relaxed">{activity}</span>
                    </div>
                  ))}
                </div>

                {/* Images */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {day.images.map((image, i) => (
                    <div key={i} className="relative overflow-hidden rounded-lg h-32">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${image}')` }}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* Places to visit */}
                {day.places && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      Places we recommend you to visit
                    </h4>
                    <ul className="space-y-1">
                      {day.places.map((place, i) => (
                        <li key={i} className="text-sm text-gray-600">• {place}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TourContent;