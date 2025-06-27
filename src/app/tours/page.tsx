'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import TourHeader from '@/components/TourHeader';
import TourGallery from '@/components/TourGallery';
import TourTabs from '@/components/TourTabs';
import TourContent from '@/components/TourContent';
import TourPricing from '@/components/TourPricing';
import TripVibeCheck from '@/components/TripVibeCheck';
import ThingsToCarry from '@/components/ThingsToCarry';

export default function HimalayanRetreatPage() {
  const [activeTab, setActiveTab] = useState('overview');

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
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar variant="light" />
        
        <main className="pb-8 sm:pb-12 md:pb-16 container mx-auto px-3 sm:px-4 md:px-6">
          <Breadcrumb items={breadcrumbItems} />
          
          <TourHeader 
            title="Himalayan Adventure Retreat" 
            emoji="🏔️"
          />
          
          <TourGallery images={tourImages} />
          
          {/* Tour Details Section */}
          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Sticky Tour Tabs */}
              <div className="lg:sticky lg:top-20 lg:z-20 bg-white">
                <TourTabs activeTab={activeTab} onTabChange={setActiveTab} />
              </div>
              <TourContent activeTab={activeTab} />
            </div>
              {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Sticky Sidebar */}
              <div className="lg:sticky lg:top-24 lg:h-100vh lg:overflow-y-auto space-y-6 sm:space-y-8">
                <TourPricing />
                <TripVibeCheck />
                <ThingsToCarry />
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  );
}