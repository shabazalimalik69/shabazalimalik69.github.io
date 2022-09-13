import React from 'react'
import bewakoof from '../logos/bewakoof.jpeg';
import sephora from '../logos/sephora.jpeg';
import surveymonkey from '../logos/surveymonkey.jpeg';



const Projects = () => {
  return (
   <div name='projects' className='w-full md:h-full text-gray-300 bg-[#263d5e]'>
    <div className='max-w-[1000px] mx-auto px-4 py-40 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold'>
          Projects
        </p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
      <div
      style={{ backgroundImage: `url(${bewakoof})` }}
      className='shadow-lg shadow-[#040c16] group container py-10 px-10 rounded-md flex justify-center items-center mx-auto content-div'
      >
      <div className='opacity-0 group-hover:opacity-100'>
      <h1 className='text-2xl py-4 text-center font-bold text-white tracking-wider'> BEWAKOOF </h1>
       <h3 className='text-1xl py-4 text-center font-bold text-amber-800 tracking-wider'>
        HTML, CSS, JS
      </h3>
      
      <p className='text-justify text-black'>BEWAKOOF is an Online Shopping site for Men and Women Clothing...</p>
      </div>
      </div>

      <div
      style={{ backgroundImage: `url(${surveymonkey})` }}
      className='shadow-lg shadow-[#040c16] group container p-10 rounded-md flex justify-center items-center mx-auto content-div'
      >
      <div className='opacity-0 group-hover:opacity-100'>
      <h1 className='text-2xl py-4 text-center font-bold text-white tracking-wider'>SurveyMonkey</h1>
       <h3 className='text-1xl py-4 text-center font-bold text-amber-800 tracking-wider'>
        React Js
      </h3>
      
      <p className='text-justify text-black'>SurveyMonkey is the world's leading People Powered Data platform...</p>
     
      </div>
      </div>

      <div
      style={{ backgroundImage: `url(${sephora})` }}
      className='shadow-lg shadow-[#040c16] group container p-8 rounded-md flex justify-center items-center mx-auto content-div'
      >
      <div className='opacity-0 group-hover:opacity-100'>
      <h1 className='text-2xl py-4 text-center font-bold text-white tracking-wider'> SEPHORA </h1>
       <h3 className='text-1xl py-4 text-center font-bold text-amber-800 tracking-wider'>
        HTML, CSS, JS
      </h3>
      
      <p className='text-justify text-black'>SEPHORA is a French multinational retailer of personal care and beauty products..</p>
      </div>
      </div>

      </div>
    </div>
   </div>   
   
  )
}

export default Projects