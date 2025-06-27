const LiveTripSection = () => {
  const tripImages = [
    {
      src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Happy traveler in winter gear enjoying the mountains'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Scenic snowy mountain trail with travelers'
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Traveler enjoying hot drink with mountain view'
    }
  ];

  return (
    <section className="pb-8 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-16 bg-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-center text-[#4A5B2D] mb-6 sm:mb-8 lg:mb-12">
          See our people live on the trip !
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-6 max-w-5xl mx-auto">
          {tripImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-[4/5] rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${image.src}')` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveTripSection;
