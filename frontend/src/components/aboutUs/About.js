import React from "react";
import piano from "../../assets/images/about-piano.png";
import guitar from "../../assets/images/about-guitar.png";

export default function About() {
  return (
    <div className=" w-full h-auto min-h-full text-white lg:p-20">
      <div className=" flex flex-col lg:flex-row items-center gap-10  ">
        <div className=" px-6 lg:px-16  ">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
            <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
              About
            </span>{" "}
            Us
          </h1>
          <p className=" leading-loose tracking-widest font-thin text-lg mt-5">
            Beyondriffs nurtures talents and shapes dreams beyond mere
            instruction through our team of handpicked certified teachers who
            are dedicated to igniting musical odysseys. Our commitment to
            excellence is evident in our tailor made approach that markets
            personalized musical projects resonating with every individual
            student’s unique self.
          </p>
        </div>

        <img className=" flex-1 w-72 lg:w-96 z-10 " src={piano} />
      </div>
      <div className=" flex flex-col-reverse lg:flex-row items-center gap-10  ">
        <img className=" flex-1 w-40 lg:w-72  z-10 " src={guitar} />
        <div className=" px-6 lg:px-28 ">
          <p className=" leading-loose tracking-widest font-thin text-lg mt-5">
            The stars perform like ethereal ballet dancers in the night sky,
            whereas at the same time, the moon imparts secret knowledge to the
            dreaming soil beneath it. There is magic in every moment.
            Beyondriffs illustrates this enchantment as a symbol of evolution in
            music education by always combining modern technology with timeless
            artistry of music.
            <br />
            <br />
            We offer three specific tastes of music instruction; guiding
            students to embrace their individual musical selves and thus unlock
            more creativity than ever before. At Beyondriffs we believe in
            unlocking the limitless possibilities of music one customized class
            at a time. Take this transformative journey with us and discover
            endless possibilities that await you amidst your dream’s orchestra.
          </p>
        </div>
      </div>
    </div>
  );
}
