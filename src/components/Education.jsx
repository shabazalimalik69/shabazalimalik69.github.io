import React from 'react';
import { FaGraduationCap, FaAward, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const educationList = [
    {
      degree: 'Bachelor of Engineering (B.E.)',
      institution: 'Subharti Institute of Technology & Engineering',
      location: 'Meerut, Uttar Pradesh',
      icon: <FaGraduationCap className="text-2xl text-emerald-400" />,
      type: 'Degree'
    },
    {
      degree: 'Full-Stack Web Development Program',
      institution: 'Masai School',
      location: 'Bengaluru, Karnataka',
      icon: <FaAward className="text-2xl text-cyan-400" />,
      type: 'Professional Program'
    }
  ];

  return (
    <div name="education" className="w-full py-20 bg-[#0b1320] text-slate-200">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col justify-center w-full h-full">
        
        {/* Section Header */}
        <div className="text-center pb-12">
          <p className="text-sm uppercase tracking-widest text-emerald-400 font-semibold">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Education &amp; Credentials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-7 shadow-xl hover:shadow-2xl hover:shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 flex items-start gap-5"
            >
              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60 shadow-inner flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {item.type}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                  {item.degree}
                </h3>
                <h4 className="text-sm font-semibold text-emerald-400 mt-1">
                  {item.institution}
                </h4>
                <p className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                  <FaMapMarkerAlt className="text-amber-400" />
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Education;
