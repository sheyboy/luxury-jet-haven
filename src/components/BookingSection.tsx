
import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Plane, PlaneTakeoff, PlaneLanding } from 'lucide-react';

const BookingSection = () => {
  const [selectedTab, setSelectedTab] = useState('charter');

  return (
    <section className="py-16 bg-white relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden transform -translate-y-20 animate-fade-up">
            <div className="flex border-b">
              <button
                className={`flex-1 py-4 px-4 text-center font-medium transition-colors duration-300 ${
                  selectedTab === 'charter' ? 'text-jet-800 border-b-2 border-gold-500' : 'text-jet-400 hover:text-jet-600'
                }`}
                onClick={() => setSelectedTab('charter')}
              >
                Charter Flight
              </button>
              <button
                className={`flex-1 py-4 px-4 text-center font-medium transition-colors duration-300 ${
                  selectedTab === 'empty-leg' ? 'text-jet-800 border-b-2 border-gold-500' : 'text-jet-400 hover:text-jet-600'
                }`}
                onClick={() => setSelectedTab('empty-leg')}
              >
                Empty Leg Flights
              </button>
            </div>
            
            <div className="p-6">
              {selectedTab === 'charter' ? (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-jet-700">From</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <PlaneTakeoff size={18} className="text-jet-400" />
                        </div>
                        <input
                          type="text"
                          placeholder="City or Airport"
                          className="pl-10 w-full border border-jet-200 rounded-md py-3 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-jet-700">To</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <PlaneLanding size={18} className="text-jet-400" />
                        </div>
                        <input
                          type="text"
                          placeholder="City or Airport"
                          className="pl-10 w-full border border-jet-200 rounded-md py-3 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-jet-700">Departure Date</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar size={18} className="text-jet-400" />
                        </div>
                        <input
                          type="date"
                          className="pl-10 w-full border border-jet-200 rounded-md py-3 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-jet-700">Return Date</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar size={18} className="text-jet-400" />
                        </div>
                        <input
                          type="date"
                          className="pl-10 w-full border border-jet-200 rounded-md py-3 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-jet-700">Passengers</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Users size={18} className="text-jet-400" />
                        </div>
                        <select
                          className="pl-10 w-full border border-jet-200 rounded-md py-3 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 appearance-none bg-white"
                        >
                          <option value="1">1 Passenger</option>
                          <option value="2">2 Passengers</option>
                          <option value="3">3 Passengers</option>
                          <option value="4">4 Passengers</option>
                          <option value="5">5 Passengers</option>
                          <option value="6">6+ Passengers</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <ChevronDown />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <button className="elegant-button-gold w-full md:w-auto min-w-[200px]">
                      Search Flights
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in">
                  <p className="text-jet-700 text-center">Discover exclusive deals on our empty leg flights. Save up to 75% on private jet travel.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-jet-700">From</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin size={18} className="text-jet-400" />
                        </div>
                        <select
                          className="pl-10 w-full border border-jet-200 rounded-md py-3 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 appearance-none bg-white"
                        >
                          <option value="">All Locations</option>
                          <option value="nyc">New York</option>
                          <option value="lon">London</option>
                          <option value="mia">Miami</option>
                          <option value="la">Los Angeles</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <ChevronDown />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-jet-700">Date Range</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar size={18} className="text-jet-400" />
                        </div>
                        <select
                          className="pl-10 w-full border border-jet-200 rounded-md py-3 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 appearance-none bg-white"
                        >
                          <option value="7">Next 7 days</option>
                          <option value="14">Next 14 days</option>
                          <option value="30">Next 30 days</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <ChevronDown />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-center">
                    <button className="elegant-button-gold w-full md:w-auto min-w-[200px]">
                      View Available Flights
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// This component is used inside BookingSection
const ChevronDown = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="text-jet-400"
  >
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export default BookingSection;
