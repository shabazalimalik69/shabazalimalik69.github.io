import React from 'react';
import { HiArrowDown} from 'react-icons/hi';
import resume from './Resume/Shabaz_Malik_Resume.pdf'

const Home = () => {
  return (
    <div name="home" className='w-full h-full py-20  bg-[#293c42]'>
      <div  className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2  text-center py-8'>
        <div>
        <img class='w-3/5 h-fit mx-auto rounded-full '  src="https://avatars.githubusercontent.com/u/103936619?v=4" alt="Photo"/>
        </div>
      <div className='max-w-[1000px] mx-auto py-10 px-8 flex flex-col justify-center h-full'>
            <p className='text-green-500'>Hello, my name is</p>
            <h1 className='py-3 text-2xl sm:text-5xl font-bold text-white'>Shabaz Ali Malik</h1>
            <h2 className='py-2 font-bold text-amber-500  text-1xl sm:text-2xl'>Full Stack Web Developer</h2>
            <h6 className='text-justify text-green-500 py-4  max-w-[900px] '>
            I am a full stack web developer with excellent knowledge of developing web services and a good record of professional achievement having strong technical, organizational, good communication and interpersonal skills. 
            </h6>
        <div className=' '>
            <button className='text-amber-500 font-bold group border-2 px-6 py-3 my-2 rounded-md inline-flex items-center hover:bg-green-500 hover:border-[#153441] hover:text-rose-900'>
            <a href={resume} download={true}>
            Download Resume
          </a>
            <span>
             <HiArrowDown/> 
             </span>
             </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home