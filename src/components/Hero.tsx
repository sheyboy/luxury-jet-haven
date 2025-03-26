
import React from 'react';
import VideoBackground from './VideoBackground';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <VideoBackground 
        src="https://storage.googleapis.com/vjsf-b725c.appspot.com/videos/luxury-jet.mp4" 
        opacity={0.7}
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl animate-fade-down">
          <img 
            src="/lovable-uploads/68a49603-00a2-430e-97c1-da80f0e1c44d.png" 
            alt="JetSett Logo" 
            className="h-12 mx-auto mb-8 animate-fade-in"
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
              className="bg-teal-500 hover:bg-teal-600 w-full sm:w-auto flex items-center justify-center space-x-2 animate-fade-up"
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
