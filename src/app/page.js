import About from '@/components/About';
import Banner from '@/components/Banner';
import Faq from '@/components/Faq';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <About />
      <Faq />
    </div>
  );
};

export default HomePage;