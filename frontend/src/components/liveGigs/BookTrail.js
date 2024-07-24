import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import StarryBackground from '../StarryBackground';


function BookTrail() {
  return (
    <section className="w-full h-auto z-0 relative py-14 sm:py-40 px-7 mt-20">
        <StarryBackground />
      <div className=" absolute left-0 top-0 w-full h-full bg-opacity-50 z-0" />
      <div className=" w-full h-full relative flex flex-col items-center justify-center z-20 text-center text-white gap-8">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold">
          Book a
          <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
            {""} Free Trial Now
          </span>
        </h1>
        <p className=" px-5 md:w-[57%] tracking-wider leading-relaxed text-xl mt">
          Integer enim neque volutpat ac tincidunt vitae semper quis lectus.
          Eleifend quam adipiscing vitae proin sagittis nisl. Ut tristique et
          egestas quis ipsum suspendisse. Nisl suscipit adipiscing bibendum est
          ultricies integer quis auctor elit.
        </p>
        <button className="bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white font-medium  py-4 px-12 text-xl rounded-2xl hover:opacity-80">
          I am interested <MdKeyboardArrowRight className=" inline text-3xl" />
        </button>
      </div>
    </section>
  )
}

export default BookTrail