import React, { useState } from "react";
import guitar from "../../assets/images/about-course-guitar.png";
import ukulele from "../../assets/images/about-course-ukulele.png";
import vocal from "../../assets/images/about-course-vocal.png";
import piano from "../../assets/images/about-course-piano.png";
import production from "../../assets/images/about-course-production.png";
import { motion } from "framer-motion";

const courses = [
  {
    image: guitar,
    instrument: "Guitar",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  },
  {
    image: ukulele,
    instrument: "Ukulele",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  },
  {
    image: vocal,
    instrument: "Vocals",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  },
  {
    image: piano,
    instrument: "Keyboard",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  },
  {
    image: production,
    instrument: "Production",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  },
];

export default function OurCourses() {
  const [selected, setSelected] = useState(null);
  return (
    <div className=" w-full h-auto flex flex-col items-center p-20">
      <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
        Our{" "}
        <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
          Courses
        </span>{" "}
      </h1>
      <div className="flex flex-wrap justify-evenly w-full gap-6 mt-20">
        {courses.map((course, index) => (
          <div
            onMouseOver={() => setSelected(index)}
            onMouseLeave={() => setSelected(null)}
            className="flex-1 hover:scale-110 transition-all ease-in-out duration-700"
            key={index}
          >
            <div className="rounded-full w-44 h-44 mx-auto overflow-hidden">
              <img
                className="object-cover object-center w-full h-full"
                src={course.image}
                alt="Course Image"
              />
            </div>

            <motion.div
              initial={{ height: "auto" }}
              className="bg-[#261D2F] rounded-xl p-3 h-auto transition-all ease-in-out duration-700 text-white text-center mt-4"
            >
              <p className="text-2xl font-medium">{course.instrument}</p>
              <motion.p
                className={`mt-2 ${index !== selected ? "hidden" : "block"}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index !== selected ? 0 : 1,
                  display: index !== selected ? "none" : "block",
                }}
                transition={{ duration: 0.3 }}
              >
                {course.content}
              </motion.p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
