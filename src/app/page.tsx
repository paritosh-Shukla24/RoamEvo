import { Metadata } from "next";
import HomePage from "./client-page";

export const metadata: Metadata = {
  title: "Best Adventure Tours in India | Uttarakhand, Kashmir, Manali Trips",
  description: "Explore handcrafted adventure tours in Uttarakhand, Kashmir, Manali & Rajasthan. Expert-guided Himalayan treks, river rafting, camping & cultural experiences. Book authentic India travel packages with Roamevo.",
  keywords: ["India adventure tours", "Uttarakhand travel packages", "Kashmir tours", "Manali trips", "Himalayan trekking", "river rafting India", "mountain camping", "authentic travel experiences"],
  openGraph: {
    title: "Best Adventure Tours in India | Uttarakhand, Kashmir, Manali Trips",
    description: "Explore handcrafted adventure tours in Uttarakhand, Kashmir, Manali & Rajasthan. Expert-guided Himalayan treks, river rafting, and cultural experiences.",
    url: "https://roamevo.in",
    images: [
      {
        url: "https://roamevo.in/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Roamevo Adventure Tours - Himalayan landscapes and outdoor activities",
      },
    ],
  },
  alternates: {
    canonical: "https://roamevo.in",
  },
};

export default function Home() {
  return <HomePage />;
}
