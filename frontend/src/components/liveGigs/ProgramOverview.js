import React from "react";
import img1 from "../../assets/images/gigs-img2.jpeg";

function ProgramOverview() {
  return (
    <div className="w-full h-auto flex flex-col sm:flex-row sm:justify-between items-center bg-gigs-gardient">
      <div className="w-full sm:w-1/2 h-full">
        <img
          src={img1}
          className=" w-full h-full object-cover object-center"
          style={{ height: "auto" }}
          alt="Image1"
        />
      </div>
      <div className="w-full sm:w-1/2 text-white p-10 lg:p-20">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold mb-2">
          Program
          <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
            {""} Overview
          </span>
        </h1>
        <p className="font-normal text-lg text-start sm:text-justify">
          Experience the thrill of live performances with Beyondriffs' Live
          Gigs! Our program is designed to bring students, instructors, and
          music enthusiasts together in a dynamic and interactive online
          environment. Whether you're a seasoned performer or just starting out,
          our live gigs provide the perfect platform to showcase your talent,
          gain valuable performance experience, and connect with a supportive
          community of musicians.
        </p>
        <div className="w-full flex flex-row justify-center sm:justify-start">
          <button className="px-8 py-4 font-semibold text-white bg-gray-600 rounded-2xl mt-5">
            Download brochure
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProgramOverview;
