import React from 'react'
import img1 from '../../assets/images/IndiBlog-img6.png'
import img2 from '../../assets/images/IndiBlog-img7.png'
import img3 from '../../assets/images/IndiBlog-img8.jpg'

function IndiRecentpost() {
  return (
    <section className=" w-full h-auto min-h-full text-white p-10 lg:p-20 flex flex-col gap-10">
        <h2 className="font-semibold text-3xl mb-6 text-start">Recent Posts</h2>
        <div className='w-full flex flex-col sm:flex-row items-center justify-center gap-20'>
            <a href='#'><img src={img1} alt='post' className='rounded-xl w-96 h-56 sm:w-96 sm:h-80 object-center object-cover'/></a>
            <a href='#'><img src={img2} alt='post' className='rounded-xl w-96 h-56 sm:w-96 sm:h-80 object-center object-cover'/></a>
            <a href='#'><img src={img3} alt='post' className='rounded-xl w-96 h-56 sm:w-96 sm:h-80 object-center object-cover'/></a>
        </div>
    </section>
  )
}

export default IndiRecentpost