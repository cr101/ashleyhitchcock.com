import React from "react";
import TinySlider from "tiny-slider-react";

import Card from "./Card";

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 2,
      disable: true
    }
  }
};

const Grid = ({ cards, linkType }) => (
  <TinySlider settings={settings}>
    {!!cards && cards.length
      ? cards.map((card, index) => (
          <div key={index}>
            <Card {...card.node} linkType={linkType} />
          </div>
        ))
      : null}
  </TinySlider>
);

export default Grid;
