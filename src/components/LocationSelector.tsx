
import React, { useState } from 'react';
import { MapPin, Globe, Search } from 'lucide-react';

const airports = [
  { id: 1, code: 'JFK', name: 'John F. Kennedy International', city: 'New York', country: 'USA' },
  { id: 2, code: 'LHR', name: 'Heathrow Airport', city: 'London', country: 'UK' },
  { id: 3, code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France' },
  { id: 4, code: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'UAE' },
  { id: 5, code: 'LAX', name: 'Los Angeles International', city: 'Los Angeles', country: 'USA' },
  { id: 6, code: 'HND', name: 'Haneda Airport', city: 'Tokyo', country: 'Japan' },
];

const regions = [
  { id: 'na', name: 'North America', airports: [1, 5] },
  { id: 'eu', name: 'Europe', airports: [2, 3] },
  { id: 'me', name: 'Middle East', airports: [4] },
  { id: 'as', name: 'Asia', airports: [6] },
];

const LocationSelector = () => {
  const [activeRegion, setActiveRegion] = useState('na');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredAirports = searchTerm 
    ? airports.filter(airport => 
        airport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        airport.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        airport.code.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : regions.find(region => region.id === activeRegion)?.airports.map(id => airports.find(airport => airport.id === id)) || [];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="subtle-chip mb-4 animate-fade-in">Global Presence</div>
            <h2 className="text-3xl md:text-4xl font-light text-jet-900 mb-4 animate-fade-up">
              Our <span className="font-semibold">Locations</span>
            </h2>
            <p className="text-jet-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
              JetSett operates across major aviation hubs worldwide, ensuring seamless travel experiences no matter your destination.
            </p>
          </div>
          
          <div className="bg-jet-50 rounded-lg p-6 shadow-md animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex items-center space-x-2 text-jet-800 mb-4 md:mb-0">
                <Globe size={20} className="text-[#487B8E]" />
                <span className="font-medium">Select Region</span>
              </div>
              
              <div className="relative flex-grow max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search size={18} className="text-jet-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search airports..."
                  className="pl-10 w-full border border-jet-200 rounded-md py-2 focus:ring-2 focus:ring-[#487B8E] focus:border-transparent transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {!searchTerm && (
              <div className="flex flex-wrap gap-2 mb-6">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                      activeRegion === region.id
                        ? 'bg-[#487B8E] text-white'
                        : 'bg-white text-jet-700 hover:bg-jet-100'
                    }`}
                    onClick={() => setActiveRegion(region.id)}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAirports.map((airport) => (
                <div 
                  key={airport?.id} 
                  className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <MapPin size={18} className="text-[#487B8E]" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="text-jet-900 font-semibold">{airport?.code}</span>
                        <span className="mx-2 text-jet-400">•</span>
                        <span className="text-jet-700">{airport?.city}</span>
                      </div>
                      <h3 className="text-jet-800 font-medium">{airport?.name}</h3>
                      <p className="text-jet-500 text-sm">{airport?.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/destinations" className="text-[#487B8E] hover:text-[#3A6A7D] transition-colors duration-300 underline-offset-2 hover:underline">
              View All Destinations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSelector;
