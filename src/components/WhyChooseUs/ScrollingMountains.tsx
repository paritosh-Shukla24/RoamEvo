'use client';
import { useEffect, useRef, forwardRef } from 'react';
import Image from 'next/image';

const ScrollingMountains = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      // Find the parent section (WhyChooseUs)
      const section = containerRef.current.closest('section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress: 0 when section bottom at bottom of viewport, 1 when top at top
      const totalScroll = rect.height + windowHeight;
      const scrolled = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

      // Move the image up inside the container: from 40% (hidden) to 0% (fully visible)
      const translateY = 60 - progress * 50;
      imageRef.current.style.transform = `translateY(${translateY}%)`;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Forward ref to the underlying img element in next/image
  const CustomImage = forwardRef<HTMLImageElement, React.ComponentProps<typeof Image>>(
    (props, ref) => (
      <Image
        {...props}
        ref={ref}
        priority
        draggable={false}
        className={
          "absolute left-0 bottom-0 w-full h-auto object-cover transition-transform duration-300 ease-out will-change-transform " +
          (props.className || "")
        }
        style={{ minHeight: '100%', maxHeight: 'none', ...(props.style || {}) }}
      />
    )
  );
  CustomImage.displayName = 'CustomImage';

  return (
    <div
      ref={containerRef}
      className="absolute left-0 bottom-0 w-full overflow-hidden"
      style={{ height: '400px', zIndex: 2, pointerEvents: 'none', userSelect: 'none' }}
    >
      <CustomImage
        ref={imageRef}
        src="/images/himalaya.png"
        alt="Himalaya Mountains"
        width={1920}
        height={400}
      />
      {/* Gradient overlay for blending with next section */}
      <div
        className="absolute left-0 bottom-0 w-full h-16 md:h-24"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)',
          zIndex: 3,
        }}
      />
    </div>
  );
};

export default ScrollingMountains;