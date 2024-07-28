import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import image1 from "../../assets/images/landing-feature-img1.jpeg";
import image2 from "../../assets/images/landing-feature-img2.jpeg";
import image3 from "../../assets/images/landing-feature-img3.jpeg";
import image4 from "../../assets/images/landing-feature-img4.jpeg";

const featuresArr = [
  [
    {
      name: "Trial to Practice",
      image: image1,
      url: "#",
      content: "We offer expert online courses in musical instruments.",
    },
    {
      name: "Adaptive Learning",
      image: image2,
      url: "#",
      content: "Our courses adapt to your learning style and pace.",
    },
    {
      name: "Digital Tools",
      image: image3,
      url: "#",
      content: "Explore a range of digital tools to enhance your practice.",
    },
  ],
  [
    {
      name: "Advanced Tutorials",
      image: image2,
      url: "#",
      content: "In-depth tutorials for advanced learners.",
    },
    {
      name: "Personalized Feedback",
      image: image3,
      url: "#",
      content: "Receive feedback tailored to your progress.",
    },
    {
      name: "Expert Instructors",
      image: image4,
      url: "#",
      content: "Learn from industry-leading experts.",
    },
  ],
];

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < featuresArr.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="min-h-[80%] h-auto w-full relative z-20 -mt-24">
      <h2 className="text-white text-2xl md:text-5xl text-center font-medium  mb-14">
        Discover our Top Features
      </h2>
      <div className="relative min-h-96 w-full flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#54147092] to-black">
        <div className="flex flex-col lg:flex-row px-10 h-full w-full items-center gap-5">
          {featuresArr[currentIndex].map((feature, index) => (
            <div
              key={index}
              className=" w-full h-full flex flex-col lg:flex-row gap-3 items-center text-center"
            >
              <div className="rounded-full w-32 h32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 aspect-square overflow-hidden bg-opacity-10 container">
                <img
                  className=" w-full h-full object-cover object-center"
                  src={feature.image}
                  alt={feature.name}
                />
              </div>
              <div className="text-white lg:max-w-56">
                <h2 className="font-medium md:text-xl lg:text-2xl mb-3 text-center lg:text-start">
                  {feature.name}
                </h2>
                <p className="text-sm lg:text-lg font-thin text-center lg:text-start">
                  {feature.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-7 text-white text-4xl mt-7">
          <FaArrowLeft
            onClick={handlePrevious}
            className={`${currentIndex === 0 ? "text-gray-500" : "text-white cursor-pointer"}`}
          />
          <FaArrowRight
            onClick={handleNext}
            className={`${currentIndex === featuresArr.length - 1 ? "text-gray-500" : "text-white cursor-pointer"}`}
          />
        </div>
      </div>
    </section>
  );
}
