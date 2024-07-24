import React from "react";
import NavBar from "../NavBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/blog-carousel-img1.jpeg";
import image2 from "../../assets/images/blog-carousel-img2.jpeg";
import image3 from "../../assets/images/blog-carousel-img3.jpeg";

const data = [
  {
    image: image1,
    heading: "Jazz Improvisation Demystified: Tips for Aspiring Musicians",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
  },
  {
    image: image2,
    heading: "Jazz Improvisation Demystified: Tips for Aspiring Musicians",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
  },
  {
    image: image3,
    heading: "Jazz Improvisation Demystified: Tips for Aspiring Musicians",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
  },
];

export default function HeroSection() {
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
    arrows: false,
  };
  return (
    <section className="relative w-full h-auto min-h-full pb-28 bg-gradient-to-r from-black via-[#541470c7] to-black bg-center ">
      <NavBar />
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000086] via-[#54147005] to-[#000000fe] " />
      <div className=" w-full h-auto flex flex-col justify-center items-center z-10 text-white relative px-3">
        <input
          placeholder="Search"
          className=" w-full sm:w-96 mx-auto rounded-full border-2 border-[#9C85B2] p-3 bg-transparent outline-none mt-32"
        />
        <h1 className=" text-2xl md:text-4xl lg:text-6xl font-medium mt-36">
          BeyondRiffs
          <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
            {""} Academy
          </span>
        </h1>
        <p className=" text-2xl mt-9 tracking-widest font-thin text-center">
          Unleashing Your Music Potential Online
        </p>
        <button className="bg-gradient-to-r from-custom-purple-1 mt-12 via-custom-purple-2 to-custom-purple-3 text-white  py-4 px-7 text-xl rounded-2xl hover:opacity-80">
          Book free trial
        </button>
      </div>
      <div className=" text-white p-10 md:p-28">
        <div className=" flex items-center justify-between mb-12">
          <h3 className="text-2xl font-semibold">Featured</h3>
          <div className=" flex items-center gap-7 text-2xl font-semibold">
            <p>Tag</p>
            <p>Tag</p>
          </div>
        </div>
        <div className=" ">
          <Slider
            {...settings}
            className="relative w-full h-full bg-transparent "
          >
            {data.map((el, index) => (
              <div
                key={index}
                className="w-full h-[600px] rounded-3xl overflow-hidden"
              >
                <div className="relative flex flex-row justify-between items-center w-full h-full ">
                  <div className=" absolute w-full h-full z-10 bg-black bg-opacity-30" />
                  <div className=" absolute z-20  w-full  flex flex-col justify-center text-center items-center gap-6 p-6">
                    <h1 className="text-white text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-medium leading-10">
                      {el.heading}
                    </h1>
                    <p className="text-white text-base md:text-lg tracking-wide">
                      {el.content}
                    </p>
                    <button className="bg-gradient-to-r from-custom-purple-1 mt-12 via-custom-purple-2 to-custom-purple-3 text-white  py-4 px-7 text-xl rounded-2xl hover:opacity-80">
                      Read more
                    </button>
                  </div>
                  <div className="w-full  h-full overflow-hidden ">
                    <img
                      className="w-full h-full object-cover object-center "
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
        </div>
      </div>
    </section>
  );
}
