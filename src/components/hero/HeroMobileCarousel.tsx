
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';

interface HeroMobileCarouselProps {
  images: string[];
}

const HeroMobileCarousel = ({ images }: HeroMobileCarouselProps) => {
  return (
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
  );
};

export default HeroMobileCarousel;
