import React from "react";
import NavBar from "../NavBar";

export default function TopSection() {
  return (
    <div className=" w-full h-full flex flex-col items-center  relative max-h-screen overflow-hidden">
      <div className=" absolute w-full h-full z-0 bg-custom-gradient-tb opacity-30 " />
      <NavBar />
      <div className=" w-full h-full flex-1 z-10 flex flex-col justify-center items-center gap-6 -mt-32">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
          Welcome to{" "}
          <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
            Beyondriffs
          </span>{" "}
        </h1>
        <p className="text-white text-center md:text-lg tracking-wide ">
          Find the perfect course to enhance your musical skills and knowledge.
        </p>
        <div className="flex items-center justify-center flex-wrap gap-5 w-full mt-7">
          <button className="bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white  py-3 px-7 text-xl rounded-2xl hover:opacity-80">
            Book free trial
          </button>
        </div>
      </div>
      <div className="w-[4000px] h-[4000px] absolute top-[83%] z-10 border-2 border-purple-600 border-opacity-40 mx-auto shadow-2xl shadow-purple-700  rounded-full bg-black bg-opacity-" />
    </div>
  );
}
