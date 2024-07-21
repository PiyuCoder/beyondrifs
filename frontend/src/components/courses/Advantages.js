import React from "react";
import advantage1 from "../../assets/images/advantage1.png";
import advantage2 from "../../assets/images/advantage2.png";
import advantage3 from "../../assets/images/advantage3.png";

const advantageArr = [
  {
    icon: advantage1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: advantage2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: advantage3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

export default function Advantages() {
  return (
    <section className="  mt-9 py-20 text-center">
      <h1 className=" text-5xl text-white mx-auto font-semibold">Advantages</h1>
      <div className=" flex flex-wrap items-center justify-evenly gap-4 mt-20">
        {advantageArr.map((el, i) => (
          <div className=" text-white flex flex-col items-center gap-4" key={i}>
            <img src={el.icon} />
            <p className=" w-60 text-xl">{el.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
