
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BookingSection from '../components/BookingSection';
import ContactOptions from '../components/ContactOptions';
import LocationSelector from '../components/LocationSelector';
import ConciergeSection from '../components/ConciergeSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BookingSection />
      <ConciergeSection />
      <LocationSelector />
      <ContactOptions />
      <Footer />
    </div>
  );
};

export default Index;
