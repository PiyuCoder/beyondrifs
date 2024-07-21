import React from "react";
import trialPractice from "../../assets/images/adaptive-learning.png";
import musicTools from "../../assets/images/music-tools.png";
import adaptiveLearn from "../../assets/images/trial-practice.png";

const featuresArr = [
  {
    name: "Trial to Practice",
    image: trialPractice,
    url: "#",
    content: "We offers expert online courses in musical instruments, ",
  },
  {
    name: "Adaptive Learning",
    image: adaptiveLearn,
    url: "#",
    content: "We offers expert online courses in musical instruments, ",
  },
  {
    name: "Digital tools",
    image: musicTools,
    url: "#",
    content: "We offers expert online courses in musical instruments, ",
  },
];

export default function Features() {
  return (
    <section className=" min-h-[80%] h-auto z-0  w-full mt-20 bg-custom-gradient-bpb-v opacity-80 ">
      <div className="relative w-full flex flex-col justify-center items-center">
        <h2 className="text-white text-2xl md:text-5xl font-medium">
          Discover our Top Features
        </h2>
        <div className=" flex flex-col lg:flex-row mt-10 md:mt-20 xl:mt-36 px-10 h-full items-center gap-5">
          {featuresArr?.map((feature, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col lg:flex-row gap-3 items-center text-center"
            >
              <img
                className=" rounded-full w-28 h-28 lg:w-auto lg:h-auto  bg-opacity-10"
                src={feature.image}
              />
              <div className=" text-white">
                <h2 className=" font-medium md:text-xl lg:text-2xl mb-3 text-center lg:text-start">
                  {feature.name}
                </h2>
                <p className=" text-sm lg:text-lg font-thin text-center lg:text-start">
                  {feature.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
