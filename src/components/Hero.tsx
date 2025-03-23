
import React from 'react';
import VideoBackground from './VideoBackground';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <VideoBackground 
        src="https://storage.googleapis.com/vjsf-b725c.appspot.com/videos/luxury-jet.mp4" 
        opacity={0.8}
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl animate-fade-down">
          <div className="subtle-chip mb-4 animate-fade-in">Premium Aviation Experience</div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight text-shadow-lg">
            Elevate Your <span className="font-semibold">Travel Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed text-shadow">
            Experience unparalleled luxury and efficiency with our premium private jet charter service. Your journey, redefined.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="/book-now" className="elegant-button-gold w-full sm:w-auto flex items-center justify-center space-x-2 animate-fade-up">
              <span>Book Your Flight</span>
              <ArrowRight size={16} />
            </a>
            <a href="/fleet" className="px-6 py-3 bg-transparent border border-white text-white hover:bg-white/10 transition-all duration-300 rounded-sm shadow-md w-full sm:w-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
              Explore Our Fleet
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-fade-up" style={{ animationDelay: '400ms' }}>
        <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center cursor-pointer hover:border-white transition-colors duration-300 animate-float">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
