import React from "react";
import NavBar from "../../components/NavBar";
import { useParams } from "react-router-dom";
import corporateData from "../../components/constants/corporateData";
import HeroSection from "../../components/corporate-program/HeroSection";
import About from "../../components/corporate-program/About";
import Feature from "../../components/corporate-program/Feature";
import Importance from "../../components/corporate-program/Importance";
import Explore from "../../components/courses/Explore";

export default function Corporate() {
  const { programType } = useParams();
  const corporate = corporateData[programType];
  return (
    <div className=" overflow-y-auto h-full w-full  bg-black overflow-x-hidden no-scrollbar">
      <HeroSection data={corporate} />
      <About data={corporate} />
      <Feature data={corporate} />
      <Importance data={corporate} />
      <Explore />
    </div>
  );
}
