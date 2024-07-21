import React from "react";
import manWithGuitar from "../../assets/images/image84.png";
import NavBar from "../NavBar";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-collab bg-cover bg-center ">
      <NavBar />
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000e2] to-[#ffffff00] "></div>
      <div className="relative z-10 w-full text-white h-5/6 flex justify-between px-6 md:px-0 md:ps-28  md:bg-none">
        <div className=" flex flex-col lg:w-1/2 justify-center items-start gap-6">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            Team up with <br /> Beyondriffs
          </h1>
          <p className="text-white text-base md:text-lg tracking-wide">
            Join Hands with Us to Bring the Joy of Music Bringing Music
            Education to New Heights and to set new music trends
          </p>
          <div className="flex items-center justify-start flex-wrap gap-5 w-full mt-7">
            <button className="bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white  py-3 px-7 text-xl rounded-2xl hover:opacity-80">
              Lets collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
