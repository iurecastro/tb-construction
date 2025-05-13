import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <Gallery />
      <ContactForm />
    </div>
  );
};

export default Home;