import React, { useEffect, useState, useRef } from 'react';
import { tns } from 'tiny-slider/src/tiny-slider.module';
import 'tiny-slider/dist/tiny-slider.css';

const settings = {
  lazyload: false,
  nav: false,
  mouseDrag: true,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 2,
      disable: true,
    },
  },
};

const GridSlider = ({ children }) => {
  const [slider, setSlider] = useState(null);
  const sliderContainer = useRef(null);

  useEffect(() => {
    const theSlider = tns({
      ...settings,
      container: sliderContainer.current,
    });
    setSlider(theSlider);
  }, []);

  const goToSlide = index => {
    slider.goTo(index);
  };

  return (
    <div ref={sliderContainer}>
      {React.Children.map(children, (child, index) => React.cloneElement(child, { onClick: () => goToSlide(index) }))}
    </div>
  );
};

export default GridSlider;
