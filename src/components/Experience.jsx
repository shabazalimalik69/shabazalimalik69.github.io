import React from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Spiderweb Technologies Pvt Ltd",
      location: "Remote",
      duration: "Jul 2023 – Present",
      type: "Full-time",
      skills: ["TypeScript", "Node.js", "Express.js", "React.js", "PostgreSQL", "MongoDB", "Socket.IO", "Firebase", "Jest", "CI/CD"],
      points: [
        "Architect and maintain robust full-stack applications using TypeScript, Node.js, Express.js, and React.js.",
        "Design and deploy high-throughput RESTful APIs, optimizing query executions across PostgreSQL and MongoDB to reduce latency.",
        "Integrated real-time chat and multi-channel push notification pipelines with Socket.IO and Firebase Cloud Messaging.",
        "Implemented automated testing with Jest and Supertest, maintaining rigorous stability and fast CI/CD deployments.",
        "Partner with cross-functional engineering teams to triage production incidents, resolve bottlenecks, and ensure 99.9% uptime."
      ]
    },
    {
      role: "Software Engineer",
      company: "Microchip Payments Pvt Ltd",
      location: "Karnataka, India",
      duration: "Mar 2021 – Jun 2023",
      type: "Full-time",
      skills: ["Node.js", "Express.js", "React.js", "MySQL", "Redis", "WhatsApp API", "Payment Gateways", "Clean Architecture"],
      points: [
        "Built and deployed an enterprise WhatsApp chatbot integrated with internal HR services, automating routine employee inquiries.",
        "Engineered backend business logic, secure transaction endpoints, and payment workflows using Node.js, Express.js, and MySQL.",
        "Introduced Redis caching layers for heavy read operations, improving overall application responsiveness and load capacity.",
        "Diagnosed critical defects and refactored core backend modules to follow modular, clean-architecture patterns."
      ]
    }
  ];

  return (
    <div name="experience" className="w-full py-20 bg-[#0b1320] text-slate-200">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col justify-center w-full h-full">
        
        {/* Section Header */}
        <div className="text-center pb-12">
          <p className="text-sm uppercase tracking-widest text-emerald-400 font-semibold">
            Career Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Timeline List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/20"
            >
              {/* Top Row: Role, Company & Meta */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
                      <FaBriefcase className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <h4 className="text-base sm:text-lg font-semibold text-emerald-400">
                        {exp.company}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
                    <FaCalendarAlt className="text-cyan-400" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
                    <FaMapMarkerAlt className="text-amber-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-6 space-y-3">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0 text-sm" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-xs font-medium bg-slate-800/80 text-cyan-300 rounded-md border border-cyan-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
