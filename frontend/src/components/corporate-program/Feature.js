import React from "react";

export default function Feature({ data }) {
  return (
    <div className="w-full  relative h-auto text-white p-10 lg:p-20">
      <div className="absolute w-full h-full inset-0 opacity- bg-gradient-to-r from-black via-custom-purpl to-custom-purple-3" />
      <div className="absolute w-full h-full inset-0 opacity- bg-gradient-to-t from-black to-transparent" />
      <div className="absolute w-full h-full inset-0 opacity- bg-gradient-to-b from-black to-transparent" />
      <h1 className="text-white  relative z-10 text-center text-3xl lg:text-4xl xl:text-5xl font-semibold">
        Features
      </h1>
      <div className="relative h-auto min-h-full z-10 flex xl:flex-row flex-col-reverse items-center mt-20   ">
        <div
          className={`relative hidden xl:block max-w-xl overflow-hidden ${
            data.name === "concert" ? " rounded-b-full" : " rounded-t-full"
          } `}
        >
          <div className="absolute w-full h-40 -bottom-10 bg-gradient-to-t from-black via-[#000000e2] to-transparent" />
          <img className="-mb-5" src={data.feature.image} />
        </div>
        <div className="flex flex-col  justify-center text-center xl:text-start items-center h-full gap-20 sm:px-10 ">
          {data.feature.items.map((item, i) => (
            <div
              key={i}
              className="flex gap-10 items-center xl:items-start flex-col xl:flex-row"
            >
              <img className=" " src={item.icon} />
              <div>
                <h1 className="text-2xl font-semibold tracking-wider">
                  {item.title}
                </h1>
                <p className=" text-lg leading-relaxed mt-6 font-thin tracking-wider">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
