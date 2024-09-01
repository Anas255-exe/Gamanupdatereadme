import React, { useState, useEffect } from 'react';
import './../css/Carousel.css';

export default function Carousel({ images, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, interval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <button className="carousel-btn prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
