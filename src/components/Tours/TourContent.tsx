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
    title: 'Delhi to Joshimath - Journey to the Himalayas',
    description: 'Transition from city chaos to Himalayan calm. Start your journey from Delhi, passing through sacred confluences and following the Alaknanda River upstream.',
    mood: 'Transition',
    activities: [
      '🌃 Start journey from Delhi (late night/early morning)',
      '🛣️ Drive through Haridwar, Devprayag, Rudraprayag',
      '🏞️ Follow scenic route alongside Alaknanda River',
      '🏔️ Arrive in Joshimath by evening (14-15 hrs drive)',
      '🏨 Check-in, freshen up, and relax',
      '🛏️ Overnight stay in Joshimath'
    ],
    images: [
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yl1F8IUm07hk1rX0q6LBiGbMYnie4Ormbxhiq4Kg_Ls='
    ],
    places: ['Haridwar - 240KM', 'Devprayag - 320KM', 'Rudraprayag - 380KM', 'Joshimath - 520KM']
  },
  {
    day: 2,
    title: 'Auli Excursion + Drive to Chopta - Snowy Thrills & Alpine Serenity',
    description: 'A day of snowy thrills and alpine serenity. Experience skiing, snow fun, and breathtaking views of Nanda Devi and Hathi Ghoda Peaks.',
    mood: 'Adventure',
    activities: [
      '🍽️ After breakfast, take ropeway to Auli or drive (10-12 km)',
      '⛷️ Enjoy skiing (seasonal), snow fun activities',
      '🏔️ Views of Nanda Devi, Hathi Ghoda Peaks',
      '🥾 Optional Gurson Bugyal trek',
      '🚗 Afternoon: Drive to Chopta (4-5 hrs)',
      '🌲 Reach by evening, soak in forest vibes',
      '🏨 Overnight stay in Chopta'
    ],
    images: [
      'https://media.istockphoto.com/id/513247652/photo/panoramic-beautiful-view-of-mount-ama-dablam.webp?a=1&b=1&s=612x612&w=0&k=20&c=8OGGkQYFuXs69Xwyz3irBAtpSLXxZFw3LKhBnPT7cy8=',
      'https://plus.unsplash.com/premium_photo-1661810803959-f91f5195138e?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VXR0cmFraGFuZCUyMG1vdW50YWluJTIwdHJla2tpbmd8ZW58MHx8MHx8fDA%3D'
    ],
    places: ['Auli - 12KM', 'Chopta - 200KM']
  },
  {
    day: 3,
    title: 'Tungnath Trek & Drive to Kanatal - Spiritual Height & Peaceful Escape',
    description: 'Spiritual height and peaceful escape. Trek to the world\'s highest Shiva temple and enjoy 360° snow views from Chandrashila Peak.',
    mood: 'Spiritual',
    activities: [
      '🌅 Start early for Tungnath trek (3.5 km one way)',
      '🛕 Visit highest Shiva temple in the world',
      '⛰️ Continue to Chandrashila Peak (optional)',
      '📸 360° snow views from the summit',
      '🍽️ Return, lunch break at Chopta',
      '🚗 Drive to Kanatal (5-6 hrs)',
      '🔥 Evening peaceful campfire',
      '🏨 Overnight stay in Kanatal'
    ],
    images: [
      'https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yl1F8IUm07hk1rX0q6LBiGbMYnie4Ormbxhiq4Kg_Ls=',
      'https://images.unsplash.com/photo-1625927759551-029744579e91?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvbmZpcmUlMjBjYW1waW5nJTIwSW5kaWF8ZW58MHx8MHx8fDA%3D'
    ],
    places: ['Tungnath Temple - 3.5KM Trek', 'Chandrashila Peak - 5KM Trek', 'Kanatal - 250KM']
  },
  {
    day: 4,
    title: 'Kanatal to Mussoorie to Rishikesh - From Mountain Charm to River Peace',
    description: 'From mountain charm to river peace. Explore the Queen of Hills and witness the divine Ganga Aarti in the yoga capital of the world.',
    mood: 'Cultural',
    activities: [
      '🍽️ After breakfast, head to Mussoorie (2 hrs)',
      '💧 Quick visit to Kempty Falls',
      '🛍️ Explore Mall Road for shopping and local food',
      '🚠 Visit Gun Hill via cable car',
      '🚗 Drive to Rishikesh (2.5-3 hrs)',
      '🕯️ Reach in time for Ganga Aarti at Triveni Ghat',
      '🌉 Optional visits: Laxman Jhula, café hopping',
      '🏨 Overnight stay in Rishikesh'
    ],
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://plus.unsplash.com/premium_photo-1661913065271-2c265f232373?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHlvZ2ElMjBieSUyMHJpdmVyfGVufDB8fDB8fHww'
    ],
    places: ['Mussoorie - 60KM', 'Kempty Falls - 65KM', 'Rishikesh - 230KM']
  },
  {
    day: 5,
    title: 'Rishikesh to Delhi - Wrap-up with Memories',
    description: 'Wrap-up with memories. End your journey with moments from snowy peaks to sacred rivers, carrying the essence of the Himalayas back home.',
    mood: 'Reflective',
    activities: [
      '🍽️ Breakfast at stay',
      '📦 Pack up and check-out',
      '🚗 Drive back to Delhi (5-6 hrs)',
      '🍽️ Lunch stop at highway dhaba',
      '🏙️ Reach Delhi by evening',
      '👋 Trip ends with memories from snowy peaks to sacred rivers'
    ],
    images: [
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://media.istockphoto.com/id/513247652/photo/panoramic-beautiful-view-of-mount-ama-dablam.webp?a=1&b=1&s=612x612&w=0&k=20&c=8OGGkQYFuXs69Xwyz3irBAtpSLXxZFw3LKhBnPT7cy8='
    ],
    places: ['Delhi - 240KM']
  }
];

// Things to know data
const includedItems = [
  'Accommodation in Hotel/Camp (quad sharing)',
  '3/4/5 Star Hotels (as applicable)',
  'Meals as per itinerary',
  'Travel by Force Tempo Traveller',
  'Sightseeing & transfers',
  'Train fare (Sleeper/3AC)',
  'All inner line permits',
  'All tolls, driver charges, and taxes'
];

const notIncludedItems = [
  'Camera fees, sightseeing entry tickets',
  'Meals not mentioned in itinerary',
  'Personal expenses (laundry, luggage, calls, etc.)',
  'Costs due to itinerary changes (weather, roadblocks, etc.)',
  'Additional accommodation/food due to delays',
  'Room heater charges',
  'Travel/Medical Insurance',
  'Applicable GST',
  'Anything not listed under "Inclusions"'
];

const TourContent = () => {
  return (
    <div className="flex-1 space-y-6 sm:space-y-8 lg:space-y-10 2xl:space-y-12">
      {/* Overview Section */}
      <section id="overview" className="scroll-mt-44 2xl:scroll-mt-52 text-sm sm:text-base lg:text-lg 2xl:text-xl sm:mt-6 2xl:mt-8">
        <div className="space-y-3 sm:space-y-4 2xl:space-y-6 text-[#000000] leading-relaxed 2xl:leading-loose text-justify">
          <p>
            The Roamevo Uttarakhand 2025 is more than just a trip — it&apos;s a 
            comprehensive journey from the bustling capital to the serene Himalayas. 
            Starting your adventure from Delhi, this 5-day retreat takes you through 
            sacred confluences, snow-capped peaks, spiritual heights, and cultural 
            encounters across the most beautiful destinations of Uttarakhand.
          </p>

          <p>
            Your journey begins in Delhi, passing through the holy city of Haridwar, 
            the sacred confluences of Devprayag and Rudraprayag, tracing the pristine 
            Alaknanda River upstream to reach Joshimath. Experience the thrill of 
            skiing in Auli with breathtaking views of Nanda Devi, trek to the world&apos;s 
            highest Shiva temple at Tungnath, and witness the divine Ganga Aarti in 
            Rishikesh — the yoga capital of the world.
          </p>

          <p>
            From snowy alpine adventures to spiritual temple visits, from mountain 
            hill stations to riverside serenity, this carefully crafted itinerary 
            offers the perfect blend of adventure, spirituality, and natural beauty. 
            Each destination tells a unique story, creating memories that will last 
            a lifetime.
          </p>
        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="scroll-mt-44 2xl:scroll-mt-52">
        <div className="space-y-4 sm:space-y-6 2xl:space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-light text-[#4A5B2D] mb-6 sm:mb-8 lg:mb-10 2xl:mb-12">Itinerary</h2>
          <div className="relative">
            {/* Continuous timeline line - starts from below first dot and goes through all days */}
            <div className="absolute left-[43px] sm:left-[56px] lg:left-[64px] 2xl:left-[76px] top-6 sm:top-8 lg:top-10 2xl:top-12 w-px bg-[#4A5B2D]" 
                 style={{ height: `calc(100% - 3rem)` }}></div>
            
            {itineraryData.map((day) => (
              <div key={day.day} className="relative flex mb-4 sm:mb-6 2xl:mb-8">
                {/* Day indicator positioned to the left of the dot */}
                <div className="flex items-start mr-2 sm:mr-3 lg:mr-4 2xl:mr-6">
                  <div className="text-left mr-2 sm:mr-3 2xl:mr-4 w-8 sm:w-10 lg:w-12 2xl:w-16 flex flex-col">
                    <div
                      className="text-xs sm:text-sm lg:text-base 2xl:text-lg uppercase font-[family-name:--font-montserrat] font-semibold tracking-wider"
                      style={{ color: '#4A5B2D99' }}
                    >
                      DAY
                    </div>
                    <div
                      className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-[family-name:--font-montserrat] leading-none font-extrabold"
                      style={{ color: '#4A5B2D', fontWeight: 800 }}
                    >
                      {String(day.day).padStart(2, '0')}
                    </div>
                  </div>
                  {/* Dot positioned to align with the number */}
                  <div
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 2xl:w-3 2xl:h-3 rounded-full relative z-10 mt-6 sm:mt-7 lg:mt-9 2xl:mt-11"
                    style={{ 
                      backgroundColor: '#4A5B2D'
                    }}
                  ></div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-4 sm:pb-6 2xl:pb-8 pl-2 sm:pl-3 2xl:pl-4">
                  <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-semibold text-[#4A5B2DCC] mb-2 2xl:mb-3">{day.title}</h3>

                  <div className="flex items-center gap-2 2xl:gap-3 mb-2 2xl:mb-3">
                    <div className="text-sm sm:text-base 2xl:text-lg text-gray-600">
                      <span className="font-semibold">Mood :</span> {day.description}
                    </div>
                  </div>

                  {/* Activities list */}
                  <div className="space-y-1 2xl:space-y-1.5 mb-3 sm:mb-4 2xl:mb-6">
                    {day.activities.map((activity, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-xs sm:text-sm lg:text-base 2xl:text-lg text-gray-700 leading-relaxed 2xl:leading-loose">{activity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Images */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 2xl:gap-4 mb-3 sm:mb-4 2xl:mb-6">
                    {day.images.map((image, i) => (
                      <div key={i} className="relative overflow-hidden rounded-lg 2xl:rounded-xl h-16 sm:h-20 lg:h-24 2xl:h-32">
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
                      <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-[#4A5B2D] mb-2">
                        Places we recommend you to visit
                      </h4>
                      <ul className="space-y-1">
                        {day.places.map((place, i) => (
                          <li key={i} className="text-xs sm:text-sm lg:text-base text-gray-600">• {place}</li>
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
      <section id="things-to-know" className="scroll-mt-44 2xl:scroll-mt-52 mt-12 sm:mt-16 2xl:mt-20">
        <div className="space-y-4 sm:space-y-6 2xl:space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-light text-[#4A5B2D] mb-6 sm:mb-8 lg:mb-10 2xl:mb-12">Things you should know</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 2xl:gap-12">
            {/* What is included */}
            <div>
              <h3 className="text-lg sm:text-xl 2xl:text-2xl font-medium text-gray-800 mb-3 sm:mb-4 2xl:mb-6">What is included in the tour</h3>
              <ul className="space-y-2 2xl:space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center text-sm sm:text-base 2xl:text-lg text-gray-700">
                    <span className="text-gray-400 mr-2 2xl:mr-3">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What is NOT included */}
            <div>
              <h3 className="text-lg sm:text-xl 2xl:text-2xl font-medium text-gray-800 mb-3 sm:mb-4 2xl:mb-6">What is NOT included in the tour</h3>
              <ul className="space-y-2 2xl:space-y-3">
                {notIncludedItems.map((item, index) => (
                  <li key={index} className="flex items-center text-sm sm:text-base 2xl:text-lg text-gray-700">
                    <span className="text-gray-400 mr-2 2xl:mr-3">•</span>
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