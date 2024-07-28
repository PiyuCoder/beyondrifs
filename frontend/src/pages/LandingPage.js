import React from "react";
import HeroSection from "../components/landingpage/HeroSection";
import Features from "../components/landingpage/Features";
import StarryBackground from "../components/StarryBackground";
import CircleCarousel from "../components/landingpage/CircleCarousel";
import MusicalTale from "../components/landingpage/MusicalTale";
import JoinUs from "../components/landingpage/JoinUs";
import StartLearning from "../components/landingpage/StartLearning";
import Carousel3D from "../components/landingpage/Carousel3d";
import CuriousMind from "../components/landingpage/CuriousMind";
import Explore from "../components/landingpage/Explore";
import Qualities from "../components/landingpage/Qualities";

const images = [1, 2, 3, 4, 5];

export default function LandingPage() {
  return (
    <div className=" relative overflow-y-auto h-full w-full bg-black  overflow-x-hidden no-scrollbar">
      <StarryBackground landing />
      <div className="relative z-10 w-full h-full">
        <HeroSection />
        <Features />
        <MusicalTale />
        <StartLearning />
        <CircleCarousel />
        <JoinUs />
        <Qualities />
        <Carousel3D slides={images} option={{ loop: true }} />
        <CuriousMind />
        <Explore />
      </div>
    </div>
  );
}
