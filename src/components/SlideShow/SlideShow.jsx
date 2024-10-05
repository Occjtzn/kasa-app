import React, { useState } from 'react';
import './styles/slide_show.scss';
import PrevVector from '../../assets/Svg/PrevVector.svg';
import NextVector from '../../assets/Svg/NextVector.svg';

export const SlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="slide-show">
      {totalImages > 1 && (
        <button className="prev-button" onClick={prevSlide}>
          <img src={PrevVector} alt="Previous" className="previous-icon" />
        </button>
      )}
      <img
        className="slide-show-img"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
      {totalImages > 1 && (
        <button className="next-button" onClick={nextSlide}>
          <img src={NextVector} alt="Next" className="next-icon" />
        </button>
      )}
      {totalImages > 1 && (
        <div className="slide-count">
          {currentIndex + 1} / {totalImages}
        </div>
      )}
    </div>
  );
};
