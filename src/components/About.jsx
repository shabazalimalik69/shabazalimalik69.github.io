import React from 'react';
import { HiArrowUp } from 'react-icons/hi';
import Image from '../logos/img5.png';

const About = () => {
  return (
    <div name='about' className='w-full h-full py-40 bg-[#263d5e] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold '>
              About
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-center text-lg font-bold'>
              <p className='text-amber-500'>Hi, I'm Shabaz, it’s great connecting with you and thanks for your precious time.</p>
              <img className='py-6 h-10/12 w-4/5 rounded-full'  src={Image} alt="Photo" />
            </div>
            <div>
              <p className='text-md text-justify text-emerald-500'>I am skilled at HTML5, CSS3, JavaScript, React Js, Redux, Express Js, Node Js, Mongo DB, Data Structure and Algorithm and a good record with project success. Professional, capable and motivated individual who consistently performs in challenging environments. Able to meet strict deadlines and willing to work as a key player in challenging and creative environment.My objectives are increasing my knowledge in computer science fields and new technologies especially, web development and web design field. Always looking forward to learn new technologies.</p>  
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <div class="px-10"  >
            <button className='text-white group border-2 px-4 py-3 my-2 rounded-md flex items-center hover:bg-green-500 hover:border-[#153441] hover:text-rose-900'>
            <a href='https://drive.google.com/file/d/1zAX5byv9xyxmRRTfqjJ1V5ktP0Tau55x/view?usp=sharing' smooth={true} duration={500} rel="noreferrer" target="_blank">
            Download CV
          </a>
            <span className='group-hover:rotate-90 duration-300'>
             <HiArrowUp/> 
             </span>
             </button>
        </div>
            </div>
            
          </div>
      </div>
    </div>
  );
};

export default About;