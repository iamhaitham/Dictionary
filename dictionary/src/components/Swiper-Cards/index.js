import './index.css';
import React from 'react'
import { Slide } from 'react-slideshow-image';
import ImageSection from './functionalty/ImageSection';
const Swiper_Cards = () => {
  return (
    <div className='Container'>
      <div className='SecondContainer'>
          <ImageSection />
      </div>
    </div>
  );
}

export default Swiper_Cards;
