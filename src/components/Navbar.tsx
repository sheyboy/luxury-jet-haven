
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-100/80 shadow-md backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/68a49603-00a2-430e-97c1-da80f0e1c44d.png" 
              alt="JetSett Logo" 
              className="h-15 transition-all duration-300"
              style={{ height: "15rem" }}
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-transparent hover:opacity-80 transition-opacity"
                >
                  <span>Services</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-dark-100/90 backdrop-blur-md border-neutral-700 text-white">
                <DropdownMenuItem asChild>
                  <Link to="/private-jets" className="hover:bg-dark-50">Private Jets</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/concierge" className="hover:bg-dark-50">Concierge</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/membership" className="hover:bg-dark-50">Membership</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" asChild className="text-white hover:bg-transparent hover:opacity-80 transition-opacity">
              <Link to="/about">About Us</Link>
            </Button>
            
            <Button variant="ghost" asChild className="text-white hover:bg-transparent hover:opacity-80 transition-opacity">
              <Link to="/fleet">Our Fleet</Link>
            </Button>
            
            <Button variant="ghost" asChild className="text-white hover:bg-transparent hover:opacity-80 transition-opacity">
              <Link to="/destinations">Destinations</Link>
            </Button>
            
            <Button variant="ghost" asChild className="text-white hover:bg-transparent hover:opacity-80 transition-opacity">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+12345678900" 
              className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity duration-300"
            >
              <Phone size={16} />
              <span>+1 234 567 8900</span>
            </a>
            <Button 
              className="bg-teal-500 hover:bg-teal-600"
              asChild
            >
              <a href="/book-now">Book Now</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost"
              className="text-white p-2" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-dark-100 shadow-xl animate-fade-in`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Button variant="ghost" asChild className="w-full justify-start text-white hover:bg-dark-50">
            <Link to="/private-jets">Private Jets</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start text-white hover:bg-dark-50">
            <Link to="/concierge">Concierge</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start text-white hover:bg-dark-50">
            <Link to="/membership">Membership</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start text-white hover:bg-dark-50">
            <Link to="/about">About Us</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start text-white hover:bg-dark-50">
            <Link to="/fleet">Our Fleet</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start text-white hover:bg-dark-50">
            <Link to="/destinations">Destinations</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start text-white hover:bg-dark-50">
            <Link to="/contact">Contact</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start text-white hover:bg-dark-50">
            <a href="tel:+12345678900" className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+1 234 567 8900</span>
            </a>
          </Button>
          <Button className="bg-teal-500 hover:bg-teal-600 w-full text-center mt-2" asChild>
            <a href="/book-now">Book Now</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
