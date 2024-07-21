import React, { useState } from 'react';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { RiInstagramFill } from 'react-icons/ri';
import { TbSend } from 'react-icons/tb';
import { BiLogoGmail, BiLike, BiCommentDetail  } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { AiFillLike } from "react-icons/ai";
import { LuEye } from "react-icons/lu";
import img1 from '../../assets/images/IndiBlog-img1.jpg';
import img2 from '../../assets/images/IndiBlog-img2.jpg';
import img3 from '../../assets/images/IndiBlog-img3.jpg';
import img4 from '../../assets/images/IndiBlog-img4.jpg';
import img5 from '../../assets/images/IndiBlog-img5.jpg';

function IndiContent() {
  const [email, setEmail] = useState('');
  const handleClick = () => {
    console.log(email);
  };
  return (
    <section className=" w-full h-auto min-h-full text-white p-10 lg:p-20 flex flex-col gap-10">
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="text-white">
          <h2 className="font-semibold text-3xl md:text-5xl mb-5">
            Table of Content
          </h2>
          <p className="flex flex-row items-center text-xl  md:text-2xl font-normal mb-4">
            <BsDot />
            Introduction
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            The Foundation : Open Chords
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            The Challenges : Barre Chords
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            Tips and Tricks
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            Conclusion
          </p>
        </div>
        <div className="w-full md:w-auto mx-auto md:mx-0">
          <div className="flex flex-col justify-center items-center w-80 sm:96 h-64 bg-indi-content rounded-[20px] px-4 py-2">
            <h3 className="flex flex-row items-center gap-2 font-semibold text-3xl mb-2">
              Subscribe
              <span>
                <BiLogoGmail />
              </span>
            </h3>
            <div className="w-full relative mb-4">
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border rounded-3xl px-2 py-4"
              />
              <button
                onClick={handleClick}
                className="absolute top-0 right-0 text-2xl px-2 py-4 pr-4 bg-transparent z-10"
              >
                <TbSend />
              </button>
            </div>
            <p className="font-semibold text-lg mb-8">Follow us</p>
            <div className="w-full flex flex-row items-center justify-evenly">
              <a
                href="#"
                className="text-white bg-purple-600 w-12 h-12 flex items-center justify-center rounded-3xl"
              >
                <RiInstagramFill className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-white bg-purple-600 w-12 h-12 flex items-center justify-center rounded-3xl"
              >
                <IoLogoTwitter className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-white bg-purple-600 w-12 h-12 flex items-center justify-center rounded-3xl"
              >
                <IoLogoLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-20 mt-4">
        <div className="w-full sm:w-1/3 h-1/2">
          <h3 className="font-semibold text-3xl mb-6">Introduction</h3>
          <p className="font-normal text-lg text-justify">
            The guitar, a plucked stringed instrument, has a rich history dating
            back to 16th-century Spain. Its evolution has given birth to various
            types and styles, from classical to electric. Whether you’re
            strumming chords or shredding solos, the guitar invites you to
            explore melodies, rhythms, and harmonies. So, grab your pick, tune
            those strings, and let the music begin!{' '}
          </p>
        </div>
        <div className="w-full sm:w-2/3">
          <img
            src={img1}
            className="rounded-2xl w-full sm:h-96 object-cover object-center"
          />
        </div>
      </div>

      {/* Foundation */}
      <div className="mt-10">
        <h3 className="font-semibold text-3xl mb-6">
          The Foundation: Open Chords
        </h3>
        <h4 className="font-semibold text-2xl mb-4">What Are Open Chords?</h4>
        <p className="font-normal text-lg mb-5">
          Open chords are the building blocks of guitar playing. They’re called
          “open” because they use open strings (strings played without
          fretting). These chords are usually the first ones beginners learn.
          Some common open chords include:
        </p>

        <div className="w-full flex flex-col sm:flex-row  gap-6">
          <div className="w-full sm:w-1/2">
            <img
              src={img2}
              alt="image"
              className=" object-cover object-center rounded-2xl w-full sm:h-72 "
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-around gap-4 sm:gap-0">
            <div className="font-normal text-xl sm:text-2xl flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />C Major :
              </p>
              <p className="flex-1">
                A joyful and bright chord that sets the tone for countless
                songs.
              </p>
            </div>
            <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />G Major :
              </p>
              <p className="flex-1">
                A versatile chord with a warm sound, perfect for strumming.
              </p>
            </div>
            <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />D Major :
              </p>
              <p className="flex-1">
                A powerful chord that adds energy to your playing.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h4 className="font-semibold text-2xl mb-4">
            How to Play Open Chords?
          </h4>
          <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between">
            <p className="font-semibold flex items-center mr-2">
              1. Finger Placement :{' '}
            </p>
            <p className="flex-1">
              Place your fingers on the fretboard according to the chord
              diagram.
            </p>
          </div>
          <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between mt-10">
            <p className="font-semibold flex items-center mr-2">
              2. Strumming :
            </p>
            <p className="flex-1">
              Strum from the top (lowest-pitched) string to the bottom
              (highest-pitched) string.
            </p>
          </div>
        </div>
      </div>

      {/* Challenges */}
      <div className="mt-20">
        <h3 className="font-semibold text-3xl mb-6">
          The Challenge: Barre Chords
        </h3>
        <h4 className="font-semibold text-xl sm:text-2xl  mb-4">What Are Barre Chords?</h4>
        <p className="font-normal text-lg mb-5">
          Barre chords (or “bar chords”) involve using one finger to press down
          multiple strings across the fretboard. They allow you to play any
          chord in any key. Common barre chords include:
        </p>

        <div className="w-full flex flex-col sm:flex-row  gap-6">
          <div className="w-full sm:w-1/2">
            <img
              src={img3}
              alt="image"
              className=" object-cover object-center rounded-2xl w-full sm:h-72 "
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col gap-4 sm:gap-0 justify-around">
            <div className="ont-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />F Major :
              </p>
              <p className="flex-1">
                A tricky chord that requires barring the entire first fret.
              </p>
            </div>
            <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />B Major :
              </p>
              <p className="flex-1">
                A moody chord that adds depth to your playing.
              </p>
            </div>
            <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />E Major :
              </p>
              <p className="flex-1">A staple chord for rock and pop tunes. </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h4 className="font-semibold text-2xl mb-4">
            Mastering Barre Chords
          </h4>
          <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between">
            <p className="font-semibold flex items-center mr-2">
              1. The Barre Finger :{' '}
            </p>
            <p className="flex-1">
              Use your index finger to press down all the strings at a specific
              fret.
            </p>
          </div>
          <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between mt-10">
            <p className="font-semibold flex items-center mr-2">
              2. Thumb Placement :{' '}
            </p>
            <p className="flex-1">
              Position your thumb behind the neck for stability.
            </p>
          </div>
          <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between mt-10">
            <p className="font-semibold flex items-center mr-2">
              3. Practice :{' '}
            </p>
            <p className="flex-1">
              Start with partial barre chords (e.g., F minor) before tackling
              full barre chords.
            </p>
          </div>
        </div>
      </div>

      {/* Tips and Tricks */}
      <div className="w-full mt-10">
        <h3 className="font-semibold text-3xl mb-8">
        Tips and Tricks
        </h3>
        <div className="w-full flex flex-col sm:flex-row  gap-6">
          <div className="3/5 flex flex-col justify-between gap-4 sm:gap-0">
            <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />Relax Your Hand : 
              </p>
              <p className="flex-1">
              Tension makes barre chords harder. Keep your hand relaxed.
              </p>
            </div>
            <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />Roll Your Finger : 
              </p>
              <p className="flex-1">
              Roll your index finger slightly to cover the strings evenly.
              </p>
            </div>
            <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />Patience : 
              </p>
              <p className="flex-1">
              Barre chords take time. Be patient and practice consistently.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-2/5">
            <img
              src={img4}
              alt="image"
              className=" object-cover object-center rounded-2xl w-full sm:h-72 "
            />
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className='w-full mt-20'>
      <h3 className="font-semibold text-3xl mb-8">
        Conclusion
        </h3>
        <div className='w-full'>
          <img src={img5} alt='image'className=" object-cover object-center rounded-2xl w-full h-40 sm:h-80" />
        </div>
        <div className='mt-10'>
          <p className='font-normal text-lg sm:text-xl mb-5'>Unlocking the secrets of guitar chords is like discovering hidden treasures. Embrace the challenge, practice diligently, and soon you’ll be playing your favorite songs with confidence. 🎵✨</p>
          <p className='font-normal text-lg sm:text-xl mb-5'>Remember, Beyondriffs is here to support your musical journey. Happy strumming! 🎸</p>
        </div>
      </div>

      {/* Like */}
      
    </section>
  );
}

export default IndiContent;
