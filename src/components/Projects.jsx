import React from 'react';
import tourzaImg from '../logos/tourzakashmir.png';
import coreCallImg from '../logos/corecallsolutions.png';
import {
  FaExternalLinkAlt,
  FaCheckCircle,
  FaBolt
} from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Tourza Kashmir',
      subtitle: 'Production Travel & Heritage Booking Platform',
      image: tourzaImg,
      badge: 'Featured Full-Stack App',
      techStack: ['Next.js', 'OpenAI API', 'Google Gemini', 'PostgreSQL', 'Redis', 'Socket.IO', 'BullMQ', 'AWS SES', 'Tailwind CSS'],
      description: 'A comprehensive high-performance travel booking and heritage accommodation platform built for scale, featuring AI-powered personalized itinerary generation, real-time availability, and automated cloud workflows.',
      points: [
        'Developed a production travel booking platform featuring real-time room availability, interactive maps, and responsive UX.',
        'Built an AI itinerary generator leveraging OpenAI and Google Gemini APIs to deliver personalized travel schedules and cost breakdowns.',
        'Constructed asynchronous background jobs with BullMQ and Redis for booking workflows and automated receipt emails via AWS SES.'
      ],
      liveUrl: 'https://tourzakashmir.com',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent'
    },
    {
      title: 'Core Call Solutions',
      subtitle: 'Enterprise Corporate Operations & CRM Portal',
      image: coreCallImg,
      badge: 'Enterprise Platform',
      techStack: ['React.js', 'Anthropic Claude', 'Grok API', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Material UI'],
      description: 'A full-scale corporate operations management portal with AI ticket classification, high-concurrency client tracking, real-time analytics aggregation, and secure role-based workflow execution.',
      points: [
        'Delivered a full-stack corporate operations portal featuring role-based authentication, CRM dashboards, and client tracking.',
        'Implemented an automated ticket classification and conversation summarization pipeline powered by Anthropic Claude and Grok APIs.',
        'Architected secure RESTful APIs connected to MongoDB, utilizing Redis caching to serve fast analytical metric summaries.'
      ],
      liveUrl: 'https://corecallsolutions.com',
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent'
    }
  ];

  return (
    <div name="projects" className="w-full py-20 bg-gradient-to-b from-[#0a111c] via-[#0d1726] to-[#0e1726] text-white">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col justify-center w-full h-full">

        {/* Section Header */}
        <div className="text-center pb-12">
          <p className="text-sm uppercase tracking-widest text-emerald-400 font-semibold">
            Featured Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            Selected full-stack web applications engineering resilient backends, responsive user interfaces, and automated cloud workflows.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-cyan-950/30 grid grid-cols-1 lg:grid-cols-12 gap-0 group"
            >
              {/* Image Preview Side */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-center bg-slate-950/60 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`}></div>

                {/* Browser Mockup Top Bar */}
                <div className="relative z-10 bg-slate-800/90 rounded-t-xl px-4 py-2.5 flex items-center gap-2 border border-slate-700/80">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 text-xs text-slate-400 font-mono truncate">
                    {project.title.toLowerCase().replace(/\s+/g, '')}.app
                  </span>
                </div>

                {/* Screenshot */}
                <div className="relative z-10 rounded-b-xl overflow-hidden border-x border-b border-slate-700/80 shadow-2xl bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Project Details Side */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
                      {project.badge}
                    </span>
                    <span className="text-xs text-cyan-400 font-semibold flex items-center gap-1">
                      <FaBolt className="text-xs" /> Live Architecture
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                    {project.title}
                  </h3>
                  <h4 className="text-sm font-medium text-slate-400 mb-4">
                    {project.subtitle}
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Bullet Points from Resume */}
                  <div className="space-y-2.5 mb-6">
                    {project.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-normal">
                        <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0 text-xs" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & CTAs */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-slate-800/80 text-slate-200 text-xs rounded-md border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    {project.liveUrl && project.liveUrl !== '#' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all duration-300"
                      >
                        <span>Live Project</span>
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                        <span>Production Deployed</span>
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;