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
    <section className="pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-center text-[#4A5B2D] mb-8 sm:mb-12 md:mb-16">
          See our people live on the trip !
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-6xl mx-auto">
          {tripImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-[4/5] sm:aspect-[4/5] md:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
