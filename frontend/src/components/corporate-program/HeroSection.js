import React from "react";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";

export default function HeroSection({ data }) {
  const navigate = useNavigate();
  return (
    <section
      className={`relative w-full h-[80%] bg-corporate-${data.name} bg-cover bg-center`}
    >
      <NavBar />
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000e2] via-[#00000035] to-transparent " />
      {/* <div className="absolute bottom-0 h-40 bg-gradient-to-t opacity- from-black via-custom- */}
      <div className="relative z-10 w-full text-white h-5/6 flex justify-between px-6 md:px-0 md:ps-28  md:bg-none">
        <div className=" flex flex-col lg:w-1/2 justify-center items-start md:gap-6">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            {data.title}
          </h1>
          <p className="text-white text-base md:text-lg tracking-wide">
            {data.description}
          </p>
          <div className="flex items-center justify-start flex-wrap gap-5 w-full mt-7">
            <button className="bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white  py-3 px-7 text-xl rounded-2xl hover:opacity-80">
              I am interested
            </button>
            <button
              onClick={() => navigate(data.rightBtn.url)}
              className="border border-custom-purple-2 hover:bg-purple-800 hover:bg-opacity-20 text-white  py-3 px-7 text-xl rounded-2xl"
            >
              {data.rightBtn.text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
