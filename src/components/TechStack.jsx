import React, { useState } from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiSocketdotio,
  SiRabbitmq,
  SiApachekafka,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiJest,
  SiPostman,
  SiTailwindcss,
  SiMaterialui,
  SiRedux,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiOpenai
} from 'react-icons/si';
import { FaLayerGroup, FaBolt, FaTerminal, FaBrain, FaRobot, FaMicrochip, FaMagic } from 'react-icons/fa';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & LLM', 'Frontend', 'Backend', 'Databases', 'Realtime & Queues', 'DevOps & Cloud'];

  const techItems = [
    // AI & LLM Integrations
    { name: 'OpenAI API', icon: <SiOpenai className="text-[#10A37F]" />, category: 'AI & LLM' },
    { name: 'Anthropic Claude', icon: <FaBrain className="text-[#D97706]" />, category: 'AI & LLM' },
    { name: 'Google Gemini', icon: <FaRobot className="text-[#38BDF8]" />, category: 'AI & LLM' },
    { name: 'Grok API', icon: <FaMicrochip className="text-[#E2E8F0]" />, category: 'AI & LLM' },
    { name: 'Prompt Engineering', icon: <FaMagic className="text-[#A855F7]" />, category: 'AI & LLM' },
    { name: 'Function Calling & Streaming', icon: <FaBolt className="text-[#EC4899]" />, category: 'AI & LLM' },

    // Languages & Frontend
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, category: 'Frontend' },
    { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-[#F7DF1E]" />, category: 'Frontend' },
    { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" />, category: 'Frontend' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, category: 'Frontend' },
    { name: 'Redux Toolkit', icon: <SiRedux className="text-[#764ABC]" />, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, category: 'Frontend' },
    { name: 'Material UI', icon: <SiMaterialui className="text-[#007FFF]" />, category: 'Frontend' },
    { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" />, category: 'Frontend' },
    { name: 'CSS3', icon: <SiCss3 className="text-[#1572B6]" />, category: 'Frontend' },

    // Backend
    { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" />, category: 'Backend' },
    { name: 'Express.js', icon: <SiExpress className="text-[#ffffff]" />, category: 'Backend' },
    { name: 'NestJS', icon: <SiNestjs className="text-[#E0234E]" />, category: 'Backend' },
    { name: 'RESTful APIs', icon: <FaTerminal className="text-[#10B981]" />, category: 'Backend' },
    { name: 'GraphQL', icon: <SiGraphql className="text-[#E10098]" />, category: 'Backend' },
    { name: 'Microservices', icon: <FaLayerGroup className="text-[#8B5CF6]" />, category: 'Backend' },

    // Databases & Caching
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" />, category: 'Databases' },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, category: 'Databases' },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" />, category: 'Databases' },
    { name: 'Redis', icon: <SiRedis className="text-[#DC382D]" />, category: 'Databases' },

    // Realtime & Queues
    { name: 'Socket.IO', icon: <SiSocketdotio className="text-white" />, category: 'Realtime & Queues' },
    { name: 'BullMQ', icon: <FaBolt className="text-[#F59E0B]" />, category: 'Realtime & Queues' },
    { name: 'RabbitMQ', icon: <SiRabbitmq className="text-[#FF6600]" />, category: 'Realtime & Queues' },
    { name: 'Apache Kafka', icon: <SiApachekafka className="text-white" />, category: 'Realtime & Queues' },
    { name: 'Firebase Messaging', icon: <SiFirebase className="text-[#FFCA28]" />, category: 'Realtime & Queues' },

    // DevOps & Cloud
    { name: 'AWS Cloud', icon: <SiAmazonaws className="text-[#FF9900]" />, category: 'DevOps & Cloud' },
    { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" />, category: 'DevOps & Cloud' },
    { name: 'Kubernetes', icon: <SiKubernetes className="text-[#326CE5]" />, category: 'DevOps & Cloud' },
    { name: 'Git', icon: <SiGit className="text-[#F05032]" />, category: 'DevOps & Cloud' },
    { name: 'Jest / Supertest', icon: <SiJest className="text-[#C21325]" />, category: 'DevOps & Cloud' },
    { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" />, category: 'DevOps & Cloud' }
  ];

  const filteredItems = activeCategory === 'All'
    ? techItems
    : techItems.filter(item => item.category === activeCategory);

  return (
    <div name="techStacks" className="w-full py-20 bg-gradient-to-b from-[#111c2e] via-[#0d1624] to-[#0a111c] text-slate-200">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col justify-center w-full h-full">
        
        {/* Section Header */}
        <div className="text-center pb-8">
          <p className="text-sm uppercase tracking-widest text-emerald-400 font-semibold">
            Tech Arsenal
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Technologies &amp; Frameworks
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredItems.map((tech, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-slate-800/90 hover:border-emerald-500/40 rounded-xl p-4 flex flex-col items-center justify-center text-center group hover:scale-105 transition-all duration-300 hover:bg-slate-800/90 shadow-md"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">
                {tech.name}
              </p>
              <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TechStack;