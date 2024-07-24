import React, { useRef } from 'react';
import EventBox from './EventBox';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import img1 from '../../assets/images/gigs-img3.png';
import img2 from '../../assets/images/gigs-img4.png';
import img3 from '../../assets/images/gigs-img5.jpeg';
import img4 from '../../assets/images/IndiBlog-img1.jpg';
import img5 from '../../assets/images/IndiBlog-img2.jpg';
import img6 from '../../assets/images/IndiBlog-img3.jpg';
import StarryBackground from '../StarryBackground';

const Carousel = () => {
  const carouselRef = useRef(null);

  const events = [
    {
      id: 1,
      title: 'Rock on Artist Meetup',
      description:
        'Lorem ipsum dolor sit amet consectetur. Arcu habitant curabitur ut cras.',
      date: '10 June 2024',
      image: img1,
    },
    {
      id: 2,
      title: 'Weekend night Jam',
      description:
        'Lorem ipsum dolor sit amet consectetur. Arcu habitant curabitur ut cras.',
      date: '21 June 2024',
      image: img2,
    },
    {
      id: 3,
      title: 'Harmony Nights',
      description:
        'Lorem ipsum dolor sit amet consectetur. Arcu habitant curabitur ut cras.',
      date: '25 June 2024',
      image: img3,
    },
    {
      id: 4,
      title: 'Harmony Nights',
      description:
        'Lorem ipsum dolor sit amet consectetur. Arcu habitant curabitur ut cras.',
      date: '25 June 2024',
      image: img4,
    },
    {
      id: 5,
      title: 'Harmony Nights',
      description:
        'Lorem ipsum dolor sit amet consectetur. Arcu habitant curabitur ut cras.',
      date: '25 June 2024',
      image: img5,
    },
    {
      id: 6,
      title: 'Harmony Nights',
      description:
        'Lorem ipsum dolor sit amet consectetur. Arcu habitant curabitur ut cras.',
      date: '25 June 2024',
      image: img6,
    },
  ];

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full h-auto text-white z-0 p-10 lg:p-20 mt-20">
      <StarryBackground />
      <div className="w-full flex flex-col">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold mb-16">
          Previous
          <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
            {''} Event
          </span>
        </h1>
        <div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scrollbar-hide lg:overflow-hidden gap-5"
        >
          {events.map((event) => (
            <EventBox key={event.id} event={event} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-row justify-center items-center gap-6 mt-20">
        <div className="hidden sm:flex">
          <button
            onClick={handlePrevClick}
            className="text-white p-2 rounded-2xl shadow-md focus:outline-none px-8 py-4 bg-custom-gradient-gigs-btn"
          >
            <IoIosArrowBack className="text-xl" />
          </button>
        </div>
        <div className="hidden sm:flex ">
          <button
            onClick={handleNextClick}
            className="text-white p-2 rounded-2xl shadow-md focus:outline-none px-8 py-4 bg-custom-gradient-gigs-btn"
          >
            <IoIosArrowForward className="text-xl" />
          </button>
        </div>
      </div>
      <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold -mb-28 md:-mb-36 mt-20">
        Features
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#420565] via-[#6A0B90] to-white">
          {''} Highlights
        </span>
      </h1>
    </div>
  );
};

export default Carousel;
