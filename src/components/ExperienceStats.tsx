'use client';

import { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  end: number;
  suffix: string;
  title: string;
  duration?: number;
}

function StatItem({ end, suffix, title, duration = 2000 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-left">
      <div className="text-4xl md:text-6xl lg:text-9xl font-bold text-[#000000B2] mb-2 font-montserrat">
        {count}{suffix}
      </div>
      <div className="text-lg md:text-4xl font-bold text-gray-700 mb-1 font-montserrat">
        {title}
      </div>
    </div>
  );
}

export default function ExperienceStats() {
  const stats = [
    {
      end: 5,
      suffix: '+',
      title: 'Years in Business'
    },
    {
      end: 300,
      suffix: '+',
      title: 'Adventures Planned'
    },
    {
      end: 5000,
      suffix: '+',
      title: 'Happy Travelers'
    },
    {
      end: 85,
      suffix: '%',
      title: 'Repeat or Referred Clients'
    },
    {
      end: 15,
      suffix: '+',
      title: 'Guides & Experts Onboard'
    },
    {
      end: 4.6,
      suffix: '/5',
      title: 'Google Reviews & Ratings'
    }
  ];

  return (
    <section className="py-16 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4A5B2D] mb-4">
            Experience & Legacy
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              title={stat.title}
              duration={1200 + index * 100} // Stagger the animations
            />
          ))}
        </div>
      </div>
    </section>
  );
}