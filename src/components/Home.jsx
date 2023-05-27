import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>        
        <p className='text-pink-600'>Hi, I am</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mo Yasir</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Front-end Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I have an expertise in building (and ocassionally designing) exceptional digital experiences. Currently, I'm focused on
        building responsive front-end apps using react/redux and angular.
        </p>
        <div>
          <button className='text-white border-2 px-5 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 group'>
          View Work 
          <span className='group-hover:rotate-90 duration-300 ml-2'>
          <HiArrowNarrowRight />
          </span></button>
        </div>
      </div>
    </div>

  )
}

export default Home