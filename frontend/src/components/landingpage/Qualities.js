import React from "react";
import icon1 from "../../assets/images/qIcon1.png";
import icon2 from "../../assets/images/qIcon2.png";
import icon3 from "../../assets/images/qIcon3.png";
import icon4 from "../../assets/images/qIcon4.png";

const items = [
  {
    icon: icon1,
    content: "Internationally Recognised",
  },
  {
    icon: icon2,
    content: "Milestones in your musical journey",
  },
  {
    icon: icon3,
    content: "Build Rigour and practice dicipline",
  },
  {
    icon: icon4,
    content: "Removes Performance Fear",
  },
];

export default function Qualities() {
  return (
    <section className=" w-full p-24 h-auto lg:h-96 flex items-center justify-center text-white">
      <div className=" flex gap-7 flex-wrap lg:flex-nowrap justify-center">
        {items.map((item, i) => (
          <div
            className=" flex flex-col items-center justify-center gap-4 text-center px-7"
            key={i}
          >
            <img className="h-28" src={item.icon} />
            <h2 className=" text-2xl font-medium">{item.content}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
