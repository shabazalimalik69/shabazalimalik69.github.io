import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { Link } from 'react-scroll';
import resume from './Resume/Shabaz_Malik_Resume.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Skills', to: 'skills' },
    { name: 'Tech Stacks', to: 'techStacks' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <nav className="fixed w-full h-[70px] flex justify-between items-center px-6 bg-[#090f1a]/95 backdrop-blur-md border-b border-slate-800/80 z-50 text-slate-200">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <Link to="home" smooth={true} duration={500} className="flex items-center gap-2">
          {/* <img src={Logo} alt="Logo" className="w-20 h-30 object-contain" /> */}
          <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            SAM
          </span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-1">
        <ul className="flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <li key={idx} className="px-0">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-all duration-200 cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={resume}
          download="Shabaz_Ali_Malik_Resume.pdf"
          className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-all duration-200 hover:scale-105"
        >
          <span>Resume</span>
          <HiArrowDown className="text-sm" />
        </a>
      </div>

      {/* Hamburger Toggle */}
      <div onClick={handleClick} className="lg:hidden text-2xl text-slate-300 hover:text-emerald-400 cursor-pointer z-50 p-2">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${!nav
          ? "opacity-0 pointer-events-none -translate-y-full"
          : "opacity-100 pointer-events-auto translate-y-0"
          } transition-all duration-300 absolute top-0 left-0 w-full min-h-screen bg-[#090f1a]/98 backdrop-blur-xl flex flex-col justify-center items-center lg:hidden px-6`}
      >
        <ul className="w-full max-w-xs flex flex-col items-center space-y-4">
          {navLinks.map((link, idx) => (
            <li key={idx} className="w-full text-center">
              <Link
                onClick={handleClick}
                to={link.to}
                smooth={true}
                duration={500}
                className="block py-3 text-xl font-bold text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60 rounded-xl transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="w-full pt-4">
            <a
              onClick={handleClick}
              href={resume}
              download="Shabaz_Ali_Malik_Resume.pdf"
              className="flex justify-center items-center gap-2 w-full py-3.5 text-base font-bold text-slate-950 bg-emerald-400 rounded-xl shadow-lg"
            >
              <span>Download Resume</span>
              <HiArrowDown className="text-lg" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
