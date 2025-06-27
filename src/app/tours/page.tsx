import Breadcrumb from '@/components/Breadcrumb';
import TourHeader from '@/components/TourHeader';
import TourGallery from '@/components/TourGallery';
import TourTabs from '@/components/TourTabs';
import TourContent from '@/components/TourContent';
import TourPricing from '@/components/TourPricing';
import TripVibeCheck from '@/components/TripVibeCheck';
import ThingsToCarry from '@/components/ThingsToCarry';
import LiveTripSection from '@/components/LiveTripSection';

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
      <div className="pb-8 sm:pb-12 md:pb-16 container mx-auto px-3 sm:px-4 md:px-6">
        <Breadcrumb items={breadcrumbItems} />
        
        <TourHeader 
          title="Himalayan Adventure Retreat" 
          emoji="🏔️"
        />
        
        <TourGallery images={tourImages} />
        
        {/* Tour Details Section */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1px_1fr] gap-8 sm:gap-12 md:gap-16">
            {/* Main Content */}
            <div className="lg:pr-8">
              {/* Sticky Tour Tabs */}
              <div className="lg:sticky lg:top-21 lg:z-20 bg-white">
                <TourTabs />
              </div>
              <TourContent />
            </div>
            
            {/* Vertical Separator Line */}
            <div className="hidden lg:block w-px bg-[#000000B2] sticky top-24 h-96"></div>
            
            {/* Sidebar */}
            <div className="lg:pl-8 lg:pt-4">
              {/* Sticky Sidebar */}
              <div className="lg:sticky lg:top-24 lg:h-100vh lg:overflow-y-auto space-y-6 sm:space-y-8">
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