import pianoOverview from "../../assets/images/piano2.png";
import guitarOverview from "../../assets/images/guitar2.png";
import ukuleleOverview from "../../assets/images/ukulele2.png";
import musicProductionOverview from "../../assets/images/musicProduction2.png";

export const courses = {
  piano: {
    name: "piano",
    title: "Piano Course",
    description:
      "Find the perfect course to enhance your musical skills and knowledge.",
    image: "/images/piano.jpg",
    overviewImg: pianoOverview,
  },
  guitar: {
    name: "guitar",
    title: "Guitar Course",
    description: "Master the guitar with our expert lessons.",
    image: "/images/guitar.jpg",
    overviewImg: guitarOverview,
  },
  ukulele: {
    name: "ukulele",
    title: "Ukulele Course",
    description: "Strum along to your favorite songs with our ukulele course.",
    image: "/images/ukulele.jpg",
    overviewImg: ukuleleOverview,
  },
  musicProduction: {
    name: "musicProduction",
    title: "Music Production Course",
    description:
      "Produce professional-quality music with our production course.",
    image: "/images/music-production.jpg",
    overviewImg: musicProductionOverview,
  },
};

export default courses;
