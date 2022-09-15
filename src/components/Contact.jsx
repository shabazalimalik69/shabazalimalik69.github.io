import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full py-12 bg-[#153441]'>
        <div className=' flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/ac8ed8e0-d3c6-479a-b0c8-3f1ade51beb4" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or send me an email on shabazalimalik69@gmail.com</p>
            </div>
            <input className='rounded-md  bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className=' rounded-md my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea  className='rounded-md  bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white h-8 bg-blue-700  rounded-lg hover:bg-green-600 hover:border-[#153441] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
        </div>
       
        <div className='px-10 text-center  sm:text-justify text-md text-green-600 font-bold'>
        <h4>Mobile: +91-7051819135</h4>
            <h4>Email: shabazalimalik69@gmail.com</h4>
            <h3>Address: Baramulla, J&K, India</h3>
            </div>
            <div>
                <p className='text-white text-center  sm:text-end text-sm py-4' >©Shabaz Ali 2022 All rights reserved..</p>
            </div>
    </div>
  )
}

export default Contact;