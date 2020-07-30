import React from 'react';
import Header from 'views/LandingPage/header.component';
import About from 'views/LandingPage/about.component';
import Services from 'views/LandingPage/services.component';
import Testimonials from './LandingPage/testimonials.component';

function LandingPage() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Testimonials />
    </>
  );
}

export default LandingPage;
