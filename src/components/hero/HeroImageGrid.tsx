
import React, { useRef, useEffect } from 'react';
import HeroImageColumn from './HeroImageColumn';
import HeroMobileCarousel from './HeroMobileCarousel';

interface HeroImageGridProps {
  images: string[];
}

const HeroImageGrid = ({ images }: HeroImageGridProps) => {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  // Effect for automatic scrolling in opposite directions
  useEffect(() => {
    const scrollSpeed1 = 0.5;
    const scrollSpeed2 = -0.5;
    let animationFrameId: number;
    let lastTimestamp: number | null = null;
    
    const scroll = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      if (scrollRef1.current) {
        scrollRef1.current.scrollTop += scrollSpeed1 * (deltaTime / 16);
        // Reset scroll position when reaching bottom
        if (scrollRef1.current.scrollTop >= scrollRef1.current.scrollHeight - scrollRef1.current.clientHeight) {
          scrollRef1.current.scrollTop = 0;
        }
      }
      
      if (scrollRef2.current) {
        scrollRef2.current.scrollTop += scrollSpeed2 * (deltaTime / 16);
        // Reset scroll position when reaching top
        if (scrollRef2.current.scrollTop <= 0) {
          scrollRef2.current.scrollTop = scrollRef2.current.scrollHeight - scrollRef2.current.clientHeight;
        }
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Right column - Scrolling images for larger screens */}
      <div className="hidden md:grid grid-cols-2 gap-4 h-[80vh]">
        {/* First column of images - scrolling down */}
        <HeroImageColumn 
          images={images} 
          indices={[0, 2]} 
          scrollRef={scrollRef1} 
          direction="down" 
        />
        
        {/* Second column of images - scrolling up */}
        <HeroImageColumn 
          images={images} 
          indices={[1, 3]} 
          scrollRef={scrollRef2} 
          direction="up" 
        />
      </div>

      {/* Mobile carousel for small screens */}
      <HeroMobileCarousel images={images} />
    </>
  );
};

export default HeroImageGrid;
