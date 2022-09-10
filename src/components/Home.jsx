import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Photo from '../logos/Photo.png';

const Home = () => {
  return (
    <div name="home" className='w-full h-full py-20  bg-[#153441]'>
        <div className='max-w-[1000px] mx-auto py-10 px-8 flex flex-col justify-center h-full'>
            <img className='py-6' src={Photo} alt="Photo" style={{width:'120px'}}  />
            <p className='text-lime-500 '>Hi, my name is</p>
            <h1 className='py-3 text-2xl sm:text-5xl font-bold text-[#ccd6f6]'>Shabaz Ali Malik</h1>
            <h2 className='py-2 font-bold text-amber-900  text-1xl sm:text-2xl'>Full Stack Web Developer</h2>
            <h6 className='text-justify text-[#8892b0] py-4  max-w-[900px] '>
            I am a full stack web developer with excellent knowledge of developing web services and a good record of professional achievement having strong technical, organizational, good communication and interpersonal skills. 
            </h6>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 rounded-md flex items-center hover:bg-green-500 hover:border-[#153441] hover:text-rose-900'>
            <Link to='about' smooth={true} duration={500}>
            View More
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
             <HiArrowNarrowRight/> 
             </span>
             </button>
        </div>
        </div>
    </div>
  )
}

export default Home