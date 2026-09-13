import React from 'react';
import { HiArrowDown, HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import resume from './Resume/Shabaz_Malik_Resume.pdf';

const Home = () => {
  return (
    <div name="home" className="w-full min-h-screen pt-24 pb-16 bg-gradient-to-b from-[#0b1320] via-[#111c2e] to-[#162238] text-white flex items-center">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

        {/* Left Column: Avatar & Quick Info */}
        <div className="md:col-span-4 flex flex-col items-center text-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <img
              className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-slate-900 shadow-2xl"
              src="https://avatars.githubusercontent.com/u/103936619?v=4"
              alt="Shabaz Ali Malik"
            />
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              5+ Years Experience
            </span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              AI &amp; LLM Workflows
            </span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Kashmir, India
            </span>
          </div>
        </div>

        {/* Right Column: Hero Content */}
        <div className="md:col-span-8 flex flex-col justify-center text-center md:text-left">
          <p className="text-emerald-400 font-medium tracking-wide uppercase text-sm sm:text-base">
            Hello, my name is
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-2">
            Shabaz Ali Malik
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent mt-2">
            Full Stack &amp; AI Engineer | Node.js • TypeScript • React.js • Generative AI
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4 text-justify md:text-left">
            Full Stack &amp; AI Engineer with 5+ years of experience engineering high-performance web applications, resilient backend architectures, and AI-enabled workflows using Node.js, TypeScript, React.js, and modern cloud databases. Proven record of deploying scalable RESTful &amp; GraphQL APIs, integrating foundation LLMs (OpenAI, Anthropic Claude, Google Gemini, Grok), and building real-time messaging pipelines with Socket.IO &amp; BullMQ. Focused on clean code, automated testing, and reliable full-stack delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href={resume}
              download="Shabaz_Ali_Malik_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-900/30 hover:scale-105 transition-all duration-300"
            >
              <span>Download Resume</span>
              <HiArrowDown className="text-lg" />
            </a>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 shadow-md hover:scale-105 transition-all duration-300"
            >
              Featured Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-700 transition-all duration-300"
            >
              <HiOutlineMail className="text-lg" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;