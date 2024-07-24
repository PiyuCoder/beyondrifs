import React from "react";
import StarryBackground from "../../components/StarryBackground";
import HeroSection from "../../components/liveGigs/HeroSection";
import BookTrail from "../../components/liveGigs/BookTrail";
import ProgramOverview from "../../components/liveGigs/ProgramOverview";
import Carousel from "../../components/liveGigs/Carousel";
import FAQs from "../../components/liveGigs/FAQs";
import Explore from "../../components/courses/Explore";
import Highlights from "../../components/liveGigs/Highlights";

export default function Gigs() {
  return (
    <div className=" overflow-y-auto h-full w-full bg-black overflow-x-hidden no-scrollbar">
      <HeroSection />
      <BookTrail />
      <ProgramOverview />
      <Carousel />
      <Highlights />
      <FAQs />
      <Explore />
    </div>
  );
}
