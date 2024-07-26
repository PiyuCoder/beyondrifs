import React from "react";
import NavBar from "../../components/NavBar";
import StarryBackground from "../../components/StarryBackground";
import TopSection from "../../components/aboutUs/TopSection";
import About from "../../components/aboutUs/About";
import Features from "../../components/aboutUs/Features";
import OurCourses from "../../components/aboutUs/OurCourses";
import Carousel from "../../components/aboutUs/Carousel";
import Explore from "../../components/landingpage/Explore";

export default function AboutUs() {
  return (
    <div className=" w-full h-full relative z-0 bg-black min-h-auto overflow-y-auto">
      <StarryBackground landing />
      <div className=" w-full h-full relative z-10">
        <TopSection />
        <About />
        <Features />
        <OurCourses />
        <Carousel />
        <Explore />
      </div>
    </div>
  );
}
