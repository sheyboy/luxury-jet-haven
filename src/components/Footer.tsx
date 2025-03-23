
import React from 'react';
import { PhoneCall, Mail, MapPin, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-jet-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">JetSett</h3>
            <p className="text-jet-200 mb-6">
              Redefining luxury aviation with personalized charter services and concierge solutions for discerning travelers worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-jet-800 flex items-center justify-center hover:bg-gold-600 transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-jet-800 flex items-center justify-center hover:bg-gold-600 transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-jet-800 flex items-center justify-center hover:bg-gold-600 transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-jet-800 flex items-center justify-center hover:bg-gold-600 transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-jet-200 hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="/fleet" className="text-jet-200 hover:text-white transition-colors duration-300">Our Fleet</a>
              </li>
              <li>
                <a href="/destinations" className="text-jet-200 hover:text-white transition-colors duration-300">Destinations</a>
              </li>
              <li>
                <a href="/membership" className="text-jet-200 hover:text-white transition-colors duration-300">Membership</a>
              </li>
              <li>
                <a href="/concierge" className="text-jet-200 hover:text-white transition-colors duration-300">Concierge Services</a>
              </li>
              <li>
                <a href="/book-now" className="text-jet-200 hover:text-white transition-colors duration-300">Book a Flight</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneCall size={18} className="mr-3 mt-1 text-gold-500" />
                <div>
                  <p className="text-white">+1 234 567 8900</p>
                  <p className="text-jet-300 text-sm">24/7 Support</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-gold-500" />
                <div>
                  <p className="text-white">contact@jetsett.com</p>
                  <p className="text-jet-300 text-sm">For inquiries</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-gold-500" />
                <div>
                  <p className="text-white">Global Headquarters</p>
                  <p className="text-jet-300 text-sm">1234 Aviation Blvd, Suite 500</p>
                  <p className="text-jet-300 text-sm">New York, NY 10001</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Newsletter</h4>
            <p className="text-jet-200 mb-4">
              Subscribe to receive exclusive offers, news and updates.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-jet-800 border border-jet-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button 
                type="submit" 
                className="w-full bg-gold-600 text-white px-4 py-2 rounded-md hover:bg-gold-500 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-jet-400 text-xs mt-3">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
        
        <div className="border-t border-jet-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-jet-400 text-sm">
              &copy; {new Date().getFullYear()} JetSett. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-jet-300 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-jet-300 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-jet-300 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
