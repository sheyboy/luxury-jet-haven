
import React, { useState, useEffect } from 'react';
import VideoBackground from './VideoBackground';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    "/lovable-uploads/68a49603-00a2-430e-97c1-da80f0e1c44d.png",
    "https://images.unsplash.com/photo-1599779406495-efc209043dbb?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1637333354607-a27177328b9c?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1920&auto=format&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <VideoBackground 
        src="https://storage.googleapis.com/vjsf-b725c.appspot.com/videos/luxury-jet.mp4" 
        opacity={0.7}
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="max-w-7xl w-full animate-fade-down">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {/* Left column - 2 images stacked */}
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={images[1]} 
                    alt="Luxury jet interior" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={images[2]} 
                    alt="Private jet" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
            
            {/* Center column - Logo and text */}
            <div className="flex flex-col items-center justify-center text-center">
              <img 
                src={images[0]} 
                alt="JetSett Logo" 
                className="h-18 mx-auto mb-8 animate-fade-in"
                style={{ height: "15rem" }}
              />
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight text-shadow-lg tracking-wider">
                Redefining Travel,<br/> Redefining Luxury
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed text-shadow">
                Fly JetSett – Your Exclusive Experience Awaits
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  asChild
                  variant="teal"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 animate-fade-up"
                >
                  <a href="/book-now">
                    <span>Book Your Flight</span>
                    <ArrowRight size={16} />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  asChild
                  className="bg-transparent border border-white text-white hover:bg-white/10 w-full sm:w-auto animate-fade-up" 
                  style={{ animationDelay: '100ms' }}
                >
                  <a href="/fleet">Explore Our Fleet</a>
                </Button>
              </div>
            </div>
            
            {/* Right column - 2 images stacked */}
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={images[3]} 
                    alt="Luxury service" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={images[4]} 
                    alt="Jet flying" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <HoverCard>
        <HoverCardTrigger asChild>
          <button className="absolute bottom-10 left-0 right-0 mx-auto w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center cursor-pointer hover:border-white transition-colors duration-300 animate-float">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="w-auto p-2 bg-dark-100/90 backdrop-blur-md border-neutral-700 text-white">
          Scroll to discover more
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default Hero;
