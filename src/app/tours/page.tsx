import { Metadata } from 'next';
import Breadcrumb from '@/components/Tours/Breadcrumb';
import TourHeader from '@/components/Tours/TourHeader';
import TourGallery from '@/components/Tours/TourGallery';
import TourTabs from '@/components/Tours/TourTabs';
import TourContent from '@/components/Tours/TourContent';
import TourPricing from '@/components/Tours/TourPricing';
import TripVibeCheck from '@/components/Tours/TripVibeCheck';
import ThingsToCarry from '@/components/Tours/ThingsToCarry';
import LiveTripSection from '@/components/Tours/LiveTripSection';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: "Uttarakhand Adventure Tour 2025 | 5-Day Himalayan Trek & River Rafting",
  description: "Experience the ultimate Uttarakhand adventure! 5-day tour from Delhi to Joshimath, Auli, Chopta & Tungnath. Includes river rafting, trekking, camping, and cultural immersion. Book now at ₹17,999.",
  keywords: ["Uttarakhand tour package", "Auli skiing", "Tungnath trek", "Chopta camping", "Ganga river rafting", "Himalayan adventure", "Delhi to Uttarakhand tour", "mountain trekking India"],
  openGraph: {
    title: "Uttarakhand Adventure Tour 2025 | 5-Day Himalayan Trek & River Rafting",
    description: "Experience the ultimate Uttarakhand adventure! 5-day tour includes Auli skiing, Tungnath trek, river rafting, and cultural immersion. Starting at ₹17,999.",
    url: "https://roamevo.in/tours",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Uttarakhand Himalayan peaks - Adventure tour destination",
      },
    ],
  },
  alternates: {
    canonical: "https://roamevo.in/tours",
  },
};

export default function UttarakhandTourPage() {
  // Breadcrumb items for Uttarakhand 2025 tour
  const breadcrumbItems = [
    { label: 'Delhi', href: '/destinations/delhi' },
    { label: 'Joshimath', href: '/destinations/joshimath' },
    { label: 'Auli', href: '/destinations/auli' },
    { label: 'Chopta', href: '/destinations/chopta' },
    { label: 'Uttarakhand', href: '/destinations/uttarakhand' },
  ];

  // Structured data for the tour package
  const tourStructuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Roamevo Uttarakhand 2025 - 5-Day Himalayan Adventure",
    "description": "Experience the ultimate Uttarakhand adventure! 5-day tour from Delhi to Joshimath, Auli, Chopta & Tungnath. Includes river rafting, trekking, camping, and cultural immersion.",
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "provider": {
      "@type": "TravelAgency",
      "name": "Roamevo",
      "url": "https://roamevo.in"
    },
    "offers": {
      "@type": "Offer",
      "price": "17999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-12-31",
      "description": "5-day Uttarakhand adventure tour including accommodation, transport, activities, and meals"
    },
    "itinerary": [
      {
        "@type": "TouristDestination",
        "name": "Delhi to Joshimath",
        "description": "Journey through Haridwar, Devprayag, Rudraprayag to reach Joshimath"
      },
      {
        "@type": "TouristDestination", 
        "name": "Auli Excursion",
        "description": "Skiing, Nanda Devi views, Gurson Bugyal trek, then drive to Chopta"
      },
      {
        "@type": "TouristDestination",
        "name": "Tungnath Trek",
        "description": "Trek to highest Shiva temple and Chandrashila Peak, drive to Kanatal"
      },
      {
        "@type": "TouristDestination",
        "name": "Kanatal to Rishikesh",
        "description": "Visit Kempty Falls, Mall Road Mussoorie, Ganga Aarti in Rishikesh"
      },
      {
        "@type": "TouristDestination",
        "name": "Rishikesh to Delhi",
        "description": "Return journey to Delhi with lifetime memories"
      }
    ],
    "duration": "P5D",
    "startLocation": {
      "@type": "Place",
      "name": "Delhi, India"
    },
    "endLocation": {
      "@type": "Place", 
      "name": "Delhi, India"
    }
  };
  // Tour gallery images based on actual Uttarakhand adventure itinerary
  const tourImages = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
      alt: 'Uttarakhand Himalayan peaks - Main tour destination'
    },
    {
      src: 'https://images.unsplash.com/photo-1547452377-b2ac40e02ed6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvcHRhfGVufDB8fDB8fHww', 
      alt: 'Sacred Hindu temple in mountains - Uttarakhand spiritual journey'
    },
    {
      src: 'https://images.unsplash.com/photo-1718383537411-6f9e727ae0bb?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXIlMjByYWZ0aW5nJTIwZ2FuZ2F8ZW58MHx8MHx8fDA%3D', 
      alt: 'Ganga river rafting adventure - Day 2 thrilling water sports'
    },
    {
      src: 'https://images.unsplash.com/photo-1715230656262-9410dfbead2a?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cml2ZXIlMjByYWZ0aW5nJTIwZ2FuZ2F8ZW58MHx8MHx8fDA%3D', 
      alt: 'Group river rafting on Ganga - Team adventure experience'
    },
    {
      src: 'https://images.unsplash.com/photo-1633005623496-899fdf60b749?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtcGluZyUyMHRlbnRzJTIwcml2ZXJzaWRlfGVufDB8fDB8fHww', 
      alt: 'Riverside camping with tents - Day 1-2 accommodation by the river'
    },
    {
      src: 'https://images.unsplash.com/photo-1687511741630-18fe16e8ed7e?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHV0dGFyYWtoYW5kJTIwdmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D', 
      alt: 'Traditional Uttarakhand village - Day 3 cultural immersion experience'
    },
    {
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Traditional mountain village houses - Local cultural experience'
    },
    {
      src: 'https://images.unsplash.com/photo-1625927759551-029744579e91?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvbmZpcmUlMjBjYW1waW5nJTIwSW5kaWF8ZW58MHx8MHx8fDA%3D', 
      alt: 'Bonfire camping in India - Evening group activities Day 1 & 4'
    },
    {
      src: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Himalayan trekking trail through forests - Adventure hiking experience'
    },
    {
      src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Ganga river flowing through Byasi - Day 1 riverside camping location'
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Mountain waterfall trek - Day 2 guided hike destination'
    }
  ];

  return (
    <div className="bg-white">
      <StructuredData data={tourStructuredData} />
      <div className="pb-6 sm:pb-8 lg:pb-12 2xl:pb-16 container mx-auto px-3 sm:px-4 lg:px-6 2xl:px-8 max-w-7xl 2xl:max-w-[1600px]">
        <Breadcrumb items={breadcrumbItems} />
        
        <TourHeader 
          title="Roamevo Uttarakhand 2025" 
          emoji="🏔️"
        />
        
        <TourGallery images={tourImages} />
        
        {/* Tour Details Section */}
        <div className="mt-6 sm:mt-8 lg:mt-12 2xl:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1px_1fr] 2xl:grid-cols-[2.5fr_1px_1fr] gap-6 sm:gap-8 lg:gap-12 2xl:gap-16">
            {/* Main Content */}
            <div className="lg:pr-6 2xl:pr-8">
              {/* Sticky Tour Tabs */}
              <div className="lg:sticky lg:top-16 2xl:top-20 lg:z-20 bg-white">
                <TourTabs />
              </div>
              <TourContent />
            </div>
            
            {/* Vertical Separator Line */}
            <div className="hidden lg:block w-px bg-[#000000B2] sticky top-24 2xl:top-28 h-96 2xl:h-[500px]"></div>
            
            {/* Sidebar */}
            <div className="lg:pl-6 2xl:pl-8 lg:pt-3 2xl:pt-4">
              {/* Sticky Sidebar */}
              <div className="lg:sticky lg:top-19 2xl:top-24 lg:max-h-screen 2xl:max-h-[calc(100vh-6rem)] lg:overflow-y-auto scrollbar-hide space-y-3 sm:space-y-4 2xl:space-y-6">
                <TourPricing />
                <TripVibeCheck />
                <ThingsToCarry />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Live Trip Section */}
      <LiveTripSection />
    </div>
  );
}