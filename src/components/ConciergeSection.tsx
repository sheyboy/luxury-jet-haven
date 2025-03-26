
import React from 'react';
import { Clock, UserCheck, Star, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConciergeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-jet-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="subtle-chip mb-4 animate-fade-in">Premium Services</div>
            <h2 className="text-3xl md:text-4xl font-light text-jet-900 mb-4 animate-fade-up">
              Concierge <span className="font-semibold">Services</span>
            </h2>
            <p className="text-jet-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
              Experience travel beyond expectations with our bespoke concierge services, curated to elevate every aspect of your journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:translate-y-[-5px] animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="h-64 bg-jet-900 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury Accommodation" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-jet-900/90 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">Luxury Accommodations</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-[#487B8E] mb-4">
                  <Star size={18} />
                  <Star size={18} />
                  <Star size={18} />
                  <Star size={18} />
                  <Star size={18} />
                </div>
                <p className="text-jet-700 mb-6">
                  Access to exclusive properties, premium hotel suites, and private villas worldwide. Our partnerships ensure preferential rates and VIP treatment for our clients.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-jet-500 text-sm">
                    <Clock size={16} className="mr-1" />
                    <span>Available 24/7</span>
                  </div>
                  <a href="/concierge" className="text-[#487B8E] hover:text-[#3A6A7D] font-medium flex items-center transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:translate-y-[-5px] animate-fade-up" style={{ animationDelay: '300ms' }}>
              <div className="h-64 bg-jet-900 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Fine Dining" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-jet-900/90 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">Fine Dining Reservations</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-[#487B8E] mb-4">
                  <Star size={18} />
                  <Star size={18} />
                  <Star size={18} />
                  <Star size={18} />
                  <Star size={18} />
                </div>
                <p className="text-jet-700 mb-6">
                  Secure tables at the world's most exclusive restaurants. Our concierge team arranges last-minute bookings and special arrangements at Michelin-starred establishments.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-jet-500 text-sm">
                    <UserCheck size={16} className="mr-1" />
                    <span>Personal preference tracking</span>
                  </div>
                  <a href="/concierge" className="text-[#487B8E] hover:text-[#3A6A7D] font-medium flex items-center transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-jet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={24} className="text-jet-800" />
                </div>
                <h3 className="text-lg font-medium text-jet-900 mb-2">24/7 Availability</h3>
                <p className="text-jet-600 text-sm">Round-the-clock support wherever you are in the world</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-jet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck size={24} className="text-jet-800" />
                </div>
                <h3 className="text-lg font-medium text-jet-900 mb-2">Dedicated Manager</h3>
                <p className="text-jet-600 text-sm">Personal concierge manager assigned to each client</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-jet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={24} className="text-jet-800" />
                </div>
                <h3 className="text-lg font-medium text-jet-900 mb-2">VIP Treatment</h3>
                <p className="text-jet-600 text-sm">Exclusive access and premium upgrades at every destination</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-jet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={24} className="text-jet-800" />
                </div>
                <h3 className="text-lg font-medium text-jet-900 mb-2">Privacy Guaranteed</h3>
                <p className="text-jet-600 text-sm">Discreet service with highest level of confidentiality</p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Button variant="teal" asChild>
                <a href="/concierge">
                  Explore All Concierge Services
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConciergeSection;
