import React from "react";
import NavBar from "../NavBar";

function HeroSection() {
  return (
    <section className={`relative w-full h-4/6 sm:h-full bg-cover bg-center`}>
      <section class="relative w-full h-full sm:h-[936px] bg-gigs bg-cover bg-center lg:bg-left-bottom lg:bg-no-repeat">
        <NavBar />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000e2] via-[#00000035] to-transparent " />
        <div className="relative z-10 w-full text-white h-5/6 flex justify-between px-6 md:px-0 md:ps-28  md:bg-none">
          <div className=" flex flex-col lg:w-1/2 justify-center items-start md:gap-6 py-10">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mt-10">
              Rock the Stage Live Music Experiences Await!
            </h1>
            <p className="text-white text-base md:text-lg tracking-wide">
              Discover electrifying live music experiences at Beyondriffs! Join
              us for unforgettable moments and connect with fellow music
              enthusiasts.
            </p>
            <div className="flex items-center justify-start flex-wrap gap-5 w-full mt-7">
              <button className="bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white  py-3 px-7 text-xl rounded-2xl hover:opacity-80">
                I am interested
              </button>
              <button className="border border-custom-purple-2 hover:bg-purple-800 hover:bg-opacity-20 text-white  py-3 px-7 text-xl rounded-2xl">
                Download brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
