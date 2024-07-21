import React, { useEffect, useState } from "react";
import piano from "../../assets/images/piano.png";
import acoustic from "../../assets/images/acoustic.png";
import vocal from "../../assets/images/vocal.png";
import recording from "../../assets/images/recording.png";
import eGuitar from "../../assets/images/e-guitar.png";
import "react-fancy-circular-carousel/FancyCarousel.css";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";

// Images
const images = [
  { image: acoustic, name: "Ukulele" },
  { image: vocal, name: "Vocals" },
  { image: piano, name: "Piano" },
  { image: recording, name: "Music Production" },
  { image: eGuitar, name: "Guitar" },
  { image: acoustic, name: "Ukulele" },
  { image: vocal, name: "Vocals" },
  { image: piano, name: "Piano" },
  { image: recording, name: "Music Production" },
  { image: eGuitar, name: "Guitar" },
];

const CircleCarousel = () => {
  const [rotationAngle, setRotationAngle] = useState(-70);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  const checkMobileScreen = () => {
    setIsMobile(window.innerWidth <= 1022); // Adjust the breakpoint as needed
  };

  // Run the check on component mount and on window resize
  useEffect(() => {
    checkMobileScreen();
    window.addEventListener("resize", checkMobileScreen);
    return () => {
      window.removeEventListener("resize", checkMobileScreen);
    };
  }, []);

  const itemPosition = isMobile ? 250 : 500;

  const next = () => {
    setRotationAngle((prevAngle) => prevAngle - 360 / images.length); // Adjusted to rotate only half of the circle
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prev = () => {
    setRotationAngle((prevAngle) => prevAngle + 360 / images.length); // Adjusted to rotate only half of the circle
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const angle = 360 / images.length; // Adjusted to distribute items on half of the circle

  return (
    <section className="bg-opacity-5 relative text-center py-36 overflow-hidden bg-purple-500 border-2 border-purple-500 border-opacity-65 shadow-[0_0px_250px_5px_rgba(1,1,1,0.3)] -mt-36 shadow-purple-600 rounded-t-full w-[190%] h-[130%] lg:h-[200%] -ml-[45%]">
      <h1 className="text-2xl md:text-5xl text-white font-medium ">
        Unlock Music Mastery <br /> with{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
          Our Courses
        </span>
      </h1>
      <div className="w-screen flex  mx-auto h-full items-end lg:items-center justify-center md:justify-start  py-10 lg:gap-36">
        <div className=" p-6 rounded-xl w-full md:w-3/5 z-10 bg-black md:bg-transparent bg-opacity-30  backdrop-blur-sm md:backdrop-blur-0">
          <div className="text-white lg:px-28 text-start ">
            <h1 className="text-3xl font-medium lg:mb-8 transition-all ease-linear duration-1000">
              {images[currentIndex].name}
            </h1>
            <p className="font-thin tracking-wide text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex items-center justify-between lg:mt-20">
              <button
                className="text-white text-xl flex items-center gap-3 hover:bg-stone-900 hover:text-purple-500 p-4 active:bg-opacity-10 active:scale-105 transition-all ease-in-out duration-300 rounded-xl mr-2"
                onClick={prev}
              >
                <IoArrowBackSharp className="inline" />
                Previous
              </button>
              <button
                className="text-white text-xl flex items-center gap-3 hover:bg-stone-900 hover:text-purple-500 p-4 px-8 active:bg-opacity-10 active:scale-105 transition-all ease-in-out duration-300 rounded-xl mr-2"
                onClick={next}
              >
                Next
                <IoArrowForwardSharp className="inline" />
              </button>
            </div>
          </div>
        </div>
        {/* -mr-[400px] sm:-mr-[600px]  md:-mr-[900px] lg:-mr-[500px] */}
        <div className="circle-container absolute w-[500px] -right-20 -mt-10 top-80 md:top-auto sm:right-10 md:right-40 lg:-right-20 xl:right-28  lg:w-[1000px] h-[500px] lg:h-[1000px]   flex items-center justify-center">
          <div
            style={{
              transform: `rotate(${rotationAngle}deg)`,
              transformOrigin: "center",
            }}
            className=" relative w-full h-full flex items-center justify-center transition-all ease-linear duration-700"
          >
            <div className="absolute rounded-full border-[5px] aspect-square border-gray-300 border-opacity-30 w-full h-full" />
            {images.map((image, index) => (
              <div
                key={index}
                className={`circle-item absolute  aspect-square bg-black ${
                  index === currentIndex
                    ? " w-40 h-40 sm:w-40 sm:h-40 lg:w-64 lg:h-64 shadow-[0_0px_40px_px_rgba(1,1,1,0.3)] z-10"
                    : "shadow-[0_0px_2px_1px_rgba(1,1,1,0.1)] w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20"
                } text-white rounded-full flex items-center justify-center shadow-purple-700 transition-all ease-linear duration-1000`}
                style={{
                  transform: `rotate(${
                    angle * index
                  }deg) translate(-${itemPosition}px) rotate(-${
                    angle * index
                  }deg)`,
                }}
              >
                <div
                  className={` ${
                    index === currentIndex ? "" : "text-[5px]"
                  } text-center flex flex-col lg:gap-3`}
                  style={{
                    transform: `rotate(${-rotationAngle}deg)`,
                    transformOrigin: "center",
                  }}
                >
                  <img
                    className={`${
                      index === currentIndex ? "lg:-mt-32 lg:ml-10" : ""
                    }`}
                    src={image.image}
                    alt={`carousel-item-${index}`}
                  />
                  {/* <p className="text-white">{image.name}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircleCarousel;
