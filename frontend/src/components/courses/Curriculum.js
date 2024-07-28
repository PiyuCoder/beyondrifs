import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Curriculum({ name }) {
  return (
    <section className=" w-full h-auto py-10 pb-36">
      <div
        className={`hero-cover-${name} relative h-44       bg-cover bg-center`}
      >
        <div className=" absolute w-full h-full bg-purple-950 bg-opacity-90 flex items-center justify-center">
          {" "}
          <p className="text-white text-5xl font-semibold">Curriculum</p>
        </div>
      </div>
      <div className=" mt-16 text-white w-full space-y-16 ">
        <div
          className="flex items-center justify-between  p-6 text-lg md:text-2xl max-w-7xl mx-auto   rounded-b-2xl"
          style={{ boxShadow: "0px 3px 4px 0px gray" }}
        >
          Module 1 - Basics of Guitar <IoIosArrowForward />
        </div>
        <div
          className="flex items-center justify-between  p-6 text-lg md:text-2xl max-w-7xl mx-auto  border-x border-b   rounded-b-2xl"
          style={{ boxShadow: "0px 3px 4px 0px gray" }}
        >
          Module 1 - Basics of Guitar <IoIosArrowForward />
        </div>
        <div
          className="flex items-center justify-between  p-6 text-lg md:text-2xl max-w-7xl mx-auto  border-x border-b   rounded-b-2xl"
          style={{ boxShadow: "0px 3px 4px 0px gray" }}
        >
          Module 1 - Basics of Guitar <IoIosArrowForward />
        </div>
        <div
          className="flex items-center justify-between  p-6 text-lg md:text-2xl max-w-7xl mx-auto  border-x border-b   rounded-b-2xl"
          style={{ boxShadow: "0px 3px 4px 0px gray" }}
        >
          Module 1 - Basics of Guitar <IoIosArrowForward />
        </div>
        <div
          className="flex items-center justify-between  p-6 text-lg md:text-2xl max-w-7xl mx-auto  border-x border-b   rounded-b-2xl"
          style={{ boxShadow: "0px 3px 4px 0px gray" }}
        >
          Module 1 - Basics of Guitar <IoIosArrowForward />
        </div>
      </div>
    </section>
  );
}
