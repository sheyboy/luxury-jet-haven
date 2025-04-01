
import React from 'react';
import VideoBackground from './VideoBackground';
import HeroContentSection from './hero/HeroContentSection';
import HeroImageGrid from './hero/HeroImageGrid';
import ScrollHint from './hero/ScrollHint';

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1599779406495-efc209043dbb?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1637333354607-a27177328b9c?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1920&auto=format&fit=crop"
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <VideoBackground 
        src="https://storage.googleapis.com/vjsf-b725c.appspot.com/videos/luxury-jet.mp4" 
        opacity={0.7}
      />
      
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-7xl w-full h-full py-16 animate-fade-down">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* Left column - Text content */}
            <HeroContentSection />
            
            {/* Right column - Image grid with scrolling images */}
            <HeroImageGrid images={images} />
          </div>
        </div>
      </div>
      
      <ScrollHint />
    </div>
  );
};

export default Hero;
