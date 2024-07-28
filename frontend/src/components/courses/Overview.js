import React from "react";
import person1 from "../../assets/images/person1.jpeg";
import person2 from "../../assets/images/person2.jpeg";
import person3 from "../../assets/images/person3.jpeg";
import person4 from "../../assets/images/person4.jpeg";

const personArr = [
  {
    title: "Lorem ipsum",
    image: person1,
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Lorem ipsum",
    image: person2,
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Lorem ipsum",
    image: person3,
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Lorem ipsum",
    image: person4,
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

export default function Overview({ overviewImg, overviewContent }) {
  return (
    <section className=" h-auto lg:h-[650px]  w-full  bg-[#190622] ">
      <div className=" w-full h-full flex flex-col lg:flex-row items-center justify-center py-14 lg:py-0 ">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold lg:hidden ">
          Program
          <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
            {""} Overview
          </span>
        </h1>
        <div className=" w-full h-full  flex items-center  overflow-hidden  md:rounded-[35px] mt-4 lg:mt-0">
          <img
            className=" w-full h-full object-cover transform scale-x-[-1]"
            src={overviewImg}
          />
        </div>
        <div className=" w-full text-center xl:text-start relative z-10 flex flex-col justify-center h-full lg:-ms-40 lg:px-8 bg-gradient-to-r from-[#0e0215be] via-[#420565cb] to-[#0d021300]">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold hidden lg:block">
            Program
            <span className=" bg-clip-text text-transparent lg:bg-gradient-to-b via-transparent  lg:from-[#420565] lg:via-[#6A0B90] lg:to-white">
              {""} Overview
            </span>
          </h1>
          <p className=" text-white text-lg tracking-wider leading-loose mt-10   ">
            {overviewContent}
          </p>
        </div>

        {/* <div className=" px-5 w-full md:w-[70%] flex flex-wrap justify-evenly gap-16 text-white mt-10 ">
          {personArr.map((person, i) => (
            <div
              className=" border border-purple-500 border-opacity-25 rounded-3xl p-4 max-w-96 flex"
              key={i}
            >
              <div className=" w-full">
                <img
                  className="h-12 w-12 rounded-full"
                  src={person.image}
                  alt={person.title}
                />
              </div>
              <div className=" h-full flex flex-col text-start justify-between">
                <h1 className=" text-2xl font-medium tracking-wider">
                  {person.title}
                </h1>
                <p>{person.comments}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
