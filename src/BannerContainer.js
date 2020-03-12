import React from "react";
import CarouselButton from "./CarouselButton";
import { BannerImage } from "./BannerImage";

export const BannerContainer = ({
  urls,
  currentIndex,
  onNextButtonHandler,
  onPrevButtonHandler
}) => (
  <div className={"bannerContainer"}>
    <CarouselButton onClick={onPrevButtonHandler}>{"<"}</CarouselButton>
    <div className="bannerImageContainer">
      <BannerImage url={urls[currentIndex]} />
    </div>
    <CarouselButton onClick={onNextButtonHandler}>{">"}</CarouselButton>
  </div>
);

export default BannerContainer;
