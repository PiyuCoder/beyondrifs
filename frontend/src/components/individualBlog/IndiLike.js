import React from 'react'
import {  BiLike, BiCommentDetail  } from 'react-icons/bi';
import { AiFillLike } from "react-icons/ai";
import { LuEye } from "react-icons/lu";

function IndiLike() {
  return (
    <section className=" w-full h-auto text-white">
    <div className='w-full flex flex-col justify-center items-center bg-custom-gradient-bpb-v opacity-70  p-10 lg:p-20'>
            <div className='p-3 rounded-full bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3'>
              <AiFillLike className='text-4xl sm:text-5xl'/>
            </div>
            <h2 className='font-semibold text-xl sm:text-3xl text-center mt-5'>Unlocking the Secrets of Guitar Chords<br/>
            From Basics to Barre </h2>
            <div className='w-full flex flex-row justify-center items-center gap-6 sm:gap-10 my-10'>
              <span className='text-xl sm:text-2xl flex items-center gap-2'><BiLike/>4</span>
              <span className='text-xl sm:text-2xl flex items-center gap-2'><LuEye/>77</span>
              <span className='text-xl sm:text-2xl flex items-center gap-2'><BiCommentDetail/>4</span>
            </div>
            <p className='font-normal text-xs sm:text-sm'>Published : November 2023</p>
      </div>
    </section>
  )
}

export default IndiLike