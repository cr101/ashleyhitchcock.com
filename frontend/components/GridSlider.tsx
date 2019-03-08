import React, { useEffect, useState, useRef } from 'react';
import { tns } from 'tiny-slider/src/tiny-slider.module';
import 'tiny-slider/dist/tiny-slider.css';
import styled from 'styled-components';
import media from './styles/media';

const settings = {
  lazyload: false,
  nav: false,
  mouseDrag: true,
  responsive: {
    768: {
      edgePadding: 20,
      gutter: 20,
      items: 2,
      disable: true,
    },
  },
};

const GridWSliderWrapper = styled.section`
  ${media.md`
    display: grid;
    width: 100%;
    padding: 0;
    list-style-type: none;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 2rem;
  `}
`;

const GridSliderItem = styled.div`
  padding: 5px;

  ${media.md`
    
    ${props => (props.position ? 'grid-column: span 3;' : '')}
     
    `}
`;

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
    <GridWSliderWrapper ref={sliderContainer}>
      {React.Children.map(children, (child, index) => (
        <GridSliderItem position={index === 0}>
          {React.cloneElement(child, { onClick: () => goToSlide(index) })}
        </GridSliderItem>
      ))}
    </GridWSliderWrapper>
  );
};

export default GridSlider;
