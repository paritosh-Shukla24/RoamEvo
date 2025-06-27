import Breadcrumb from '@/components/Tours/Breadcrumb';
import TourHeader from '@/components/Tours/TourHeader';
import TourGallery from '@/components/Tours/TourGallery';
import TourTabs from '@/components/Tours/TourTabs';
import TourContent from '@/components/Tours/TourContent';
import TourPricing from '@/components/Tours/TourPricing';
import TripVibeCheck from '@/components/Tours/TripVibeCheck';
import ThingsToCarry from '@/components/Tours/ThingsToCarry';
import LiveTripSection from '@/components/Tours/LiveTripSection';

export default function HimalayanRetreatPage() {
  // Example breadcrumb items
  const breadcrumbItems = [
    { label: 'Rishikesh', href: '/destinations/rishikesh' },
    { label: 'Byasi', href: '/destinations/byasi' },
    { label: 'Himalayan Foothills', href: '/destinations/himalayan-foothills' },
  ];
  // Example tour gallery images
  const tourImages = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 
      alt: 'Byasi resort with mountain view'
    },
    {
      src: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'River view in Himalayan foothills'
    },
    {
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Resort swimming pool with mountain view'
    },
    {
      src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Resort at night'
    },
    {
      src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Ganges river flowing through mountains'
    },
    {
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Traditional mountain village'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Resort dining area with mountain view'
    },
    {
      src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Spa and wellness center'
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Resort room with balcony view'
    },
    {
      src: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Mountain sunrise from resort'
    },
    {
      src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Local cultural activities'
    },
    {
      src: 'https://images.unsplash.com/photo-1580654712603-eb43273aff33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      alt: 'Evening campfire by the river'
    }
  ];

  return (
    <div className="bg-white">
      <div className="pb-6 sm:pb-8 lg:pb-12 2xl:pb-16 container mx-auto px-3 sm:px-4 lg:px-6 2xl:px-8 max-w-7xl 2xl:max-w-[1600px]">
        <Breadcrumb items={breadcrumbItems} />
        
        <TourHeader 
          title="Himalayan Adventure Retreat" 
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