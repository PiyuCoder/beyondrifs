import React from "react";
import Slider from "react-slick";
import NavBar from "../NavBar";
import manWithGuitar from "../../assets/images/image84.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarryBackground from "../StarryBackground";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image: manWithGuitar,
    heading: "Unlock your Musical Journey",
    content:
      "At Beyondriffs, we believe music speaks to the soul. Whether you're just starting out or striving to master your musical skills, we provide a life-changing learning journey. Join us now and discover your musical voice at Beyondriffs!",
    buttons: [
      {
        text: "Book free trial",
        url: "/book-demo/choose-role",
        style: "solid",
      },
      { text: "Teach with us", url: "#", style: "transparent" },
    ],
  },
  {
    image:
      "https://cdn.prod.website-files.com/663d6c83b39950a5d57d94b5/663da534d6cfff2b27b5a0e0_Hero%20Image.webp",
    heading: "Join our courses",
    content:
      "We offer expert online courses in musical instruments for beginners and seasonal musicians. Join our community and discover the magic of music.",
    buttons: [{ text: "Join", url: "#", style: "solid" }],
  },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    pauseOnHover: false,
  };

  return (
    <section className="relative w-full z-20 h-auto lg:h-full overflow-hidden">
      <StarryBackground />
      <NavBar />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-purple-900 opacity-20"></div>
      <Slider {...settings} className="relative w-full h-full">
        {data.map((el, index) => (
          <div key={index} className="w-full h-full py-10 md:py-0 ">
            <div className="relative flex flex-col-reverse lg:flex-row justify-between items-center w-full h-full  lg:px-0 lg:ps-20">
              <div className=" absolute lg:relative w-full lg:w-1/2 flex flex-col justify-center items-start gap-6 p-6">
                <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
                  {el.heading}
                </h1>
                <p className="text-white text-base md:text-lg tracking-wide">
                  {el.content}
                </p>
                <div className="flex items-center justify-start flex-wrap gap-5 w-full mt-7">
                  {el.buttons.map((btn, btnIndex) => (
                    <button
                      onClick={() => navigate(btn.url)}
                      key={btnIndex}
                      className={`${
                        btn.style === "solid"
                          ? "bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 hover:opacity-80"
                          : "border border-custom-purple-2 hover:bg-purple-800 hover:bg-opacity-20"
                      } text-white py-3 px-7 text-xl rounded-2xl`}
                    >
                      {btn.text}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 h-[500px] overflow-hidden bg-black bg-opacity-30  lg:h-full">
                <img
                  className="w-full h-full object-cover object-center lg:opacity-65"
                  src={el.image}
                  alt={`Image ${index + 1}`}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .slick-slide > div {
          display: flex !important;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
}
