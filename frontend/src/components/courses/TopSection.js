import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopSection({ course }) {
  const navigate = useNavigate();
  return (
    <section
      className={`hero-cover-${course.name} relative h-[480px] mt-10 lg:mt-0 lg:pt-0  md:px-20 bg-cover bg-right`}
    >
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 grayscale" /> */}
      <div className=" absolute top-0 left-0 w-full h-full text-white md:px-20  bg-[#0D010F99] bg-opacity-10  flex  items-center justify-start">
        <div className=" md:w-1/2 px-5 md:px-10">
          <h1 className=" font-semibold text-5xl lg:text-6xl">
            {course.title}
          </h1>
          <p className=" text-lg">{course.description}</p>
          <div className="flex items-center justify-start flex-wrap gap-5 w-full mt-7">
            <button
              onClick={() => navigate("/book-demo/choose-role")}
              className="bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white  py-4 px-7 text-xl rounded-2xl hover:opacity-80"
            >
              I am interested
            </button>
            <button
              onClick={() => navigate("/book-demo/choose-role")}
              className="text-white  py-4 px-7 text-xl rounded-2xl border border-custom-purple-2 hover:bg-purple-800 hover:bg-opacity-20"
            >
              Book free demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
