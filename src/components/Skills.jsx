import React from 'react';
import { 
  FaCode, 
  FaServer, 
  FaBrain, 
  FaDatabase, 
  FaCloud,
  FaCreditCard
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & LLM Integrations',
      icon: <FaBrain className="text-3xl text-purple-400" />,
      description: 'Integrating foundation LLMs, conversational agents, prompt engineering, and intelligent streaming workflows.',
      skills: ['OpenAI API', 'Anthropic Claude', 'Google Gemini', 'Grok', 'Prompt Engineering', 'Streaming Responses', 'Function Calling']
    },
    {
      title: 'Frontend Development',
      icon: <FaCode className="text-3xl text-cyan-400" />,
      description: 'Building modern, reactive, accessible user interfaces with clean architecture.',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Material UI', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend & APIs',
      icon: <FaServer className="text-3xl text-emerald-400" />,
      description: 'Engineering scalable services, high-throughput APIs, and microservices.',
      skills: ['Node.js', 'Express.js', 'NestJS', 'RESTful APIs', 'GraphQL', 'Microservices Architecture', 'JavaScript (ES6+)']
    },
    {
      title: 'Databases & Realtime',
      icon: <FaDatabase className="text-3xl text-amber-400" />,
      description: 'Managing relational/NoSQL databases, distributed caching, and realtime streaming.',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Socket.IO', 'BullMQ', 'RabbitMQ', 'Apache Kafka', 'Firebase Cloud Messaging']
    },
    {
      title: 'Cloud & Hosting',
      icon: <FaCloud className="text-3xl text-blue-400" />,
      description: 'Cloud infrastructure, container orchestration, CI/CD pipelines, and multi-platform hosting.',
      skills: ['AWS (Lambda, SES, SNS, SQS)', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Netlify', 'Render', 'Railway', 'Hostinger', 'cPanel']
    },
    {
      title: 'Payments & Tools',
      icon: <FaCreditCard className="text-3xl text-emerald-400" />,
      description: 'Payment gateway integrations, version control, automated testing suites, and API testing.',
      skills: ['Stripe', 'Razorpay', 'Git', 'Postman', 'Jest', 'Supertest']
    }
  ];

  return (
    <div name="skills" className="w-full py-20 bg-[#0e1726] text-white">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col justify-center w-full h-full">
        
        {/* Section Header */}
        <div className="text-center pb-12">
          <p className="text-sm uppercase tracking-widest text-emerald-400 font-semibold">
            Areas of Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Technical Competencies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-7 shadow-xl hover:shadow-2xl hover:shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60 shadow-inner">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700/50 transition-colors"
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

export default Skills;
