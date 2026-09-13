import React from 'react';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt, 
  FaPaperPlane 
} from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

const Contact = () => {
  const contactDetails = [
    {
      title: 'Phone',
      value: '+91-7051819135',
      href: 'tel:+917051819135',
      icon: <FaPhoneAlt className="text-xl text-emerald-400" />
    },
    {
      title: 'Email',
      value: 'shabazalimalik22@gmail.com',
      href: 'mailto:shabazalimalik22@gmail.com',
      icon: <FaEnvelope className="text-xl text-cyan-400" />
    },
    {
      title: 'LinkedIn',
      value: 'shabaz-ali-malik',
      href: 'https://www.linkedin.com/in/shabaz-ali-malik-4ab412203/',
      icon: <FaLinkedin className="text-xl text-blue-400" />
    },
    {
      title: 'GitHub',
      value: 'shabazalimalik69',
      href: 'https://github.com/shabazalimalik69',
      icon: <FaGithub className="text-xl text-slate-200" />
    },
    {
      title: 'Location',
      value: 'Kashmir, India (193121)',
      href: 'https://maps.google.com/?q=Kashmir,India',
      icon: <FaMapMarkerAlt className="text-xl text-amber-400" />
    }
  ];

  return (
    <div name="contact" className="w-full py-20 bg-[#080d16] text-white">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col justify-center w-full h-full">
        
        {/* Section Header */}
        <div className="text-center pb-12">
          <p className="text-sm uppercase tracking-widest text-emerald-400 font-semibold">
            Let's Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mt-2">
            Interested in working together or discussing potential opportunities? Feel free to reach out.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Content Grid: Form + Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Message
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Fill in the form below and I will get back to you promptly.
            </p>

            <form
              method="POST"
              action="https://getform.io/f/ac8ed8e0-d3c6-479a-b0c8-3f1ade51beb4"
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  className="w-full rounded-xl bg-slate-800/90 border border-slate-700/80 text-white p-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  type="text"
                  placeholder="Shabaz Ali"
                  name="name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    className="w-full rounded-xl bg-slate-800/90 border border-slate-700/80 text-white p-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    className="w-full rounded-xl bg-slate-800/90 border border-slate-700/80 text-white p-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    type="tel"
                    placeholder="+91..."
                    name="phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  className="w-full rounded-xl bg-slate-800/90 border border-slate-700/80 text-white p-3 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>

          {/* Quick Contact Info Side */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {contactDetails.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-4 sm:p-5 flex items-center justify-between group transition-all duration-300 hover:bg-slate-850 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700/80 group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {contact.title}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors truncate max-w-[220px] sm:max-w-none">
                      {contact.value}
                    </p>
                  </div>
                </div>
                <HiExternalLink className="text-slate-500 group-hover:text-emerald-400 transition-colors text-lg" />
              </a>
            ))}
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Shabaz Ali Malik. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;