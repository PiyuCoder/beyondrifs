import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import trialPractice from "../../assets/images/adaptive-learning.png";
import musicTools from "../../assets/images/music-tools.png";
import adaptiveLearn from "../../assets/images/trial-practice.png";

const joinUsArr = [
  {
    count: 52000,
    type: "Hours of Live Learning",
  },
  {
    count: 70,
    type: "Qualified Music Tutors",
  },
  {
    count: 100,
    type: "Cities Worldwide",
  },
  {
    count: 50,
    type: "Workshops Conducted",
  },
];

export default function JoinUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="h-auto lg:max-h-[60%] lg:h-full py-10 w-full -mt-[3px] bg-custom-gradient-bpb-v opacity-80 pt-5"
      ref={ref}
    >
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-white text-2xl md:text-4xl font-medium text-center">
          Join Us and excel in your Music Journey
        </h2>
        <div className="flex flex-wrap px-10 items-start text-center mt-10 md:mt-20 gap-7 md:gap-16">
          {joinUsArr?.map((data, index) => (
            <div
              key={index}
              className="flex-1 flex gap-3 flex-col h-full text-white"
            >
              <h1 className="text-white text-xl md:text-4xl font-medium mb-2 md:mb-5">
                {inView && (
                  <CountUp
                    start={0}
                    end={data.count}
                    duration={2.5}
                    separator=","
                  />
                )}
                +
              </h1>
              <p className="font-thin md:text-lg text-sm md:whitespace-nowrap">
                {data.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
