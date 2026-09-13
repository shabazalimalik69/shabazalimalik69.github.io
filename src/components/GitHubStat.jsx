import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from 'react-icons/fa';

const GitHubStat = () => {
  return (
    <div name="githubstat" className="w-full py-20 bg-[#0e1726] text-slate-200">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col justify-center w-full h-full">
        
        {/* Section Header */}
        <div className="text-center pb-12">
          <p className="text-sm uppercase tracking-widest text-emerald-400 font-semibold">
            Activity &amp; Open Source
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            GitHub Contributions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center mb-10">
          <div className="w-full flex justify-center bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 shadow-xl transition-all duration-300">
            <a href="https://github.com/shabazalimalik69" target="_blank" rel="noreferrer" className="w-full flex justify-center">
              <img
                className="w-full max-w-[450px] rounded-lg"
                src="https://github-readme-stats.vercel.app/api?username=shabazalimalik69&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1624"
                alt="Github Stats"
              />
            </a>
          </div>

          <div className="w-full flex justify-center bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 shadow-xl transition-all duration-300">
            <a href="https://github.com/shabazalimalik69" target="_blank" rel="noreferrer" className="w-full flex justify-center">
              <img
                className="w-full max-w-[450px] rounded-lg"
                src="https://github-readme-streak-stats.herokuapp.com/?user=shabazalimalik69&theme=tokyonight&hide_border=true&background=0d1624"
                alt="Shabaz Ali Malik Streak"
              />
            </a>
          </div>
        </div>

        {/* Calendar Box */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col items-center justify-center overflow-x-auto">
          <div className="flex items-center gap-2 mb-4 text-slate-400 text-sm font-medium">
            <FaGithub className="text-emerald-400 text-lg" />
            <span>Contributions Graph</span>
          </div>
          <div className="w-full flex justify-center min-w-[700px]">
            <GitHubCalendar 
              username="shabazalimalik69"
              colorScheme="dark"
              fontSize={12}
              blockSize={13}
              blockMargin={4}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default GitHubStat;
