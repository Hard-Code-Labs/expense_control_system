import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Examples from './components/Examples';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const Landing = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Examples />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Landing;
