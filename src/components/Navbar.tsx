
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

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
              src="/lovable-uploads/0f2bf757-893e-4dfa-aa9d-4d71e739309a.png" 
              alt="JetSett Logo" 
              className="h-10 transition-all duration-300"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 text-white hover:opacity-80 transition-opacity duration-300`}
              >
                <span>Services</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-sm shadow-lg bg-dark-100 ring-1 ring-dark-50 ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <div className="py-1">
                  <Link to="/private-jets" className="block px-4 py-2 text-sm text-white hover:bg-dark-50">Private Jets</Link>
                  <Link to="/concierge" className="block px-4 py-2 text-sm text-white hover:bg-dark-50">Concierge</Link>
                  <Link to="/membership" className="block px-4 py-2 text-sm text-white hover:bg-dark-50">Membership</Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-white hover:opacity-80 transition-opacity duration-300">
              About Us
            </Link>
            <Link to="/fleet" className="text-white hover:opacity-80 transition-opacity duration-300">
              Our Fleet
            </Link>
            <Link to="/destinations" className="text-white hover:opacity-80 transition-opacity duration-300">
              Destinations
            </Link>
            <Link to="/contact" className="text-white hover:opacity-80 transition-opacity duration-300">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+12345678900" 
              className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity duration-300"
            >
              <Phone size={16} />
              <span>+1 234 567 8900</span>
            </a>
            <a 
              href="/book-now" 
              className="elegant-button-gold"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-dark-100 shadow-xl animate-fade-in`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/private-jets" className="block px-4 py-2 text-white hover:bg-dark-50 rounded-sm">Private Jets</Link>
          <Link to="/concierge" className="block px-4 py-2 text-white hover:bg-dark-50 rounded-sm">Concierge</Link>
          <Link to="/membership" className="block px-4 py-2 text-white hover:bg-dark-50 rounded-sm">Membership</Link>
          <Link to="/about" className="block px-4 py-2 text-white hover:bg-dark-50 rounded-sm">About Us</Link>
          <Link to="/fleet" className="block px-4 py-2 text-white hover:bg-dark-50 rounded-sm">Our Fleet</Link>
          <Link to="/destinations" className="block px-4 py-2 text-white hover:bg-dark-50 rounded-sm">Destinations</Link>
          <Link to="/contact" className="block px-4 py-2 text-white hover:bg-dark-50 rounded-sm">Contact</Link>
          <a href="tel:+12345678900" className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-dark-50 rounded-sm">
            <Phone size={16} />
            <span>+1 234 567 8900</span>
          </a>
          <a href="/book-now" className="block mx-4 mt-2 elegant-button-gold text-center">
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
