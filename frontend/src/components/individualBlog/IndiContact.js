import React from 'react';
import logo from '../../assets/images/person1.jpeg';

function IndiContact() {
  return (
    <section className=" w-full h-auto text-white p-10 sm:p-20">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-20">
        <div>
          <h3 className="font-semibold text-3xl mb-6 text-center">
            Our Popular Tags
          </h3>
          <div className=" w-80 flex justify-center items-center flex-wrap">
            <a className="text-gray-500 mr-4 underline" href="">
              {' '}
              Tags
            </a>
            <a className="text-gray-500 mr-4 underline" href="">
              {' '}
              Tags
            </a>
            <a className="text-gray-500 mr-4 underline" href="">
              {' '}
              Tags
            </a>
            <a className="text-gray-500 mr-4 underline" href="">
              {' '}
              Tags
            </a>
            <a className="text-gray-500 mr-4 underline" href="">
              {' '}
              Tags
            </a>
            <a className="text-gray-500 mr-4 underline" href="">
              {' '}
              Tags
            </a>
            <a className="text-gray-500 mr-4 underline" href="">
              {' '}
              Tags
            </a>
            <a className="text-gray-500 mr-4 underline" href="">
              {' '}
              Tags
            </a>
            <a className="text-gray-500 mr-4 underline" href="">
              {' '}
              Tags
            </a>
            <a className="text-gray-500 mr-4 underline" href="">
              {' '}
              Tags
            </a>
          </div>
        </div>
        <div className="">
          <div className="w-full flex flex-row items-center gap-4 mb-6">
            <img src={logo} alt="image" className="w-20 h-20 rounded-full" />
            <div>
              <h4 className="font-semibold text-xl">Cristopher columbus</h4>
              <p className="text-lg">Author</p>
            </div>
          </div>
          <textarea
            id="comment"
            name="comment"
            rows="6"
            placeholder="Have you got any insights?"
            className="bg-transparent border-gray-600 border-2 rounded-xl text-gray-400 p-2 outline-none font-normal w-full sm:w-[600px] sm:h-"
          ></textarea>

          <div className="w-full flex justify-center sm:justify-end mt-5">
            <button className="px-6 py-2 sm:px-8 sm:py-5 bg-gradient-to-r from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 rounded-xl sm:rounded-2xl font-medium sm:font-semibold text-base sm:text-xl">
              Post a comment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndiContact;
