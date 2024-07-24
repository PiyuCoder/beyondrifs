import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/images/blog-img1.jpeg";
import image2 from "../../assets/images/blog-img2.jpeg";
import image3 from "../../assets/images/blog-img3.jpeg";
import image4 from "../../assets/images/blog-img4.jpeg";
import image5 from "../../assets/images/blog-img5.jpeg";
import image6 from "../../assets/images/blog-img6.jpeg";
import image7 from "../../assets/images/blog-img7.jpeg";
import image8 from "../../assets/images/blog-img8.jpeg";
import image9 from "../../assets/images/blog-img9.jpeg";
import { useNavigate } from "react-router-dom";

const imagesArr = [
  {
    image: image1,
    heading: "Unlocking the Secrets of Guitar Chords: From Basics to Barre",
    content:
      "Explore different types of guitar chords, from simple open chords to complex barre chords.",
    name: "guitar",
    url: "/about/individualblog",
  },
  {
    image: image2,
    heading: "Unlocking the Secrets of Guitar Chords: From Basics to Barre",
    content:
      "Explore different types of guitar chords, from simple open chords to complex barre chords.",
    name: "guitar",
    url: "/about/individualblog",
  },
  {
    image: image3,
    heading: "Unlocking the Secrets of Guitar Chords: From Basics to Barre",
    content:
      "Explore different types of guitar chords, from simple open chords to complex barre chords.",
    name: "guitar",
    url: "/about/individualblog",
  },
  {
    image: image4,
    heading: "Unlocking the Secrets of Guitar Chords: From Basics to Barre",
    content:
      "Explore different types of guitar chords, from simple open chords to complex barre chords.",
    name: "guitar",
    url: "/about/individualblog",
  },
  {
    image: image5,
    heading: "Unlocking the Secrets of Guitar Chords: From Basics to Barre",
    content:
      "Explore different types of guitar chords, from simple open chords to complex barre chords.",
    name: "guitar",
    url: "/about/individualblog",
  },
  {
    image: image6,
    heading: "Unlocking the Secrets of Guitar Chords: From Basics to Barre",
    content:
      "Explore different types of guitar chords, from simple open chords to complex barre chords.",
    name: "guitar",
    url: "/about/individualblog",
  },
  {
    image: image7,
    heading: "Unlocking the Secrets of Guitar Chords: From Basics to Barre",
    content:
      "Explore different types of guitar chords, from simple open chords to complex barre chords.",
    name: "guitar",
    url: "/about/individualblog",
  },
  {
    image: image8,
    heading: "Unlocking the Secrets of Guitar Chords: From Basics to Barre",
    content:
      "Explore different types of guitar chords, from simple open chords to complex barre chords.",
    name: "guitar",
    url: "/about/individualblog",
  },
  {
    image: image9,
    heading: "Unlocking the Secrets of Guitar Chords: From Basics to Barre",
    content:
      "Explore different types of guitar chords, from simple open chords to complex barre chords.",
    name: "guitar",
    url: "/about/individualblog",
  },
];

export default function BlogImages() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  return (
    <section className=" w-full h-auto">
      <div className=" w-full p-5 md:px-28 flex flex-wrap gap-8 justify-center items-center">
        {imagesArr.map((el, i) => (
          <div
            key={i}
            onMouseOver={() => setSelected(i)}
            onMouseLeave={() => setSelected(null)}
            className=" relative w-96 h-72 overflow-hidden rounded-3xl cursor-pointer transition"
            onClick={() => navigate(el.url)}
          >
            <img
              src={el.image}
              className=" object-cover object-center h-full w-full"
            />
            {selected === i && (
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 h-1/2 w-full bg-black bg-opacity-65 rounded-t-3xl text-white p-4 text-center"
              >
                <h2 className="text-xl font-medium">"{el.heading}"</h2>
                <p className="text-xs px-5 mt-2">{el.content}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <div className=" w-full flex justify-center mt-12">
        <button className=" text-white p-3 px-7 text-lg rounded-2xl bg-gradient-to-r from-[#55555553] to-[#b198bf5f] ">
          View all
        </button>
      </div>
    </section>
  );
}
