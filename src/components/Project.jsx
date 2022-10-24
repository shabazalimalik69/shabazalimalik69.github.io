import React from 'react'
import bewakoof from '../logos/bewakoof.jpeg';
import sephora from '../logos/sephora.jpeg';
import surveymonkey from '../logos/surveymonkey.jpeg';
import harvest from '../logos/harvest.jpeg';



const Project = () => {
  return (
   <div name='projects' className='w-full md:h-full text-gray-300 bg-[#263d5e]'>
    <div className='max-w-[1000px] mx-auto px-4 py-40 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold text-center p-8'>
          Projects
        </p>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8'>
      <div
      style={{ backgroundImage: `url(${harvest})` }}
      className='shadow-lg shadow-[#040c16] group container p-8 rounded-md flex justify-center items-center mx-auto content-div'
      >
      <div className='opacity-0 group-hover:opacity-100'>
      <h1 className='text-2xl py-4 text-center font-bold text-white tracking-wider'>Harvest</h1>
       <h3 className='sm:text-1xl py-4 text-center font-bold text-amber-800 tracking-wider'>
        Tech Stack: React js, Redux, Chakra UI
      </h3>
      <p className='text-justify text-black'>Harvest is a time-tracking app for freelancers that includes invoicing, expensing, and team management features....</p>
      <div className='pt-8 flex justify-around'>
        <a href='https://ourharvestclone.netlify.app/' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>
            Deploy
          </button>
        </a>
        <a href='https://github.com/shabazalimalik69/afraid-shoe-4639' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>
            GitHub
          </button>
        </a>
      </div>
      </div>
      </div>

      <div
      style={{ backgroundImage: `url(${surveymonkey})` }}
      className='shadow-lg shadow-[#040c16] group container p-8 rounded-md flex justify-center items-center mx-auto content-div'
      >
      <div className='opacity-0 group-hover:opacity-100'>
      <h1 className='text-2xl py-4 text-center font-bold text-white tracking-wider'>SurveyMonkey</h1>
       <h3 className='text-1xl py-4 text-center font-bold text-amber-800 tracking-wider'>
        Tech Stack: React Js, Chakra UI
      </h3>
      <p className='text-justify text-black'>SurveyMonkey is the world's leading People Powered Data platform...</p>
      <div className='pt-8 flex justify-around'>
        <a href='https://isnt-shabazalimalik69-gmail-com-awesome-52259.netlify.app/' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>
            Deploy
          </button>
        </a>
        <a href='https://github.com/shabazalimalik69/-pumped-pot-3496' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>
            GitHub
          </button>
        </a>
      </div>
      </div>
      </div>

      <div
      style={{ backgroundImage: `url(${bewakoof})` }}
      className='shadow-lg shadow-[#040c16] group container p-8 rounded-md flex justify-center items-center mx-auto content-div'
      >
      <div className='opacity-0 group-hover:opacity-100'>
      <h1 className='text-2xl py-4 text-center font-bold text-white tracking-wider'> BEWAKOOF </h1>
       <h3 className='text-1xl py-4 text-center font-bold text-amber-800 tracking-wider'>
        Tech Stack: HTML, CSS, JS
      </h3>
      <p className='text-justify text-black'>BEWAKOOF is an Online Shopping site for Men and Women Clothing...</p>
      <div className='pt-8 flex justify-around'>
        <a href='https://jazzy-cocada-65d352.netlify.app/' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>
            Deploy
          </button>
        </a>
        <a href='https://github.com/11-DEEPAK-KUMAR-11/Bewakoof_website' target="_blank">
          <button className='text-center rounded-lg px-4  py-3 m-2 bg-white text-gray-700 font-bold text-md'>
            GitHub
          </button>
        </a>
      </div>
      </div>
      </div>
       
     <div
      style={{ backgroundImage: `url(${sephora})` }}
      className='shadow-lg shadow-[#040c16] group container p-8 rounded-md flex justify-center items-center mx-auto content-div'
      >
      <div className='opacity-0 group-hover:opacity-100'>
      <h1 className='text-2xl py-4 text-center font-bold text-white tracking-wider'> SEPHORA </h1>
       <h3 className='text-1xl py-4 text-center font-bold text-amber-800 tracking-wider'>
       Tech Stack: HTML, CSS, JS
      </h3>
      
      <p className='text-justify text-black'>SEPHORA is a French multinational retailer of personal care and beauty products..</p>
      <div className='pt-8 flex justify-around'>
        <a href='https://stellular-fox-5ba872.netlify.app/' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>
            Deploy
          </button>
        </a>
        <a href='https://github.com/BishalPatgiri/SEPHORA-E-commerce-Website' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>
            GitHub
          </button>
        </a>
      </div>
      </div>
      </div>

      </div>
    </div>
   </div>   
   
  )
}

export default Project