import React from "react";
import vector from "../../assets/images/about-vector.png";
import vector1 from "../../assets/images/about-vector1.png";
import vector2 from "../../assets/images/about-vector2.png";
import vector3 from "../../assets/images/about-vector3.png";
import vector4 from "../../assets/images/about-vector4.png";

const featuresArr = [
  {
    name: "Versatile Lesson Planning",
    image: vector,
  },
  {
    name: "Learning at Your Own Pace",
    image: vector1,
  },
  {
    name: "Smart One-on-One Sessions",
    image: vector2,
  },
  {
    name: "Carefully Selected Tune Choices",
    image: vector3,
  },
  {
    name: "Personalized Learning",
    image: vector4,
  },
];

export default function Features() {
  return (
    <section className="min-h-[80%] h-auto w-full mt-20 bg-custom-gradient-bpb-v opacity-70">
      <div className="relative w-full flex flex-col justify-center items-center z-10">
        <h2 className="text-white text-2xl md:text-5xl font-medium mb-32">
          Our key{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
            Features
          </span>
        </h2>
        <div className="max-w-7xl flex flex-wrap justify-center items-center gap-20">
          {featuresArr.map((feature, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex flex-col items-center text-center lg:mx-12 mb-8"
            >
              <img
                className=" w-20 h-20 md:w-40 md:h-40 lg:w-auto lg:h-auto bg-opacity-10"
                src={feature.image}
                alt={feature.name}
              />
              <h2 className="text-white text-lg lg:text-2xl mt-4 font-medium">
                {feature.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
