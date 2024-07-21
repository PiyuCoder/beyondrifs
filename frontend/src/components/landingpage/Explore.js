import React from "react";
import bottomLogo from "../../assets/images/br-logo-new.png";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <section className="text-white relative text-center h-auto   xl:h-full w-full  mt-10 ">
      <div className=" absolute top-0 left-0 h-full w-full " />
      <div className="  h-full  bg-custom-gradient-tb lg:px-20  sm:pb-0">
        <h1 className="text-2xl md:text-5xl  mb-20 leading-relaxed">
          Turn your Passion into Reality <br />
          <span className=" font-medium"> Let's Begin</span>
        </h1>
        <button className="bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white py-4 text-lg opacity-80 mt-5  px-10 rounded-2xl hover:opacity-80">
          Book free trial
        </button>

        <div className=" flex flex-wrap lg:flex-nowrap text-start px-4 md:px-10 mt-28 gap-20 mb-20">
          <div>
            <h1 className=" text-2xl md:text-5xl font-medium leading-normal mb-3">
              Explore Our <br /> Melodic Courses!
            </h1>
            <p className=" text-lg tracking-wide">
              Discover a symphony of online music classes tailored to your
              rhythm.
            </p>
          </div>
          <div className=" flex gap-3 md:gap-10">
            <div>
              <h2 className="  font-medium mb-3">Course</h2>
              <h1 className=" font-thin mb-2">Instruments</h1>
              <h1 className=" font-thin mb-2">Instruments</h1>
              <h1 className=" font-thin mb-2">Instruments</h1>
            </div>
            <div>
              <h2 className=" mb-3 font-medium">Blogs</h2>
              <h1 className=" font-thin mb-2">Post</h1>
              <h1 className=" font-thin mb-2">Tips and Tricks</h1>
            </div>
            <div>
              <h2 className=" mb-3 font-medium">Support</h2>
              <h1 className=" font-thin mb-2">Contact Us</h1>
              <h1 className=" font-thin mb-2">FAQs</h1>
            </div>
            <div>
              <h2 className=" mb-3 font-medium">Legal</h2>
              <h1 className=" font-thin mb-2">Privacy</h1>
              <h1 className=" font-thin mb-2">Policy</h1>
            </div>
          </div>
        </div>
        <hr className=" h-1 w-full " />
        <div className=" py-10 px-5 flex items-center justify-between">
          <Link className=" bg-white p-1 rounded-md" to={"/"}>
            <img className=" h-7 sm:h-auto z-10 relative" src={bottomLogo} />
          </Link>
          <div className=" text-white text-2xl flex gap-2 sm:gap-7 z-10">
            <FaTwitter className=" hover:text-purple-400 cursor-pointer" />
            <a
              target="blank"
              href="https://www.linkedin.com/company/beyondriffs/"
            >
              <FaLinkedinIn className=" hover:text-purple-400 cursor-pointer" />
            </a>
            <IoLogoTiktok className=" hover:text-purple-400 cursor-pointer" />
            <FaYoutube className=" hover:text-purple-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
}
