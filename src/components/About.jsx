import React from 'react';

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
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-center text-lg font-bold'>
              <p className='text-amber-500'>Hi, I'm Shabaz, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='text-md text-justify text-emerald-500'>I am skilled at MERN Stack, HTML, CSS, JavaScript, Data Structure and Algorithm and a good record with project success.Professional, capable and motivated individual who consistently performs in challenging environments.Able to meet strict deadlines and willing to work as a key player in challenging and creative environment.My objectives are increasing my knowledge in computer science fields and new technologies especially, web development and web design field.Always looking forward to learn new technologies. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;