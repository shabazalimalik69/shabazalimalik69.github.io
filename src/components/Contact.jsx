import React from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
FaLinkedin,
FaWhatsapp,
FaTwitter
} from 'react-icons/fa';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full py-12 bg-[#153441]'>
        <div className=' flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/ac8ed8e0-d3c6-479a-b0c8-3f1ade51beb4" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-gray-300'>Contact</p>
                <p className='text-gray-300 flex py-4'>Submit the form below or send me an email on shabazalimalik69@gmail.com</p>
            </div>
            <input className='rounded-md  bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className=' rounded-md my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea  className='rounded-md  bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white h-8 bg-blue-700  rounded-lg hover:bg-green-600 hover:border-[#153441] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
        </div>
       
            <div>
              <ul>
              <li>
                  <a href=""  className='flex px-10 items-center cursor-not-allowed w-full text-gray-300'>
                   
                  <HiPhone size={20} style={{color:"black"}} />
                  <p class="px-2 text-amber-500">+91-7051819135</p>
                  </a>
                </li>
              <li>
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" rel="noreferrer" target="_blank"  className='flex px-10 py-1 items-center w-full text-gray-300'>
                   
                  <HiOutlineMail size={20} style={{color:"black"}} />
                 <p class="px-2 text-amber-500">malikshabaz69@gmail</p>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/shabazalimalik69" rel="noreferrer" target="_blank"  className='flex px-10 py-1 items-center w-full text-gray-300'>
                   
                  <FaGithub style={{backgroundColor:"#333333"}} size={20} />
                 <p class="px-2 text-amber-500"> GitHub</p>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/shabaz-ali-malik-4ab412203/" rel="noreferrer" target="_blank" className='flex px-10 py-1 items-center w-full text-gray-300'>
                   
                  <FaLinkedin size={20} style={{backgroundColor:"blue"}} />
                 <p class="px-2 text-amber-500">Linkedin</p>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/shabazalimalik" rel="noreferrer" target="_blank"  className='flex px-10 py-1 items-center w-full text-gray-300'>
                   
                  <FaTwitter size={20} style={{backgroundColor:"#1E88E5"}} />
                <p class="px-2 text-amber-500">twitter</p>
                  </a>
                </li>
              </ul>
            </div>
            <h3 class="px-14 py-1 text-amber-500">Baramulla, J&K, India</h3>
            <div className='px-10 text-center  sm:text-justify text-md text-white '>
                <p className='text-white text-center  sm:text-end-bottom text-sm py-4' >©Shabaz Ali 2022 All rights reserved..</p>
            </div>
    </div>
  )
}

export default Contact;