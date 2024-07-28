import React from "react";
import { Outlet, useParams } from "react-router-dom";
import courses from "../../components/constants/courseData";
import TopSection from "../../components/courses/TopSection";
import NavBar from "../../components/NavBar";
import TrialDemo from "../../components/courses/TrialDemo";
import Carousel3D from "../../components/landingpage/Carousel3d";
import Overview from "../../components/courses/Overview";
import Highlights from "../../components/courses/Highlights";
import Curriculum from "../../components/courses/Curriculum";
import Certification from "../../components/courses/Certification";
import Advantages from "../../components/courses/Advantages";
import ChoosePlan from "../../components/courses/ChoosePlan";
import CuriousMind from "../../components/courses/CuriousMind";
import Trinity from "../../components/courses/Trinity";
import Explore from "../../components/courses/Explore";

export default function Courses() {
  const { courseName } = useParams();
  const course = courses[courseName];
  return (
    <div className=" overflow-y-auto h-full w-full bg-black overflow-x-hidden no-scrollbar">
      <NavBar bgColor={"blak"} />
      <div className="w-full h-full relative z-10">
        <TopSection course={course} />
        <TrialDemo />
        <Overview
          overviewImg={course.overviewImg}
          overviewContent={course.overviewContent}
        />
        <Highlights />
        <Curriculum name={course.name} />
        <Carousel3D />
        <Certification />
        <Advantages />
        <ChoosePlan />
        <CuriousMind />
        <Trinity />
        <Explore />
      </div>
    </div>
  );
}
