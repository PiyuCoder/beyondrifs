import React from "react";
import HeroSection from "../../components/collaborate/HeroSection";
import Overview from "../../components/collaborate/Overview";
import WhyCollaborate from "../../components/collaborate/WhyCollaborate";
import Explore from "../../components/courses/Explore";
import Associate from "../../components/collaborate/Associate";
import SchoolsAssociated from "../../components/collaborate/SchoolsAssociated";

export default function Collaborate() {
  return (
    <div className=" w-full h-full bg-black relative min-h-auto overflow-y-auto no-scrollbar overflow-x-hidden">
      <HeroSection />
      <Overview />
      <WhyCollaborate />
      <Associate />
      <SchoolsAssociated />
      <Explore />
    </div>
  );
}
