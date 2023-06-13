import React from 'react'
import easybuy from '../logos/easybuy1.jpg';
import usermanagement from '../logos/usermanegement.jpg';
import homedecor from '../logos/homedecor.jpg';
import harvest from '../logos/harvest.jpg';
import romofyi from '../logos/romofyi.jpeg';



const Projects = () => {
  return (
   <div name='projects' className='w-full md:h-full text-gray-300 bg-[#293c42]'>
    <div className='max-w-[1000px] mx-auto px-4 py-10 flex flex-col justify-center w-full h-full'>
      <div className='pb-12'>
        <p className='text-4xl font-bold text-center'>
          Projects
        </p>
      </div>
   <div className='grid sm:grid-cols-1 md:grid-cols-1 gap-y-14'>


   <div className='grid sm:grid-cols-1 md:grid-cols-2'>
         <div>
          <img src={romofyi} className='h-full rounded-t-md sm:rounded-l-md rounded-r-none'  />
         </div>

      <div className='bg-gray-400 rounded-b-md sm:rounded-r-md rounded-l-none py-4'  >
      <h1 className='text-2xl py-4 text-center font-bold text-black tracking-wider'>Romofyi</h1>
       <h3 className='sm:text-1xl py-4 text-center font-bold text-amber-800 tracking-wider'>
        Tech Stack: React Js, Redux,Node Js, Express Js, MongoDB Chakra UI
      </h3>
      <p className='text-justify px-4 text-black'>This is a e-commerce website, where users can log in or sign up, explore products, checkout and can do much more in this project.</p>
      <div className='pt-8 flex justify-around'>
        <a href='https://romofyi.netlify.app/' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#5a85d3] text-white font-bold text-md'>
            Deploy
          </button>
        </a>
        <a href='https://github.com/shabazalimalik69/Romofyi_Project' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#5a85d3] text-white font-bold text-md'>
            GitHub
          </button>
        </a>
      </div>
      </div>
     </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2'>
         <div>
          <img src={homedecor} className='h-full rounded-t-md sm:rounded-l-md rounded-r-none'  />
         </div>

      <div className='bg-gray-400 rounded-b-md sm:rounded-r-md rounded-l-none py-4'  >
      <h1 className='text-2xl py-4 text-center font-bold text-black tracking-wider'>HomeDecor-Clone</h1>
       <h3 className='sm:text-1xl py-4 text-center font-bold text-amber-800 tracking-wider'>
        Tech Stack: React Js, Redux,Node Js, Express Js, MongoDB Chakra UI
      </h3>
      <p className='text-justify px-4 text-black'>HomeDecor is a website where user can search for home decoration products like furniture, kids toys and many more</p>
      <div className='pt-8 flex justify-around'>
        <a href='https://homedecorfurniture.vercel.app/' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#5a85d3] text-white font-bold text-md'>
            Deploy
          </button>
        </a>
        <a href='https://github.com/VijaySingh8650/instinctive-start-5063' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#5a85d3] text-white font-bold text-md'>
            GitHub
          </button>
        </a>
      </div>
      </div>
     </div>
    

      <div className='grid sm:grid-cols-1 md:grid-cols-2'>
         <div>
          <img src={harvest} className='h-full rounded-t-md sm:rounded-l-md rounded-r-none'  />
         </div>

      <div className='bg-gray-400 rounded-b-md sm:rounded-r-md rounded-l-none py-4'  >
      <h1 className='text-2xl py-4 text-center font-bold text-black tracking-wider'>Harvest-Clone</h1>
       <h3 className='sm:text-1xl py-4 text-center font-bold text-amber-800 tracking-wider'>
        Tech Stack: React Js, Redux,Node Js, Express Js, MongoDB Chakra UI
      </h3>
      <p className='text-justify px-4 text-black'>Harvest is a time-tracking app for freelancers that includes invoicing, expensing, and team management features....</p>
      <div className='pt-8 flex justify-around'>
        <a href='https://ourharvestclone.netlify.app/' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#5a85d3] text-white font-bold text-md'>
            Deploy
          </button>
        </a>
        <a href='https://github.com/shabazalimalik69/afraid-shoe-4639' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#5a85d3] text-white font-bold text-md'>
            GitHub
          </button>
        </a>
      </div>
      </div>
     </div>
      
     <div className='grid sm:grid-cols-1 md:grid-cols-2'>
         <div>
          <img src={usermanagement} className='h-full rounded-t-md sm:rounded-l-md rounded-r-none'  />
         </div>

      <div className='bg-gray-400 rounded-b-md sm:rounded-r-md rounded-l-none py-4'  >
      <h1 className='text-2xl py-4 text-center font-bold text-black tracking-wider'>UserManagement</h1>
       <h3 className='sm:text-1xl py-4 text-center font-bold text-amber-800 tracking-wider'>
        Tech Stack: React Js, Redux,Node Js, Express Js, MongoDB, Chakra UI
      </h3>
      <p className='text-justify px-4 text-black'>This is a small project where user can create account and then login. After login, a user will be redirected to the homepage. where user can create, update, delete their details.</p>
      <div className='pt-8 flex justify-around'>
        <a href='https://fastidious-narwhal-38c0e0.netlify.app/signin' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#5a85d3] text-white font-bold text-md'>
            Deploy
          </button>
        </a>
        <a href='https://github.com/shabazalimalik69/User_Management_Project' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#5a85d3] text-white font-bold text-md'>
            GitHub
          </button>
        </a>
      </div>
      </div>
     </div>


     
      <div className='grid sm:grid-cols-1 md:grid-cols-2'>
         <div>
          <img src={easybuy} className='h-full rounded-t-md sm:rounded-l-md rounded-r-none'  />
         </div>
      <div className='bg-gray-400 rounded-b-md sm:rounded-r-md rounded-l-none py-4'>
      <h1 className='text-2xl py-4 text-center font-bold text-black tracking-wider'> easyBuy </h1>
       <h3 className='text-1xl py-4 text-center font-bold text-amber-800 tracking-wider'>
       Tech Stack: HTML5, CSS3, Vanilla JS
      </h3>
      
      <p className='text-justify px-4 text-black'>easyBuy is a ecommerce website, where a user can purchase different products like mobile accessories, jewellery related products, laptops, etc</p>
      <div className='pt-8 flex justify-around'>
        <a href='https://easybuy123.netlify.app/html/home.html' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#5a85d3] text-white font-bold text-md'>
            Deploy
          </button>
        </a>
        <a href='https://github.com/shabazalimalik69/easyBuy' target="_blank">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#5a85d3] text-white font-bold text-md'>
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

export default Projects