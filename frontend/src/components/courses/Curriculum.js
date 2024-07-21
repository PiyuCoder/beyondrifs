import React from "react";
import torus from "../../assets/images/torus.png";

export default function Curriculum({ name }) {
  return (
    <section className=" w-full h-auto py-10">
      <div
        className={`hero-cover-${name} relative h-44       bg-cover bg-center`}
      >
        <div className=" absolute w-full h-full bg-purple-950 bg-opacity-90 flex items-center justify-center">
          {" "}
          <p className="text-white text-5xl font-semibold">Curriculum</p>
        </div>
      </div>
      <div className=" mt-16">
        <div className=" flex justify-center gap-4 md:gap-14">
          <button className="bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white  py-3 px-7 text-xl rounded-full hover:opacity-80">
            Beginner
          </button>
          <button className="bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white  py-3 px-7 text-xl rounded-full hover:opacity-80">
            Advanced
          </button>
        </div>
        <div className=" flex justify-between text-white max-w-3xl mx-auto mt-20 px-5">
          <ul className=" text-xl list-disc space-y-3 mx-auto md:mx-0">
            <li className="">Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
          <div className=" hidden md:flex items-end">
            <img className=" h-28 w-52" src={torus} />
          </div>
        </div>
      </div>
    </section>
  );
}
