import React from "react";
import { BannerImage } from "./BannerImage";

export const ImageListContainer = ({ urls, currentIndex, onImageClick }) => (
  <div className={"imageListContainer"}>
    {urls.map((url, index) => (
      <div
        onClick={() => onImageClick(index)}
        key={url}
        style={{
          width: `${100 / urls.length}%`,
          border: `${index === currentIndex ? "5px solid black" : "none"}`
        }}
      >
        <BannerImage url={url} />
      </div>
    ))}
  </div>
);

export default ImageListContainer;
