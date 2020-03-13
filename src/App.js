import React from "react";

import BannerContainer from "./BannerContainer";
import ImageListContainer from "./ImageListContainer";

import "./styles.css";

const urls = [
  "https://homepages.cae.wisc.edu/~ece533/images/tulips.png",
  "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
  "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
  "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
  "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
  "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
  "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
  "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
  "https://homepages.cae.wisc.edu/~ece533/images/frymire.png",
  "https://homepages.cae.wisc.edu/~ece533/images/girl.png",
  "https://homepages.cae.wisc.edu/~ece533/images/goldhillss.png"
];

const App = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const performCarousel = React.useCallback(() => {
    if (urls.length - 1 === currentIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  },[currentIndex]);

  React.useEffect(() => {
    const timeInterval = setInterval(() => {
      performCarousel();
    }, 3000);
    return () => clearInterval(timeInterval)
  },[currentIndex, performCarousel]);

  const onPrevButtonHandler = () => {
    if (currentIndex === 0) {
      setCurrentIndex(urls.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <h1>Image Carousel</h1>
      <div
        className={"container"}
        tabIndex="0"
        onKeyDown={event => {
          event.keyCode === 37 && onPrevButtonHandler();
          event.keyCode === 39 && performCarousel();
        }}
      >
        <BannerContainer
          urls={urls}
          currentIndex={currentIndex}
          onNextButtonHandler={() => performCarousel()}
          onPrevButtonHandler={() => onPrevButtonHandler()}
        />
        <ImageListContainer
          urls={urls}
          currentIndex={currentIndex}
          onImageClick={index => {
            setCurrentIndex(index);
          }}
        />
      </div>
    </div>
  );
};

export default App;
