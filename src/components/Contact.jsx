import React from 'react'
import Phone from '../logos/phone.png';
import Gmail from '../logos/gmail.png';
import Github from '../logos/gitHub.png';
import Twitter from '../logos/twitter.png';
import Address from '../logos/address.png';
import Linkedin from '../logos/linkedin.png';
import { HiExternalLink } from 'react-icons/hi';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full py-10 bg-[#293c42]'>
      <div className='text-4xl justify-center mb-10 flex font-bold text-gray-300'>
      <p >Contact</p>
      </div>
       
      <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8'>
      <div className=' flex justify-center items-center p-4 bg-[#565f69] rounded-md '>
        <form method='POST' action="https://getform.io/f/ac8ed8e0-d3c6-479a-b0c8-3f1ade51beb4" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
               
                <p className='text-green-500 justify-center flex'>Submit the form below</p>
            </div>
            <input className='rounded-md  bg-gray-100 p-2' type="text" placeholder='Name' name='name' />
            <input className=' rounded-md text-black my-4 p-2 bg-gray-100' type="email" placeholder='Email' name='email' />
            <input className=' rounded-md text-black my-4 p-2 bg-gray-100' type="number" placeholder='Phone' name='phone' />
            <textarea  className='rounded-md  bg-gray-100 p-2' name="message" rows="4" placeholder='Message'></textarea>
            <button className='text-white h-8 bg-blue-700  rounded-lg hover:bg-green-600 hover:border-[#153441] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
        </div>
       
            <div>
                <div className='w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-y-8 gap-x-4 text-center py-8'>
              <div className='w-11/12 rounded-md bg-[#565f69] hover:scale-110 duration-500'>
              <img className='w-1/4 py-3 mx-auto' src={Phone} alt="Phone icon" />
              <h2 className='text-white font-bold mb-2'>+91-7051819135</h2>
              </div>
              <div className='w-11/12 rounded-md bg-[#565f69]  hover:scale-110 duration-500'>
                  <img className='w-1/4 py-3 mx-auto' src={Gmail} alt="Gmail icon" />
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" rel="noreferrer" target="_blank"  className='flex justify-center px-10 py-1 w-full text-black'>
                   <h2 className='text-white flex text-xs sm:text-xs font-bold mb-2'>shabaz22328@gmail  <HiExternalLink style={{marginTop:"2px"}}/> </h2>
                   </a>
              </div>
              <div className='w-11/12 rounded-md bg-[#565f69] hover:scale-110 duration-500'>
                  <img className='w-1/4 py-3 mx-auto' src={Linkedin} alt="Linkedin icon" />
                  <a href="https://www.linkedin.com/in/shabaz-ali-malik-4ab412203/" rel="noreferrer" target="_blank" className='flex justify-center '>
                  <h2 className='text-white flex gap-1 font-bold mb-2'>Linkedin  <HiExternalLink style={{marginTop:"4px"}}/> </h2>
                   </a>
              </div>
              <div className='w-11/12 rounded-md bg-[#565f69] hover:scale-110 duration-500'>
                  <img className='w-1/4 py-3 mx-auto' src={Github} alt="Github icon" />
                  <a href="https://github.com/shabazalimalik69" rel="noreferrer" target="_blank"  className='flex justify-center'>
                  <h2 className=' text-white flex gap-1 font-bold mb-2'>Github  <HiExternalLink style={{marginTop:"4px"}}/> </h2>
                   </a>
                 
              </div>
              <div className='w-11/12 rounded-md bg-[#565f69] hover:scale-110 duration-500'>
                  <img className='w-1/4 py-3 mx-auto' src={Twitter} alt="Twitter icon" />
                 <a href="https://twitter.com/shabazalimalik" rel="noreferrer" target="_blank"  className='flex justify-center'>
                 <h2 className=' text-white flex gap-1 font-bold mb-2'>Twitter  <HiExternalLink style={{marginTop:"4px"}} /> </h2>
                 </a>
              </div>
              <div className='w-11/12 rounded-md bg-[#565f69] hover:scale-110 duration-500'>
                  <img className='w-1/4 py-3 mx-auto' src={Address} alt="Address icon" />
                  <a href="https://goo.gl/maps/h4JHAKVztqRyNhRd6" rel="noreferrer" target="_blank"  className='flex justify-center'>
                  <h2 className=' text-white flex gap-1 font-bold mb-2'>Baramulla J&K  <HiExternalLink style={{marginTop:"4px"}}/></h2>
                  </a>
              </div>
            
          </div>
            </div>
      </div>
       
            <div className='px-10 text-center  sm:text-justify text-md text-white '>
                <p className='text-green-500 text-center  sm:text-end-bottom text-sm py-4' >©Shabaz Ali 2022 All rights reserved..</p>
            </div>
    </div>
  )
}

export default Contact;