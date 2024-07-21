import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdCheckmark } from "react-icons/io";
import vector1 from "../../assets/images/Vector1.png";
import vector2 from "../../assets/images/Vector2.png";
import vector3 from "../../assets/images/Vector3.png";
import vector4 from "../../assets/images/Vector4.png";

const plans = [
  {
    name: "Plus",
    price: "2000",
    icon: vector1,
    features: [
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
  {
    name: "Plus Combo",
    price: "2000",
    icon: vector2,
    features: [
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
  {
    name: "Premium",
    price: "2000",
    icon: vector3,
    features: [
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
  {
    name: "Premium Combo",
    price: "2000",
    icon: vector4,
    features: [
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
    ],
  },
];

export default function ChoosePlan() {
  const [isHovering, setIsHovering] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const handleMouseOver = (index) => {
    setCurrentCard(index);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setCurrentCard(null);
    setIsHovering(false);
  };
  return (
    <section className=" h-auto min-h-full w-full  mt-9 py-20 text-center">
      <div className=" flex flex-col items-center">
        <div className=" relative flex justify-center gap-5 md:gap-20">
          {plans.map((plan, i) => (
            <div key={i} className="">
              <div
                onClick={() => handleMouseOver(i)}
                key={i}
                className={`h-12 w-12 relative ${
                  isHovering &&
                  currentCard === i &&
                  " bg-custom-gradient-bpb-v bg-opacity-45"
                } bg-black z-10 rounded-full cursor-pointer border border-purple-800 hover:bg-custom-gradient-bpb-v hover:bg-opacity-45 text-white flex items-center justify-center font-medium`}
              >
                {i + 1}
              </div>
            </div>
          ))}
          <hr className=" absolute top-6 z-0 h-[1px] w-[90%] text-white" />
        </div>
        <h2 className=" text-white text-xl font-medium mt-10">
          Choose Your Plan
        </h2>
        <div className=" flex justify-center flex-wrap lg:flex-nowrap gap-10  lg:gap-7 mt-36 h-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`  relative  ${
                isHovering && currentCard === i
                  ? "h-auto -translate-y-20 z-10 transition-all ease-in-out duration-1000"
                  : " h-full"
              }`}
            >
              {plan.name === "Premium" && (
                <div className=" absolute -top-10 z-0 pt-2   left-0 h-16 w-full text-white rounded-t-xl bg-gradient-to-r from-[#9474BC] to-[#240B42] ">
                  <p>Recommended</p>
                </div>
              )}
              <div
                key={i}
                onMouseOver={() => handleMouseOver(i)}
                onMouseLeave={handleMouseLeave}
                className={`w-72 relative z-10  p-5 rounded-2xl container bg-gradient-to-b  text-white flex flex-col justify-start  gap-5 from-[#673E9C] to-[#140226]`}
              >
                <h1 className=" text-3xl font-medium">{plan.name}</h1>
                <p>&#8377;{plan.price}</p>
                <div>
                  <img className=" mx-auto" src={plan.icon} />
                </div>
                <hr className=" h-[1px] w-full" />
                <ul className=" space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <IoMdCheckmark className=" inline mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {isHovering && currentCard === i && (
                  <motion.button
                    initial={{ y: "20px", opacity: 0.1 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="bg-gradient-to-r from-custom-purple-1  via-custom-purple-2 to-custom-purple-3 text-white  py-3 px-7 text-xl rounded-2xl hover:opacity-80"
                  >
                    Enroll now
                  </motion.button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
