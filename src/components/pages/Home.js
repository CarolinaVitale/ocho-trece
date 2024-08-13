import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Animation from '../Animation'
import pic from '../../images/gif.gif'

function Home() {
  return (
    <>
      <HeroSection />
      <Animation imageSrc={pic}
        text='elevate your event with our catering service!' 
        paragraph='discover our exquisite selection of gastronomic options for all types of events. from weddings to corporate gatherings, our personalized catering service ensures an exceptional culinary experience that will delight your guests.' 
        />
    </>
  );
}

export default Home;