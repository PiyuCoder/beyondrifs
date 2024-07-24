import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    heading: "Trial session",
    content: "Book a Free Trial we contact you soon",
  },
  {
    heading: "Experience",
    content: "Experience our technology with tutor",
  },
  {
    heading: "Start",
    content: "Liked the experience? Upgrade and begin",
  },
];

export default function StartLearning() {
  return (
    <section className="h-auto min-h-full w-full text-white -mt-[1px] opacity-80 pt-5 tracking-wider px-10 xl:px-28 pb-44">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-2xl md:text-5xl font-medium w-full whitespace-nowrap leading-relaxed">
            Start learning <br />
            <span className=""> Music Online</span>
          </h1>
          <h3 className="text-lg lg:text-xl text-center mt-2 lg:mt-5">
            In 3 Simple steps
          </h3>
          <Link
            to={"/book-demo/choose-role"}
            className="bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white py-4 text-lg opacity-80 mt-7 px-10 rounded-2xl hover:opacity-80"
          >
            Book free trial
          </Link>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap items-baseline justify-center flex-row mt-10 gap-3">
          {items.map((item, index) => (
            <div className="container text-center gap-3" key={index}>
              <div>
                <div className="w-20 h-20 mx-auto rounded-full border border-purple-500 shadow-inner-circle flex items-center justify-center text-2xl font-medium">
                  0{index + 1}
                </div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-medium my-1 lg:my-2 whitespace-nowrap text-center">
                  {item.heading}
                </h1>
              </div>
              <p className="mt-1 px-3 font-thin text-sm lg:text-xl">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
