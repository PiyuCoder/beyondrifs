import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const associateData = [
  {
    icons: "https://placehold.co/50x50",
    title: "Educational Institution",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icons: "https://placehold.co/50x50",
    title: "Educational Institution",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icons: "https://placehold.co/50x50",
    title: "Educational Institution",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icons: "https://placehold.co/50x50",
    title: "Educational Institution",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icons: "https://placehold.co/50x50",
    title: "Educational Institution",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Associate() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full h-full bg-collab-associate relative bg-cover bg-no-repeat">
      <div className="absolute w-full h-full opacity-85 bg-gradient-to-t from-black to-transparent" />

      <div className="w-full h-full py-10">
        <h1 className="text-white text-center text-2xl md:text-5xl font-medium">
          Associate
        </h1>
        <div className="mt-20 px-5">
          <Slider {...settings} className="custom-slider">
            {associateData.map((data, i) => (
              <div
                key={i}
                className=" bg-black relative text-white text-center overflow-hidden bg-opacity-70 rounded-3xl flex flex-col justify-center items-center  p-8 lg:py-16 "
              >
                <div className="absolute top-0 left-0 w-full h-5 bg-[#B957F2]" />
                <img
                  className="h-32 w-32   rounded-full mx-auto"
                  src={data.icons}
                  alt={data.title}
                />
                <h1 className="mt-5 text-3xl tracking-wider">{data.title}</h1>
                <p className="mt-10 lg:w-full mx-auto tracking-wider text-xl leading-relaxed">
                  {data.content}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
