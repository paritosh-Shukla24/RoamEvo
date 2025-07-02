const LiveTripSection = () => {
  const tripImages = [
    {
      src: 'https://images.unsplash.com/photo-1715230656262-9410dfbead2a?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cml2ZXIlMjByYWZ0aW5nJTIwZ2FuZ2F8ZW58MHx8MHx8fDA%3D',
      alt: 'Group enjoying river rafting adventure on Ganga'
    },
    {
      src: 'https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yl1F8IUm07hk1rX0q6LBiGbMYnie4Ormbxhiq4Kg_Ls=',
      alt: 'Travelers at scenic Kedarnath mountain destination'
    },
    {
      src: 'https://images.unsplash.com/photo-1625927759551-029744579e91?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvbmZpcmUlMjBjYW1waW5nJTIwSW5kaWF8ZW58MHx8MHx8fDA%3D',
      alt: 'Group bonfire camping experience with fellow travelers'
    }
  ];

  return (
    <section className="pb-8 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-16 2xl:pt-12 2xl:pb-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 2xl:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-center text-[#4A5B2D] mb-6 sm:mb-8 lg:mb-12 2xl:mb-16">
          See our people live on the trip !
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 2xl:gap-10 max-w-4xl lg:max-w-3xl 2xl:max-w-7xl mx-auto">
          {tripImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-[4/5] rounded-lg sm:rounded-xl 2xl:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
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
