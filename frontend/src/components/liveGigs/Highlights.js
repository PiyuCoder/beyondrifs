import React from 'react';
import StarryBackground from '../StarryBackground';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { SlMicrophone } from 'react-icons/sl';
import { PiMusicNotesPlusLight } from 'react-icons/pi';
import { CiGlobe } from 'react-icons/ci';

function Highlights() {
  return (
    <section className="w-full h-auto z-0 relative mt-20 text-white">
      <StarryBackground />
      <div className="w-full bg-custom-gradient-bpb-v opacity-70 p-10 lg:p-20">
        
        <div className="w-full py-20 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
              <div className="p-4 sm:p-6 border border-gray-500 rounded-full flex items-center justify-center">
                <HiOutlineUserGroup className="text-5xl" />
              </div>
              <span className="font-semibold text-xl sm:text-2xl">
                Interactive sessions
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
              <div className="p-4 sm:p-6 border border-gray-500 rounded-full flex items-center justify-center">
                <SlMicrophone className="text-5xl" />
              </div>
              <span className="font-semibold text-xl sm:text-2xl">
                Diverse genre
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
              <div className="p-4 sm:p-6 border border-gray-500 rounded-full flex items-center justify-center">
                <PiMusicNotesPlusLight className="text-5xl" />
              </div>
              <span className="font-semibold text-xl sm:text-2xl">
                Expert guidance
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
              <div className="p-4 sm:p-6 border border-gray-500 rounded-full flex items-center justify-center">
                <CiGlobe className="text-5xl" />
              </div>
              <span className="font-semibold text-xl sm:text-2xl">
                Community building
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
