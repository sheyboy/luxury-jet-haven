
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroContentSection = () => {
  return (
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
  );
};

export default HeroContentSection;
