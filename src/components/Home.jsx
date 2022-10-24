import React from 'react';
import { HiArrowUp } from 'react-icons/hi';
import Image from '../logos/img4.png';
import resume from './Resume/Shabaz_Malik_Resume.pdf'

const Home = () => {
  return (
    <div name="home" className='w-full h-full py-20  bg-[#153441]'>
        <div className='max-w-[1000px] mx-auto py-10 px-8 flex flex-col justify-center h-full'>
            <img class='py-2 h-1/6 w-2/6  rounded-full bg-no-repeat bg-center'  src={Image} alt="Photo"/>
            <p className='text-amber-500 '>Hey, my name is</p>
            <h1 className='py-3 text-2xl sm:text-5xl font-bold text-[#ccd6f6]'>Shabaz Ali Malik</h1>
            <h2 className='py-2 font-bold text-lime-500  text-1xl sm:text-2xl'>Full Stack Web Developer</h2>
            <h6 className='text-justify text-[#8892b0] py-4  max-w-[900px] '>
            I am a full stack web developer with excellent knowledge of developing web services and a good record of professional achievement having strong technical, organizational, good communication and interpersonal skills. 
            </h6>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 rounded-md flex items-center hover:bg-green-500 hover:border-[#153441] hover:text-rose-900'>
            <a href={resume} download={true}>
            Download Resume
          </a>
            <span className='group-hover:rotate-90 duration-300'>
             <HiArrowUp/> 
             </span>
             </button>
        </div>
        </div>
    </div>
  )
}

export default Home