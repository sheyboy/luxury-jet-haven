
import React, { useEffect, useRef } from 'react';
import VideoBackground from './VideoBackground';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1599779406495-efc209043dbb?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1637333354607-a27177328b9c?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1920&auto=format&fit=crop"
  ];

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
    <div className="relative h-screen w-full overflow-hidden">
      <VideoBackground 
        src="https://storage.googleapis.com/vjsf-b725c.appspot.com/videos/luxury-jet.mp4" 
        opacity={0.7}
      />
      
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-7xl w-full h-full py-16 animate-fade-down">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* Left column - Text content */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight text-shadow-lg tracking-wider">
                  Redefining Travel,<br/> Redefining Luxury
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed text-shadow">
                  Fly JetSett – Your Exclusive Experience Awaits
                </p>
                
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
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
            </div>
            
            {/* Right column - Scrolling images */}
            <div className="hidden md:grid grid-cols-2 gap-4 h-[80vh]">
              {/* First column of images - scrolling down */}
              <div className="space-y-4 h-full overflow-hidden">
                <ScrollArea 
                  ref={scrollRef1} 
                  className="h-full overflow-hidden rounded-lg scrollbar-hide"
                >
                  <div className="space-y-4 pr-4 pb-4">
                    {[0, 2].map((index) => (
                      <div 
                        key={`img-down-${index}`}
                        className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] mb-4"
                      >
                        <img 
                          src={images[index]} 
                          alt={`Luxury jet ${index}`}
                          className="object-cover w-full h-[40vh]"
                        />
                      </div>
                    ))}
                    {/* Duplicate images for continuous scroll */}
                    {[0, 2].map((index) => (
                      <div 
                        key={`img-down-dup-${index}`}
                        className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] mb-4"
                      >
                        <img 
                          src={images[index]} 
                          alt={`Luxury jet ${index}`}
                          className="object-cover w-full h-[40vh]"
                        />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
              
              {/* Second column of images - scrolling up */}
              <div className="space-y-4 h-full overflow-hidden">
                <ScrollArea 
                  ref={scrollRef2}
                  className="h-full overflow-hidden rounded-lg scrollbar-hide"
                >
                  <div className="space-y-4 pr-4 pb-4">
                    {[1, 3].map((index) => (
                      <div 
                        key={`img-up-${index}`}
                        className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] mb-4"
                      >
                        <img 
                          src={images[index]} 
                          alt={`Luxury jet ${index}`}
                          className="object-cover w-full h-[40vh]"
                        />
                      </div>
                    ))}
                    {/* Duplicate images for continuous scroll */}
                    {[1, 3].map((index) => (
                      <div 
                        key={`img-up-dup-${index}`}
                        className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] mb-4"
                      >
                        <img 
                          src={images[index]} 
                          alt={`Luxury jet ${index}`}
                          className="object-cover w-full h-[40vh]"
                        />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>

            {/* Mobile carousel for small screens */}
            <div className="md:hidden w-full">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                          <img
                            src={image}
                            alt={`Luxury jet ${index + 1}`}
                            className="object-cover w-full h-[40vh]"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
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
