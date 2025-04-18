"use client"
import React, { Component } from "react";
import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <section id="carousel" className="place-content-center">
        <h1 className="my-10 text-center font-bold text-4xl">
        More About Me
        <hr className="w-6 h-1 mx-auto my-4 bg-melon border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-28 place-content-center justify-self-center">
        <div className="flex flex-col relative w-3/5 place-content-center justify-self-center">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />

          <Swipe className="justify-self-center" onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {CarouselData.map((slide, index) => {
              return (
                <div className="justify-self-center">
                  <img
                    src={slide.image}
                    alt="This is a carousel slide"
                    key={index}
                    className={
                      index === this.state.currentSlide
                        ? "block w-full h-auto object-cover rounded-md"
                        : "hidden"
                    }
                    onMouseEnter={() => {
                      this.setState({ paused: true });
                    }}
                    onMouseLeave={() => {
                      this.setState({ paused: false });
                    }}
                  />
                  <div>
                    <p>Hi testing</p>
                  </div>
                </div>
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0">
            {CarouselData.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />
        </div>
        </div>
      </section>
    );
  }
}

export default Carousel;