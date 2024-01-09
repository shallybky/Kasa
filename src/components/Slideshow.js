import '../styles/slideshow.css';
import React, { useState } from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

function Slideshow({ slides }) {

  const [current, setCurrent] = useState(0);
  const length = slides.length;
  let showArrows = false;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log("nextSlide", current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log("prevSlide", current);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  if (slides.length > 1) {
    showArrows = true;
  }

  return (
    <section className='slider'>
      {showArrows && (
        <div>
          <img src={arrowLeft} alt="arrow-left" className='left-arrow' onClick={prevSlide} />
          <img src={arrowRight} alt="arrow-right" className='right-arrow' onClick={nextSlide} />
        </div>
      )}
      <div className='slide-number'>{current + 1} / {length}</div>
      {slides.map((slide, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (
            <>
              <img src={slide} alt='travel image' className='image' />
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default Slideshow;