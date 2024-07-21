import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import girlViolin from "../../assets/images/girl-violin.png";
import { FaArrowRight } from "react-icons/fa6";

const Carousel3D = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(2);
  const [animationConfig] = useState(config.gentle);

  const carouselRef = useRef(null);
  const autoplayRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);

  const slides = [
    {
      key: uuidv4(),
      content: (
        <div className="flex flex-col justify-center text-white bg-gradient-to-b from-purple-950 to-purple-500 items-center py-7 h-60 sm:h-96 w-60 sm:w-96 rounded-xl">
          <div className=" w-10 h-10 sm:h-32 sm:w-32 rounded-full bg-white overflow-hidden sm:p-3 sm:mb-5">
            <img className="h-full w-full" src={girlViolin} alt="1" />
          </div>
          <p className="text-center text-lg sm:text-3xl font-medium sm:mb-5">
            Piyush
          </p>
          <p className="font-thin text-sm sm:text-xl sm:mb-5">State</p>
          <p className="text-center px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="flex flex-col justify-center text-white bg-gradient-to-b from-purple-950 to-purple-500 items-center py-7 h-60 sm:h-96 w-60 sm:w-96 rounded-xl">
          <div className=" w-10 h-10 sm:h-32 sm:w-32 rounded-full bg-white overflow-hidden sm:p-3 sm:mb-5">
            <img className="h-full w-full" src={girlViolin} alt="1" />
          </div>
          <p className="text-center text-lg sm:text-3xl font-medium sm:mb-5">
            Piyush
          </p>
          <p className="font-thin text-sm sm:text-xl sm:mb-5">State</p>
          <p className="text-center px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="flex flex-col justify-center text-white bg-gradient-to-b from-purple-950 to-purple-500 items-center py-7 h-60 sm:h-96 w-60 sm:w-96 rounded-xl">
          <div className=" w-10 h-10 sm:h-32 sm:w-32 rounded-full bg-white overflow-hidden sm:p-3 sm:mb-5">
            <img className="h-full w-full" src={girlViolin} alt="1" />
          </div>
          <p className="text-center text-lg sm:text-3xl font-medium sm:mb-5">
            Piyush
          </p>
          <p className="font-thin text-sm sm:text-xl sm:mb-5">State</p>
          <p className="text-center px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="flex flex-col justify-center text-white bg-gradient-to-b from-purple-950 to-purple-500 items-center py-7 h-60 sm:h-96 w-60 sm:w-96 rounded-xl">
          <div className=" w-10 h-10 sm:h-32 sm:w-32 rounded-full bg-white overflow-hidden sm:p-3 sm:mb-5">
            <img className="h-full w-full" src={girlViolin} alt="1" />
          </div>
          <p className="text-center text-lg sm:text-3xl font-medium sm:mb-5">
            Piyush
          </p>
          <p className="font-thin text-sm sm:text-xl sm:mb-5">State</p>
          <p className="text-center px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="flex flex-col justify-center text-white bg-gradient-to-b from-purple-950 to-purple-500 items-center py-7 h-60 sm:h-96 w-60 sm:w-96 rounded-xl">
          <div className=" w-10 h-10 sm:h-32 sm:w-32 rounded-full bg-white overflow-hidden sm:p-3 sm:mb-5">
            <img className="h-full w-full" src={girlViolin} alt="1" />
          </div>
          <p className="text-center text-lg sm:text-3xl font-medium sm:mb-5">
            Piyush
          </p>
          <p className="font-thin text-sm sm:text-xl sm:mb-5">State</p>
          <p className="text-center px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="flex flex-col justify-center text-white bg-gradient-to-b from-purple-950 to-purple-500 items-center py-7 h-60 sm:h-96 w-60 sm:w-96 rounded-xl">
          <div className=" w-10 h-10 sm:h-32 sm:w-32 rounded-full bg-white overflow-hidden sm:p-3 sm:mb-5">
            <img className="h-full w-full" src={girlViolin} alt="1" />
          </div>
          <p className="text-center text-lg sm:text-3xl font-medium sm:mb-5">
            Piyush
          </p>
          <p className="font-thin text-sm sm:text-xl sm:mb-5">State</p>
          <p className="text-center px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
      ),
    },
  ];

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartPosition(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const currentPosition = e.clientX;
      const diff = startPosition - currentPosition;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swiped left, move to next slide or loop to first slide
          setGoToSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
        } else {
          // Swiped right, move to previous slide or loop to last slide
          setGoToSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
        }
        setDragging(false); // Reset dragging state
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const startAutoplay = () => {
    if (!autoplayRef.current) {
      autoplayRef.current = setInterval(() => {
        setGoToSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
      }, 2000); // Change slides every 2 seconds
    }
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const handleTouchOutside = (e) => {
    if (e.target !== carouselRef.current) {
      startAutoplay();
    }
  };

  useEffect(() => {
    document.addEventListener("touchstart", handleTouchOutside);
    startAutoplay();
    return () => {
      stopAutoplay();
      document.removeEventListener("touchstart", handleTouchOutside);
    };
  }, [slides.length]);

  return (
    <section className=" select-none w-full h-auto min-h-full text-center py-20 pb-20">
      <h1 className=" text-2xl md:text-5xl font-medium text-white mb-5 md:mb-16 lg:mb-28">
        Testimonials
      </h1>
      <div
        className="select-none w-[80%] h-[300px] mx-auto"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={(e) => setStartPosition(e.touches[0].clientX)}
        onTouchMove={(e) => {
          const currentPosition = e.touches[0].clientX;
          const diff = startPosition - currentPosition;
          if (Math.abs(diff) > 5) {
            if (diff > 0) {
              // Swiped left, move to next slide or loop to first slide
              setGoToSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
            } else {
              // Swiped right, move to previous slide or loop to last slide
              setGoToSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
            }
            setDragging(false); // Reset dragging state
          }
        }}
        onTouchEnd={() => setDragging(false)}
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <Carousel
          ref={carouselRef}
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          animationConfig={animationConfig}
        />
        <div className=" w-1/2 mx-auto mt-5 md:mt-7 lg:mt-20 flex justify-center">
          <div className="text-white">
            {/* <button
              onClick={() =>
                setGoToSlide((prev) =>
                  prev > 0 ? prev - 1 : slides.length - 1
                )
              }
            >
              Left Arrow
            </button> */}
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button
              className=" text-3xl font-bold"
              onClick={() =>
                setGoToSlide((prev) =>
                  prev < slides.length - 1 ? prev + 1 : 0
                )
              }
            >
              Scroll <FaArrowRight className=" inline" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel3D;
