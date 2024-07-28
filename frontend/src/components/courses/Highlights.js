import React from "react";
import StarryBackground from "../StarryBackground";

const items = [
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
];
export default function Highlights() {
  return (
    <section className=" relative z-10 h-auto lg:h-full w-full  py-12">
      <StarryBackground course />
      <div className=" w-full h-full text-center flex flex-col items-center relative z-10 ">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold">
          Course
          <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
            {""} Highlights
          </span>
        </h1>
        <div
          className={` flex flex-wrap gap-5 lg:flex-nowrap justify-evenly w-full mt-16`}
        >
          {items.map((item, i) => (
            <div
              className={`${
                i % 2 !== 0 ? " lg:mt-20 xl:mt-40" : ""
              }  flex flex-col text-white items-center gap-3 lg:gap-8`}
              key={i}
            >
              <div className=" relative">
                <div className="   w-20 z-10 bg-black h-20 rounded-full border border-purple-500 shadow-inner-circle flex items-center justify-center text-2xl font-medium text-white">
                  {i + 1}
                  {i !== 3 && (
                    <hr
                      className={`absolute -z-20   h-[1px] ${
                        i % 2 === 0
                          ? " lg:rotate-[17deg] xl:rotate-[27deg] top-20 xl:top-32 left-12 xl:left-9"
                          : " lg:rotate-[-17deg] xl:rotate-[-27deg] left-12 xl:left-6 -top-0 xl:-top-12"
                      } lg:w-64  xl:w-96 bg-white`}
                    />
                  )}
                </div>
              </div>
              <div className=" flex flex-col justify-center">
                <h1 className=" text-xl">{item.title}</h1>
                <p className=" w-64">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
