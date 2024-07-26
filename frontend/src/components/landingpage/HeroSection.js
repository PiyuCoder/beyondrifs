import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import hero1 from "../../assets/images/image84.png";
import hero2 from "../../assets/images/landing-hero-img2.png";
import hero3 from "../../assets/images/landing-hero-img3.png";
import hero4 from "../../assets/images/landing-hero-img4.png";
import StarryBackground from "../StarryBackground";
import { useNavigate } from "react-router-dom";

const images = [hero1, hero2, hero3, hero4];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const delay = 5000; // Duration for each slide

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-cover bg-center transition-all ease-in-out duration-1000"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <NavBar />
      <StarryBackground landing />
      <div className="absolute inset-0 z-20">
        {/* This overlay adds a gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-purple-900 opacity-30"></div>
        {/* This pseudo-element will handle the image opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="absolute lg:w-1/2 inset-0 z-20 flex flex-col justify-center items-start p-6 md:p-12 lg:p-24">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
          Unlock your Musical Journey
        </h1>
        <p className="text-white text-base md:text-lg tracking-wide mt-4">
          We offer expert online courses in musical instruments, for beginners
          and seasoned musicians. Join our community and discover the magic of
          music.
        </p>
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => navigate("/book-demo")}
            className="bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 hover:from-[#441162] hover:via-[#7200b4]  hover:to-[#b12bff] text-white py-3 px-6 text-xl rounded-2xl"
          >
            Book Free Trial
          </button>
          <button
            // onClick={() => navigate("/book-demo")}
            className="border border-custom-purple-2 hover:bg-purple-800 hover:bg-opacity-20 text-white py-3 px-6 text-xl rounded-2xl"
          >
            Teach with us
          </button>
        </div>
      </div>
    </section>
  );
}
