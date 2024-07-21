import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import pic1 from "../../assets/images/about-carousel-1.png";
import pic2 from "../../assets/images/about-carousel-2.png";
import pic3 from "../../assets/images/about-carousel-3.png";
import pic4 from "../../assets/images/about-carousel-4.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, content: pic1 },
    { id: 2, content: pic2 },
    { id: 3, content: pic3 },
    { id: 4, content: pic4 },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const { transform } = useSpring({
    transform: `translateX(-${currentIndex * 100}%)`,
    config: { tension: 280, friction: 30 },
  });

  return (
    <div className="w-full min-h-full flex flex-col items-center lg:p-20 relative">
      <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
        Our{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
          Team Members
        </span>
      </h1>
      <div className="overflow-hidden w-full h-[480px] relative mt-16">
        <div className="flex w-full h-full">
          <animated.div
            className="flex w-full h-full"
            style={{
              transform,
              width: `${items.length * 100}%`,
              display: "flex",
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-full h-full px-10 flex items-center justify-center"
                style={{ flexBasis: "100%" }}
              >
                <div className="w-full h-full flex items-center justify-center rounded-3xl overflow-hidden">
                  <img
                    className="object-cover object-center h-full w-full"
                    src={item.content}
                    alt={`Slide ${item.id}`}
                  />
                </div>
              </div>
            ))}
          </animated.div>
        </div>
      </div>
      <p className=" text-white text-center mt-4 px-5 tracking-wider leading-relaxed text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>
      <div className="flex justify-center gap-4 mt-8">
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-gray-700"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-gray-700"
          onClick={nextSlide}
          disabled={currentIndex === items.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
