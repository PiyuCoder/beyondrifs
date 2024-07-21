import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const questions = [
  {
    heading: "How long does it take to learn piano through a course?",
    answer: "This is an answer.",
  },
  {
    heading: "How do I choose the right piano course?",
    answer: "This is an answer.",
  },
  {
    heading: "What career opportunities are available to pianists?",
    answer: "This is an answer.",
  },
];

export default function CuriousMind() {
  const [selected, setSelected] = useState(null);

  const toggleAccordion = (index) => {
    setSelected(index === selected ? null : index); // Toggle selected question index
  };

  return (
    <section className="text-white text-center h-auto min-h-full lg:px-32 pt-32">
      <h1 className="text-2xl md:text-5xl font-medium mb-20">
        Curious Minds{" "}
        <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
          {""} Want to Know
        </span>
      </h1>
      <div className="flex flex-col px-5 gap-4 mt-8">
        {questions.map((quest, i) => (
          <motion.div
            key={i}
            onClick={() => toggleAccordion(i)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`cursor-pointer relative border-t border-l border-white text-start rounded-xl p-2 md:p-4 ${
              i === selected
                ? "bg-gradient-to-b from-custom-purple-1 to-purple-600"
                : "border sm:h-24"
            }`}
          >
            <div className="float-right w-12 h-12 bg-gradient-to-r from-purple-950 to-purple-800 flex items-center justify-center rounded-2xl">
              <IoIosArrowDown
                className={`${i === selected ? "rotate-180" : ""}`}
              />
            </div>
            <h2 className="py-3 text-lg md:text-xl lg:text-2xl font-medium">
              {quest.heading}
            </h2>
            {i === selected && <hr className="h-1 w-full" />}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: i === selected ? "auto" : 0,
                opacity: i === selected ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <p className="py-4 text-xl">{quest.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
