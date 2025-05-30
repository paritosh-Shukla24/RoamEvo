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
      src: 'https://placehold.co/600x400.png', 
      alt: 'Byasi resort with mountain view'
    },
    {
      src: 'https://placehold.co/400x350.png', 
      alt: 'River view in Himalayan foothills'
    },
    {
      src: 'https://placehold.co/400x350.png', 
      alt: 'Resort swimming pool with mountain view'
    },
    {
      src: 'https://placehold.co/400x350.png', 
      alt: 'Resort at night'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar variant="light" />
        
        <main className="pt-24 pb-16 container mx-auto px-4 md:px-6">
          <Breadcrumb items={breadcrumbItems} />
          
          <TourHeader 
            title="Himalayan Adventure Retreat" 
            emoji="🏔️"
          />
          
          <TourGallery images={tourImages} />
          
          {/* Tour Details Section */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <TourTabs activeTab={activeTab} onTabChange={setActiveTab} />
              <TourContent activeTab={activeTab} />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TourPricing />
              <TripVibeCheck />
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  );
}