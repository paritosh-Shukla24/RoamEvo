// import MeetTheTeam from '@/components/MeetTheTeam';
import ExperienceStats from '@/components/ExperienceStats';

export default function AboutUsPage() {
  return (
    <div className="relative">
      <div
        className="relative h-screen w-full flex flex-col justify-end items-start text-white px-8 md:px-16 lg:px-24 pb-16 md:pb-20 lg:pb-24"
        style={{
          backgroundImage: "url('/images/about-background.png')", // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="relative z-10 w-full max-w-none" style={{ width: '80%' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-8 leading-tight">
            Welcome to Roamevo &apos;—&apos;<br />
            Where Adventure Meets Soul
          </h1>
          
          <div className="space-y-6 text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-4xl">
            <p>
              We are not just a travel company — we are curators of unforgettable Himalayan journeys. Born out of a 
              passion for the mountains and a love for raw, offbeat experiences, we specialize in crafting small-group 
              nature escapes that rejuvenate the mind and awaken the spirit.
            </p>
            <p>
              Whether it&apos;s riverside camping, waterfall treks, or cultural village immersions, our journeys are designed to 
              connect you to the land, the people, and your inner self.
            </p>
          </div>
        </div>
      </div>
      
      {/* Meet the Team Section */}
      {/* <MeetTheTeam /> */}
      
      {/* Experience & Legacy Stats Section */}
      <ExperienceStats />
    </div>
  );
}