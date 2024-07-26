import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const questions = [
  {
    heading: "Accordion - FAQs",
    answer: "This is an answer.",
  },
  {
    heading: "Accordion - FAQs",
    answer: "This is an answer.",
  },
  {
    heading: "Accordion - FAQs",
    answer: "This is an answer.",
  },
  {
    heading: "Accordion - FAQs",
    answer: "This is an answer.",
  },
];

export default function CuriousMind() {
  const [selected, setSelected] = useState(null);

  const toggleAccordion = (index) => {
    setSelected(index === selected ? null : index); // Toggle selected question index
  };

  return (
    <section className="text-white text-center h-auto min-h-full lg:px-32 pt-32 pb-12 relative z-10 ">
      <h1 className="text-2xl md:text-5xl font-medium mb-20">
        Curious Minds Want to Know
      </h1>
      <div className="grid  lg:grid-cols-2 px-5  gap-4 mt-8 transition-all ease-linear duration-1000">
        {questions.map((quest, i) => (
          <div
            key={i}
            onClick={() => toggleAccordion(i)}
            className={`cursor-pointer relative border-t border-l border-white text-start  rounded-xl p-4 ${
              i === selected
                ? "bg-gradient-to-b from-custom-purple-1  to-purple-600 h-auto "
                : " border h-24"
            }`}
          >
            <div className=" float-right w-12 h-12 bg-gradient-to-r from-purple-950 to-purple-800 flex items-center justify-center rounded-2xl">
              <IoIosArrowDown
                className={`${i === selected ? " rotate-180" : ""}`}
              />
            </div>
            <h2 className=" py-3 text-xl lg:text-2xl font-medium">
              {quest.heading}
            </h2>
            {i === selected && <hr className=" h-1 w-full " />}
            {i === selected && (
              <p
                className={` ${
                  i === selected ? "block" : "hidden"
                } py-4 text-xl`}
              >
                {quest.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
