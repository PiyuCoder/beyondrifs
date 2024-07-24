import React from "react";
import bottomLogo from "../../assets/images/br-logo-new.png";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="text-white relative text-center h-auto  w-full  mt-10  ">
      {/* <div className=" absolute top-0 left-0 h-auto w-full " /> */}
      <div className="  h-full  bg-gradient-to-b from-black to-[#541470c7]  lg:px-20 pb-20 sm:pb-0">
        <div className=" flex justify-between flex-wrap lg:flex-nowrap text-start px-4 md:px-10 mt-28 gap-20 mb-20">
          <div className=" flex flex-col gap-16 ">
            <div className=" flex gap-3 md:gap-16">
              <div>
                <h2 className="  font-medium mb-4">Course</h2>
                <h1 className=" font-thin mb-3">Instruments</h1>
                <h1 className=" font-thin mb-3">Instruments</h1>
                <h1 className=" font-thin mb-3">Instruments</h1>
              </div>
              <div>
                <h2 className=" mb-4 font-medium">Blogs</h2>
                <h1 className=" font-thin mb-3">Post</h1>
                <h1 className=" font-thin mb-3">Tips and Tricks</h1>
              </div>
              <div>
                <h2 className=" mb-4 font-medium">Support</h2>
                <h1 className=" font-thin mb-3">Contact Us</h1>
                <h1 className=" font-thin mb-3">FAQs</h1>
              </div>
              <div>
                <h2 className=" mb-4 font-medium">Legal</h2>
                <h1 className=" font-thin mb-3">Privacy</h1>
                <h1 className=" font-thin mb-3">Policy</h1>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-1/2 lg:px-14 text-center space-y-6">
            <h1 className=" text-3xl font-medium">
              Subscribe to our News Letter
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidid
            </p>
            <form className=" flex flex-col w-full h-full gap-7">
              <input
                placeholder="Email"
                className=" w-full  mx-auto rounded-full border-2 border-[#9C85B2] p-3 bg-transparent outline-none "
              />
            </form>
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
