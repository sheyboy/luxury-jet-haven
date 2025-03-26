
import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactOptions = () => {
  return (
    <section className="py-16 bg-jet-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="subtle-chip mb-4 animate-fade-in">VIP Communication</div>
          <h2 className="text-3xl md:text-4xl font-light text-jet-900 mb-8 animate-fade-up">
            We're Always <span className="font-semibold">Available</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px] animate-fade-up">
              <div className="w-16 h-16 mx-auto bg-[#487B8E] text-white rounded-full flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-2xl font-medium text-jet-800 mb-3">24/7 Phone Support</h3>
              <p className="text-jet-600 mb-6">Our dedicated team is available around the clock to assist with all your aviation needs.</p>
              <Button variant="teal" asChild className="inline-block">
                <a href="tel:+12345678900">
                  +1 234 567 8900
                </a>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px] animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 mx-auto bg-[#487B8E] text-white rounded-full flex items-center justify-center mb-6">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-2xl font-medium text-jet-800 mb-3">WhatsApp Concierge</h3>
              <p className="text-jet-600 mb-6">Connect with our VIP concierge service instantly via WhatsApp for personalized assistance.</p>
              <Button 
                variant="teal" 
                asChild
                className="inline-block"
              >
                <a 
                  href="https://wa.me/12345678900" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  WhatsApp Connect
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;
