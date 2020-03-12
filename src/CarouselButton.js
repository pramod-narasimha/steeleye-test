import React from "react";

export const CarouselButton = props => (
  <button onClick={props.onClick}>{props.children}</button>
);

export default CarouselButton;
