import React from "react";
import image from "../../assets/images/collab-overview-img.png";

export default function Overview() {
  return (
    <div className=" h-auto bg-gradient-to-tr from-black to-[#240024] p-7 lg:p-10">
      <div className=" h-full flex flex-col lg:flex-row items-center gap-10 pt-16  ">
        <div className=" px-16  ">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
            Overview
          </h1>
          <p className=" hidden lg:block leading-loose tracking-widest font-thin text-lg mt-5 text-white">
            Beyondriffs is dedicated to enriching lives through music education.
            Our mission is to make high-quality music instruction accessible to
            all, fostering creativity and personal growth. We invite schools,
            organizations, and institutions to collaborate with us in spreading
            the joy of music and creating a positive impact on communities
            worldwide.
          </p>
        </div>

        <img className=" flex-1  z-10 h-96 xl:h-auto " src={image} />
        <p className=" block lg:hidden leading-loose tracking-widest font-thin text-lg mt-5 text-white">
          Beyondriffs is dedicated to enriching lives through music education.
          Our mission is to make high-quality music instruction accessible to
          all, fostering creativity and personal growth. We invite schools,
          organizations, and institutions to collaborate with us in spreading
          the joy of music and creating a positive impact on communities
          worldwide.
        </p>
      </div>
    </div>
  );
}
