import React from 'react';
import { useBlazeSlider } from 'react-blaze-slider';
import 'blaze-slider/dist/blaze.css';
import ImageGallery from './loadGallery.jsx';
export default function slideShow() {
  const ref = useBlazeSlider({
    all: {
      slidesToShow: 1,
      enableAutoplay: true,
      loop: true
      
    },
  })


  return (
    <div className="App">
      <div className="blaze-slider" ref={ref}>
        <div className="blaze-container">
          <div className="blaze-track-container">
            <div className="blaze-track">
              <ImageGallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};