
import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card';

const ScrollHint = () => {
  return (
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
  );
};

export default ScrollHint;
