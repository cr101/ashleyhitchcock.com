import React from 'react';

interface IHeroProps {
  title: string;
  linkTo: string;
}
const Hero = (props: IHeroProps) => (
  <div className="knockout">
    <svg className="knockout__text-container" width="100%" height="100%">
      <rect
        className="knockout__text-bg"
        width="100%"
        height="100%"
        fill="#fff"
        x="0"
        y="0"
        fillOpacity="a1"
        mask="url(#knockout-text)"
      />
      <mask id="knockout-text">
        <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
        <text x="50%" y="50%" fill="#000" textAnchor="middle">
          {props.title ? props.title : 'Hello!'}
        </text>
      </mask>
    </svg>

    {props.linkTo ? (
      <button type="button" className="knockout__more">
        <svg
          className="knockout__more__icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          viewBox="0 0 129 129"
          enableBackground="new 0 0 129 129"
          width="512px"
          height="512px"
        >
          <g>
            <path
              d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
              fill="#FFFFFF"
            />
          </g>
        </svg>
      </button>
    ) : null}
  </div>
);

export default Hero;
