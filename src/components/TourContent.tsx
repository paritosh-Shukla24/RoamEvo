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
      '🌅 Sunrise warm-up & meditation near the river',
      '🥾 Guided trek to a secluded waterfall (1.5 hrs)',
      '🍽️ Return for a wholesome lunch at camp',
      '🚣 Rafting the Ganga Grade II-III rapids (2 hrs)',
      '🏃 Optional cliff jumping at designated safe spot',
      '📖 Evening free time to journal, chill or dip toes in the river',
      '🏕️ Overnight in tents'
    ],
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    places: ['Shivpuri - 5KM', 'Rishikesh - 25KM']
  },
  {
    day: 3,
    title: 'Village Immersion & Mountain Trek - Himalayan Villages',
    description: 'Experience authentic mountain culture and connect with local communities while exploring scenic trails.',
    mood: 'Cultural',
    activities: [
      '🌄 Early morning yoga session overlooking the valley',
      '🚶 Trek to nearby traditional Garhwali village (2 hrs)',
      '🏠 Visit local homes, interact with families',
      '🥘 Traditional lunch prepared by village women',
      '🎨 Learn local crafts and farming techniques',
      '🌅 Sunset viewpoint hike with panoramic mountain views',
      '🏕️ Return to base camp for dinner and rest'
    ],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1464822759444-d93c0723395b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    places: ['Kanatal - 45KM', 'Dhanaulti - 40KM']
  },
  {
    day: 4,
    title: 'High Altitude Adventure & Forest Exploration',
    description: 'Push your limits with challenging treks and discover the pristine beauty of Himalayan forests.',
    mood: 'Challenging',
    activities: [
      '🌅 Pre-dawn start for high altitude trek (4 hrs)',
      '🏔️ Reach scenic viewpoint at 2800m altitude',
      '📸 Photography session with snow-capped peaks',
      '🥪 Packed lunch at the summit',
      '🌲 Descend through dense deodar forests',
      '🦅 Wildlife spotting and bird watching',
      '🔥 Final night bonfire with group reflections'
    ],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    places: ['Mussoorie - 60KM', 'Kempty Falls - 55KM']
  },
  {
    day: 5,
    title: 'Departure & Farewell - Return to Dehradun',
    description: 'A peaceful morning to reflect on your journey before heading back to the plains.',
    mood: 'Reflective',
    activities: [
      '🌅 Sunrise meditation by the river',
      '☕ Farewell breakfast with the group',
      '📦 Pack up and camp cleanup',
      '🚌 Scenic drive back to Dehradun (3 hrs)',
      '🍽️ Lunch stop at a local dhaba',
      '🚉 Drop-off at Dehradun ISBT/Railway Station',
      '👋 Goodbye with memories that last a lifetime'
    ],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    ],
    places: ['Dehradun ISBT', 'Dehradun Railway Station']
  }
];

// Things to know data
const includedItems = [
  'Pickup & drop (Dehradun to Camp)',
  'All accommodations (3 nights in alpine tents)',
  'All meals (Day 1 lunch to Day 4 breakfast)',
  'Rafting with safety gear',
  'Certified guides and trek leaders',
  'Bonfire night, music, and games',
  'Local cultural tour',
  'Entry fees, forest permits'
];

const notIncludedItems = [
  'Meals during travel',
  'Personal expenses (snacks, souvenirs)',
  'Medical/Travel insurance',
  'Extra adventure activities (on request)',
  'Tips and optional donations'
];

const TourContent = ({ activeTab }: TourContentProps) => {
  return (
    <div className="flex-1 space-y-8 sm:space-y-12 md:space-y-16">
      {/* Overview Section */}
      <section id="overview" className="scroll-mt-44 text-base sm:text-lg md:text-xl sm:mt-6">
        <div className="space-y-4 sm:space-y-6 text-[#000000] leading-relaxed text-justify">
          <p>
            The Himalayan Adventure Retreat is more than just a trip — it&apos;s a soul-
            refreshing journey into the heart of the majestic Garhwal Himalayas. Designed
            for nature lovers, thrill seekers, and those looking to disconnect from the
            chaos of everyday life, this 5-day adventure offers a powerful blend of
            adrenaline-pumping activities, serene landscapes, and local cultural
            immersion.
          </p>

          <p>
            Your journey begins in Dehradun, from where we drive through winding roads
            surrounded by pine forests and river valleys to our peaceful riverside base
            camp in Byasi. Here, you&apos;ll experience the thrill of white-water river
            rafting on the Ganga, hikes to hidden waterfalls, and morning yoga sessions by
            the river. Dive deep into the Himalayan lifestyle with a guided village visit,
            where you&apos;ll connect with locals and learn about their traditions.
          </p>

          <p>
            From misty sunrise treks to mountain viewpoints, to spontaneous laughter
            over hot chai with fellow travelers, this experience is crafted to help you reset,
            recharge, and reconnect — with nature and yourself.
          </p>
        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="scroll-mt-44">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#4A5B2D] mb-8 sm:mb-10 md:mb-12">Itinerary</h2>
          <div className="relative">
            {/* Continuous timeline line - starts from below first dot and goes through all days */}
            <div className="absolute left-[51.5px] sm:left-[65px] md:left-[85px] top-8 sm:top-12 md:top-15 w-px bg-[#4A5B2D]" 
                 style={{ height: `calc(100% - 3.6rem)` }}></div>
            
            {itineraryData.map((day, index) => (
              <div key={day.day} className="relative flex mb-6 sm:mb-8">
                {/* Day indicator positioned to the left of the dot */}
                <div className="flex items-start mr-3 sm:mr-4 md:mr-6">
                  <div className="text-left mr-2 sm:mr-3 md:mr-4 w-10 sm:w-12 md:w-16 flex flex-col">
                    <div
                      className="text-sm sm:text-lg md:text-2xl uppercase font-[family-name:--font-montserrat] font-semibold tracking-wider"
                      style={{ color: '#4A5B2D99' }}
                    >
                      DAY
                    </div>
                    <div
                      className="text-3xl sm:text-4xl md:text-6xl font-[family-name:--font-montserrat] leading-none font-extrabold"
                      style={{ color: '#4A5B2D', fontWeight: 800 }}
                    >
                      {String(day.day).padStart(2, '0')}
                    </div>
                  </div>
                  {/* Dot positioned to align with the number */}
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full relative z-10 mt-8 sm:mt-10 md:mt-14"
                    style={{ 
                      backgroundColor: '#4A5B2D'
                    }}
                  ></div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-6 sm:pb-8 pl-2 sm:pl-3 md:pl-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#4A5B2DCC] mb-2">{day.title}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-sm sm:text-base md:text-lg text-gray-600">
                      <span className="font-semibold">Mood :</span> {day.description}
                    </div>
                  </div>

                  {/* Activities list */}
                  <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {day.activities.map((activity, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{activity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Images */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                    {day.images.map((image, i) => (
                      <div key={i} className="relative overflow-hidden rounded-lg h-20 sm:h-24 md:h-32">
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
                      <h4 className="text-base sm:text-lg font-semibold text-[#4A5B2D] mb-2">
                        Places we recommend you to visit
                      </h4>
                      <ul className="space-y-1">
                        {day.places.map((place, i) => (
                          <li key={i} className="text-sm sm:text-base md:text-lg text-gray-600">• {place}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Things you should know Section */}
      <section id="things-to-know" className="scroll-mt-44 mt-16 sm:mt-20">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#4A5B2D] mb-8 sm:mb-10 md:mb-12">Things you should know</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* What is included */}
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4 sm:mb-6">What is included in the tour</h3>
              <ul className="space-y-2 sm:space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-start text-sm sm:text-base md:text-lg text-gray-700">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What is NOT included */}
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4 sm:mb-6">What is NOT included in the tour</h3>
              <ul className="space-y-2 sm:space-y-3">
                {notIncludedItems.map((item, index) => (
                  <li key={index} className="flex items-start text-sm sm:text-base md:text-lg text-gray-700">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourContent;