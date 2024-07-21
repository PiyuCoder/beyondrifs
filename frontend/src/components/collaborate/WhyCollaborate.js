import React from "react";
import image1 from "../../assets/images/collab-image1.png";
import image2 from "../../assets/images/collab-image2.png";
import image3 from "../../assets/images/collab-image3.png";

const featuresArr = [
  {
    name: "Expertise and Experience",
    image: image1,
    url: "#",
    content: "We bring unparalleled expertise to every collaboration",
  },
  {
    name: "Customizable Program",
    image: image2,
    url: "#",
    content:
      "We offer flexible and tailored music programs meet specific goals",
  },
  {
    name: "Proven Impact",
    image: image3,
    url: "#",
    content: "We offers expert online courses in musical instruments, ",
  },
];
export default function WhyCollaborate() {
  return (
    <section className=" min-h-[80%] h-auto  w-full  bg-custom-gradient-bpb-v opacity- py-9 ">
      <div className="relative w-full flex flex-col justify-center items-center">
        <h2 className="text-white text-2xl md:text-5xl font-medium">
          Why Collaborate{" "}
          <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
            With Us
          </span>
        </h2>
        <div className=" flex flex-col lg:flex-row mt-10 md:mt-20 xl:mt-36 px-10 h-full items-center gap-5">
          {featuresArr?.map((feature, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col lg:flex-row gap-3 items-center text-center"
            >
              <img
                className=" rounded-full w-36 h-36 object-cover   bg-opacity-10"
                src={feature.image}
              />
              <div className=" text-white lg:text-start">
                <h2 className=" font-medium md:text-xl lg:text-2xl mb-3 ">
                  {feature.name}
                </h2>
                <p className=" text-sm lg:text-lg font-thin">
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
