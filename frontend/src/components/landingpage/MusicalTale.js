import React from "react";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import StarryBackground from "../StarryBackground";

const boxes = [
  {
    icon: icon1,
    heading: "1x1 live class",
    content: "Live online sessions",
  },
  {
    icon: icon2,
    heading: "Personalised",
    content: "Result oriented curriculam",
  },
  {
    icon: icon4,
    heading: "Performance",
    content: "Opportunities",
  },
  {
    icon: icon3,
    heading: "Graded",
    content: "Courses",
  },
];

export default function MusicalTale() {
  return (
    <section className="w-full h-auto z-0 relative min-h-full flex flex-col-reverse lg:flex-row py-14 px-7">
      <StarryBackground />
      <div className="flex flex-col items-center gap-9 lg:gap-3 w-full lg:w-1/2 px- xl:ps-24">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`w-full max-w-lg md:max-w-xl xl:max-w-none md:w-1/2 lg:w-full flex flex-col  ${
              index % 2 === 0 ? "items-start" : "items-end"
            }`}
          >
            {index % 2 !== 0 && index !== 0 && (
              <div className="w-1/2 relative -z-10 -left-20 lg:-left-20 xl:-left-32 border-t border-white border-r h-20 rounded-tr-xl -mt-24 lg:-mt-16 xl:-mt-24" />
            )}
            {index % 2 === 0 && index !== 0 && (
              <div className="w-1/2 relative -z-10 -right-24 lg:-right-28 xl:-right-32 border-t border-white border-l h-20 rounded-tl-xl -mt-24 lg:-mt-20 xl:-mt-24" />
            )}
            <div
              className={`bg-[#1D181F] p-2  xl:p-5 rounded-2xl sm:w-52 w-44  h-28 xl:h-40 xl:w-72 flex items-center gap-2 justify-between xl:-mt-6 text-white ${
                index % 2 !== 0 ? "ml-auto" : ""
              }`}
            >
              <img
                src={box.icon}
                alt={`icon-${index}`}
                className=" w-10 h-10 lg:w-14 lg:h-14 xl:w-auto xl:h-auto"
              />
              <div className="xl:ml-4 text-start w-full">
                <h1 className=" text-sm lg:text-lg xl:text-xl font-semibold">
                  {box.heading}
                </h1>
                <p className="mt-1 text-xs lg::text-sm xl:text-lg">
                  {box.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-white flex-shrink container w-full lg:w-1/2 xl:px-10 mt-8 lg:mt-0 lg:ml-14 mb-16">
        <h1 className="text-2xl lg:text-5xl font-medium mb-4">
          Harmony Unleashed <br /> Our
          <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
            {" "}
            Musical Tale
          </span>
        </h1>
        <p className="text-lg leading-relaxed font-thin">
          Beyondriffs goes beyond music lessons; it's about discovering your
          voice through rhythm. We foster emotional expression, not just playing
          notes. Say goodbye to conventional teachers - we connect you with
          fellow music explorers and mentors who will help you become a musical
          virtuoso.
        </p>
        <button className="bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white py-4 text-lg opacity-55 mt-5  px-10 rounded-2xl hover:opacity-80">
          Explore our story
        </button>
      </div>
    </section>
  );
}
