import React from "react";
import StarryBackground from "../StarryBackground";

const dataArray = [
  {
    icon: "https://placehold.co/50x50",
    title: "Harmony Elementary School",
  },
  {
    icon: "https://placehold.co/50x50",
    title: "Melody Middle School",
  },
  {
    icon: "https://placehold.co/50x50",
    title: "Rhythm High School",
  },
  {
    icon: "https://placehold.co/50x50",
    title: "Harmony Elementary School",
  },
];

export default function SchoolsAssociated() {
  return (
    <section className="w-full h-full relative  flex flex-col items-center justify-center select-none">
      {/* <StarryBackground landing /> */}
      <h2 className="text-white text-2xl md:text-5xl font-medium">
        Schools Associated{" "}
        <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
          With Us
        </span>
      </h2>
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-10 mt-16 px-4 lg:px-10 lg:ms-52">
          {dataArray.map((data, i) => (
            <div
              key={i}
              className="bg-[#3E075D] bg-opacity-30 relative overflow-hidden px-5 py-5 rounded-xl w-96 flex-shrink-0"
            >
              <div className="bg-[#B957F2] bg-opacity-50 absolute -top-64 z-0 left-0 min-w-full h-96 rounded-full" />
              <img
                className="h-32 w-32 rounded-full mx-auto z-10 relative"
                src={data.icon}
                alt={data.title}
              />
              <h2 className="text-white w-[90%] text-3xl text-center mt-4">
                {data.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <button className="bg-gradient-to-r mt-32 mx-auto from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white py-3 px-7 text-xl rounded-2xl hover:opacity-80">
        Collaborate with us
      </button>
    </section>
  );
}
