import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const questions = [
  {
    heading: 'What is Beyondriffs?',
    answer: 'This is an answer.',
  },
  {
    heading: 'Where is Beyonfdriffs Located?',
    answer: 'This is an answer.',
  },
  {
    heading: 'How are classes Conducted ?',
    answer: 'This is an answer.',
  },
  {
    heading: 'Does Beyondriffs conduct offline classes as well ?',
    answer: 'This is an answer.',
  },
  ,
  {
    heading: 'Where is Beyonfdriffs Located?',
    answer: 'This is an answer.',
  },
  ,
  {
    heading: 'How are classes Conducted ?',
    answer: 'This is an answer.',
  },
  ,
  {
    heading: 'Does Beyondriffs conduct offline classes as well ?',
    answer: 'This is an answer.',
  },
];

export default function FAQs() {
  const [selected, setSelected] = useState(null);

  const toggleAccordion = (index) => {
    setSelected(index === selected ? null : index);
  };

  return (
    <section className="text-white text-center h-auto min-h-full lg:px-32 py-32 ">
      <h1 className="text-2xl md:text-5xl font-medium mb-20 text-center">
        FAQs
      </h1>
      <div className="w-5/6 flex flex-col justify-center mx-auto px-5 gap-5 sm:gap-10 mt-8 transition-all ease-linear duration-1000">
        {questions.map((quest, i) => (
          <div
            key={i}
            onClick={() => toggleAccordion(i)}
            className={`cursor-pointer relative border-t border-l border-white text-start rounded-xl p-4 ${
              i === selected
                ? 'bg-gradient-to-b from-custom-purple-1  to-purple-600 h-auto '
                : ' border h-24'
            }`}
          >
            <div className=" float-right w-12 h-12 bg-gradient-to-r from-purple-950 to-purple-800 flex items-center justify-center rounded-2xl">
              <IoIosArrowDown
                className={`${i === selected ? ' rotate-180' : ''}`}
              />
            </div>
            <h2 className="py-3 text-xl lg:text-2xl font-medium">
              {quest.heading}
            </h2>
            {i === selected && <hr className=" h-1 w-full " />}
            {i === selected && (
              <p
                className={` ${
                  i === selected ? 'block' : 'hidden'
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
