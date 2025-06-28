import type { Metadata } from "next";
import { Gideon_Roman } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";

const gideonRoman = Gideon_Roman({
  subsets: ["latin"],
  weight: "400", // only one weight available
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // include only the weights you need
  display: "swap",
  variable: "--font-montserrat", // this lets you use it in Tailwind CSS
});

export const metadata: Metadata = {
  title: "Roamevo",
  description: "ROAM. EXPERIENCE. EVOLVE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gideonRoman.className} ${montserrat.variable} antialiased`}
      >
        <NavbarWrapper />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
