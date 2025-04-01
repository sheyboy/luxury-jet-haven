
import React, { RefObject } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface HeroImageColumnProps {
  images: string[];
  indices: number[];
  scrollRef: RefObject<HTMLDivElement>;
  direction: 'up' | 'down';
}

const HeroImageColumn = ({ 
  images, 
  indices, 
  scrollRef, 
  direction 
}: HeroImageColumnProps) => {
  return (
    <div className="space-y-4 h-full overflow-hidden">
      <ScrollArea 
        ref={scrollRef} 
        className="h-full overflow-hidden rounded-lg scrollbar-hide"
      >
        <div className="space-y-4 pr-4 pb-4">
          {indices.map((index) => (
            <div 
              key={`img-${direction}-${index}`}
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
          {indices.map((index) => (
            <div 
              key={`img-${direction}-dup-${index}`}
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
  );
};

export default HeroImageColumn;
