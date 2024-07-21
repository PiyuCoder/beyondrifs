import React from 'react';
import { FaRegClock } from 'react-icons/fa6';
import { VscAccount } from 'react-icons/vsc';
import { GoFileDirectory } from 'react-icons/go';
import { BiCommentDetail } from 'react-icons/bi';

export default function IndiExplore() {
  return (
    <div className=" w-full h-auto text-white p-10 lg:p-20 flex flex-col gap-10">
      <h1 className="font-semibold text-4xl md:text-6xl">
        Unlocking the Secrets of Guitar Chords: From Basics to Barre
      </h1>
      <div>
        <div className="flex items-center mb-4">
          <p className="flex-shrink-0 flex flex-row items-center gap-3">
            <FaRegClock className="w-6 h-6" />
            <span className="w-40">June 27, 2024</span>{' '}
          </p>
          <p className="flex-grow flex flex-row justify-center items-center gap-3">
            <VscAccount className="w-6 h-6" />
            <span>Author name</span>
          </p>
        </div>

        <div className="flex items-center">
          <p className="flex-shrink-0 flex flex-row items-center gap-3">
            <GoFileDirectory className="w-6 h-6" />
            <span className="w-40">Category</span>{' '}
          </p>
          <p className="flex-grow flex justify-center items-center gap-3">
            <BiCommentDetail className="w-6 h-6" />
            <span>20 Comments</span>
          </p>
        </div>
      </div>

      <div className="w-full pt-10">
        <h2 className="font-semibold text-2xl mb-10 md:3xl">
          Are you ready to explore the enchanting world of guitar chords?{' '}
        </h2>
        <p className="font-normal text-lg mb-5">
          Beyondriffs invites you to strum, learn, and create! 🎶{' '}
        </p>
        <p className="font-normal text-lg mb-5">
          In this blog post, we’ll explore the fascinating world of guitar
          chords. Whether you’re a seasoned guitarist or just picking up your
          first six-string, this blog post is your backstage pass to the
          captivating world of guitar chords. Imagine standing on a musical
          precipice, ready to leap into a symphony of sound.
        </p>
        <p className="font-normal text-lg mb-5">
          Picture yourself sitting with your guitar, fingers poised over the
          frets. The wood hums under your touch, and the strings await your
          command.<br></br> Whether you’re strumming a simple C major or wrestling with
          the elusive F barre chord, every note holds a universe of
          possibilities.{' '}
        </p>
        <p className="font-normal text-lg mb-5">
          No more further delay, Let’s dive in!
        </p>
      </div>
    </div>
  );
}
