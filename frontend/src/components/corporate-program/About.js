import React from "react";

export default function About({ data }) {
  return (
    <div className=" w-full h-auto relative  text-white p-10 lg:p-20">
      <div className=" flex flex-col lg:flex-row items-center justify-center gap lg:px-20  ">
        <div className=" px ">
          <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl font-semibold">
            <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
              About
            </span>{" "}
            Us
          </h1>
          <p className=" leading-loose tracking-widest font-thin text-lg mt-5">
            {data.about}
          </p>
        </div>

        <img
          className=" flex-1 h-72 w-96 lg:h-96 lg:w-96 object-cover z-10 "
          src={data.aboutImage}
        />
      </div>
    </div>
  );
}
