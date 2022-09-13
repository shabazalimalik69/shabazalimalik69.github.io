import React, { useState } from "react"; 
import {
    FaBars,
    FaTimes,
    FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter
  } from 'react-icons/fa';
import Logo from '../logos/logo.png';
import { HiArrowUp, HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#030304] text-gray-300 ' >
        {/* Logo */}
      <div>
        <img src={Logo} alt="" style={{ width: '105px' }} />
      </div>

      {/* Menu */}
       <div>
        <ul className='hidden md:flex'>
            <li>
            <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
            </li>
            <li>
            <Link to='about' smooth={true} duration={500}>
            About
          </Link>
            </li>
            <li>
            <Link to='skills' smooth={true} duration={500}>
            Skills
            </Link>
            </li>
            <li>
            <li>
            <Link to='projects' smooth={true} duration={500}>
            Projects
            </Link>
            </li>
            </li>
            <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
      {!nav? <FaBars/>: <FaTimes/>}
      </div>

      {/* Mobile Menu */}
      <div className={!nav? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
      <ul>
      <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
            <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
           
            <li className='py-6 text-4xl'>
            <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
            </li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>
      </div>

      {/* Social Icons  */}
      <div className="hidden sm:flex fixed flex-col top-[35%] left-0">
       <ul>
        <li className='w-[140px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-300 bg-blue-600 '>
          <a className='flex justify-between items-center w-full text-gray-300'
          href="https://www.linkedin.com/in/shabaz-ali-malik-4ab412203/" rel="noreferrer" target="_blank">Linkedin <FaLinkedin size={20} /> </a>
        </li>
        <li className='w-[140px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-300 bg-[#25D366]'>
            <a
              className='flex justify-between items-center w-full text-[gray-300]'
              href='https://www.whatsapp.com/' rel="noreferrer" target="_blank"
            >
              Whatsapp <FaWhatsapp size={20} />
            </a>
          </li>
        <li className='w-[140px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://mail.google.com/mail/u/0/#inbox?compose=new' rel="noreferrer" target="_blank"
            >
              Email <HiOutlineMail size={20} />
            </a>
          </li>
          <li className='w-[140px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-300 bg-blue-600 '>
          <a className='flex justify-between items-center w-full text-gray-300'
          href="https://twitter.com/home" rel="noreferrer" target="_blank">twitter <FaTwitter size={20} /> </a>
        </li>
          <li className='w-[140px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/' rel="noreferrer" target="_blank"
            >
              Github <FaGithub size={20} />
            </a>
          </li>
          <li className='w-[140px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1m2VI06Q1ooA5e9cRg709tTnh3J8X2LTT/view?usp=sharing' rel="noreferrer" target="_blank"
            >
              RESUME <HiArrowUp/> <BsFillPersonLinesFill size={20} />
            </a>
          </li>
       </ul>
      </div>
    </div>
  )
}

export default Navbar;
