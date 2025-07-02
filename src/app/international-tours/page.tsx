import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "International Tours Coming Soon | Roamevo Global Adventures",
  description: "Exciting international tour packages coming soon! Contact Roamevo at +91 9665398773 for inquiries about upcoming global adventure destinations and travel experiences.",
  keywords: ["international tours", "global adventures", "overseas travel packages", "Roamevo international", "coming soon tours"],
  openGraph: {
    title: "International Tours Coming Soon | Roamevo Global Adventures",
    description: "Exciting international tour packages coming soon! Contact us for inquiries about upcoming global adventure destinations.",
    url: "https://roamevo.in/international-tours",
  },
  alternates: {
    canonical: "https://roamevo.in/international-tours",
  },
  robots: {
    index: false, // Don't index this coming soon page
    follow: true,
  },
};

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f5]">
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-[#1d2952] mb-6">Coming Soon</h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-10">
          Our International Tours page is under construction.<br />
          Stay tuned for amazing journeys!
        </p>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-500">For inquiries:</span>
          <a
            href="tel:+919665398773"
            className="text-[#1d2952] underline hover:text-blue-700"
          >
            +91 9665398773
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=roamevo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1d2952] underline hover:text-blue-700"
          >
            roamevo@gmail.com
          </a>
        </div>
      </main>
    </div>
  );
}