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

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.performCarousel();
    }, 3000);
  }

  performCarousel = () => {
    if (urls.length - 1 === this.state.currentIndex) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  };

  onPrevButtonHandler = () => {
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: urls.length - 1 });
    } else {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    }
  };

  render() {
    return (
      <div>
        <h1>Image Carousel</h1>
        <div
          className={"container"}
          tabIndex="0"
          onKeyDown={event => {
            event.keyCode === 37 && this.onPrevButtonHandler();
            event.keyCode === 39 && this.performCarousel();
          }}
        >
          <BannerContainer
            urls={urls}
            currentIndex={this.state.currentIndex}
            onNextButtonHandler={() => this.performCarousel()}
            onPrevButtonHandler={() => this.onPrevButtonHandler()}
          />
          <ImageListContainer
            urls={urls}
            currentIndex={this.state.currentIndex}
            onImageClick={index => {
              this.setState({ currentIndex: index });
            }}
          />
        </div>
      </div>
    );
  }
}
