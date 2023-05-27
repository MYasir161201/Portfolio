import React from 'react'
import netflix from '../assets/projects/NetflixApp.png'
import foodvilla from '../assets/projects/Foodvilla-ss.png'
import forkify from '../assets/projects/Forkify-ss.png'

const Work = () => {
  return (
    <div name='work' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
        {/* main container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Work</p>
                <p className='py-6'>Check out some of my recent works</p>
            </div>
            
            {/* small container for grids */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* grid items */}
                <div style={{backgroundImage:`url(${netflix})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href='https://netflix-clone-e7622.web.app/' target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/MYasir161201/Netflix-clone' target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${foodvilla})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href='https://foodvilla16.netlify.app/' target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/MYasir161201/FoodVilla' target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${forkify})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href='https://forkify-yasir.netlify.app/' target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/MYasir161201/forkify' target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work
