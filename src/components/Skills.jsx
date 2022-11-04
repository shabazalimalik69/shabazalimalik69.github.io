import React from 'react'
import Frontend from '../logos/frontend.png';
import Backend from '../logos/backend.png';
import Dsa from '../logos/dsa.png';
import Communication from '../logos/communication.png';

const TechStack = () => {
  return (
    <div name="techStack" className='w-full h-full py-20  bg-[#263d5e]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl py-8 text-white font-bold text-center'>Skills</p>
          </div>

          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-40 py-4 mx-auto' src={Frontend} alt="Frontend icon" />
                  <p className='my-4 text-white'>Frontend</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-40 py-4 mx-auto' src={Dsa} alt="DSA icon" />
                  <p className='my-4 text-white'>Data Structure & Algorithm</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-40 h-28 py-3 mx-auto' src={Backend} alt="Backend icon" />
                  <p className='my-4 text-white'>Backend</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-40 h-28 py-3 mx-auto' src={Communication} alt="Communication icon" />
                  <p className='my-4 text-white'>Communication Skills</p>
              </div>
            
          </div>
      </div>
    </div>
  )
}

export default TechStack
