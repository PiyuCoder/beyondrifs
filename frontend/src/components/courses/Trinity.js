import React from "react";
import overviewImg from "../../assets/images/unsplash.jpeg";

export default function Trinity() {
  return (
    <section className=" md:h-full w-full   lg:px-32">
      <div className=" w-full relative h-[350px] text-center flex  items-center md:justify-end mt-20 overflow-hidden  md:rounded-[35px]  ">
        <div className=" absolute top-0 left-0 w-full h-full  bg-gradient-to-b  from-[#0d0114] to-[#803ba39c] z-30  " />
        <div className=" absolute top-0 left-0 h-full   flex items-center justify-end   overflow-hidden ">
          <img className=" z-0" src={overviewImg} />
        </div>
        <div className="z-40 text-white pe-20 h-full flex flex-col justify-center items-center  ">
          <h1 className="text-2xl   md:text-5xl font-medium mb-12 ">
            Trinity Exam
          </h1>
          <p className=" text-xl w-96">
            Unlock your musical potential with Trinity Examinations
          </p>
          <div>
            <button className=" bg-gradient-to-r from-[#55555564] to-[#b198bf62] bg-opacity-20 p-4 px-10 rounded-2xl mt-3">
              Apply here
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
