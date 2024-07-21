import React from 'react';
import NavBar from '../../components/NavBar';
import IndiExplore from '../../components/individualBlog/IndiExplore';
import IndiContent from '../../components/individualBlog/IndiContent';
import IndiLike from '../../components/individualBlog/IndiLike';
import IndiContact from '../../components/individualBlog/IndiContact';
import IndiRecentpost from '../../components/individualBlog/IndiRecentpost';
import IndiFooter from '../../components/individualBlog/IndiFooter';

function IndividualBlog() {
  return (
    <div className=" w-full h-full min-h-auto overflow-y-auto  bg-black">
      <section class="relative w-full h-3/6 sm:h-5/6 bg-indiBlog bg-cover bg-center lg:bg-no-center lg:bg-left lg:bg-no-repeat">
        <NavBar />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff00] to-[#000000e2] "></div>
      </section>
      <IndiExplore/>
      <IndiContent/>
      <IndiLike/>
      <IndiContact/>
      <IndiRecentpost/>
      <IndiFooter/>
    </div>
  );
}

export default IndividualBlog;
