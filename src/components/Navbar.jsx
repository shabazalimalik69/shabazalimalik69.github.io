import React, { useState } from "react"; 
import {
    FaBars,
    FaTimes
  } from 'react-icons/fa';
import Logo from '../logos/logo.png';
import { HiArrowDown } from 'react-icons/hi';
import { Link } from 'react-scroll';
import resume from './Resume/Shabaz_Malik_Resume.pdf'
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
            <Link to='home'className="text-white font-bold" smooth={true} duration={500}>
            Home
          </Link>
            </li>
            <li>
            <Link to='skills' className="text-white font-bold" smooth={true} duration={500}>
            Skills
            </Link>
            </li>
            <li>
            <Link to='techStacks' className="text-white font-bold" smooth={true} duration={500}>
            Tech Stacks
            </Link>
            </li>
            <li>
            <Link to='experience' className="text-white font-bold" smooth={true} duration={500}>
            Experience
            </Link>
            </li>
            <li>
            <Link to='projects' className="text-white font-bold"   smooth={true} duration={500}>
            Projects
            </Link>
            </li>
            <li>
            <Link to='contact' className="text-white font-bold" smooth={true} duration={500}>
            Contact
            </Link>
            </li>
            <li>
            <a href={resume} className="flex justify-between items-center text-white font-bold" download={true} >
           Resume <HiArrowDown/> 
            </a>
            </li>
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
          <Link onClick={handleClick} to='home' className="text-green-500" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' className="text-green-500" smooth={true} duration={500}>
           Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='techStacks' className="text-green-500" smooth={true} duration={500}>
            Tech Stacks
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='experience' className="text-green-500" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
         <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='projects' className="text-green-500" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' className="text-green-500" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <a onClick={handleClick} href={resume} className="flex justify-between items-center text-green-500" download={true} >
            Resume <HiArrowDown/> 
          </a>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
