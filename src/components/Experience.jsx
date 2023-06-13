import React from 'react'

const Skills = () => {
  return (
    <div name="experience" className='w-full h-full py-5  bg-[#293c42]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl py-8 text-white font-bold text-center'>Experience</p>
          </div>

          <div className='w-full  text-center py-8'>
          <h1 className='py-3 text-2xl sm:text-5xl font-bold text-white'>Software Engineer Intern</h1>
            <h2 className='py-2 font-bold text-amber-500  text-1xl sm:text-2xl'>Zimyo Consulting Services	| Gurgaon, Haryana.</h2>
            <h2 className='py-2 font-bold text-amber-500  text-1xl sm:text-2xl'>March 2023 – May 2023</h2>
          <h6 className='text-justify text-green-500 py-4  max-w-[900px] '>
          I recently completed a rewarding three-month internship at Zimyo, where I had the opportunity to work on several projects involving WhatsApp chatbot integration and backend API development. During my time at Zimyo, I gained valuable experience in the entire software development life cycle, from requirement gathering to testing and deployment.
 </h6>
 <h6 className='text-justify text-green-500 py-4  max-w-[900px] '>
 My primary focus was on integrating a WhatsApp chatbot into Zimyo's existing system, allowing users to access essential HR services and interact with the company's HR platform seamlessly. I collaborated closely with a cross-functional team of developers, UI/UX designers, and product managers to ensure a smooth integration process and an exceptional user experience. Through this project, I honed my skills in API integration, webhook configuration, and building conversational user interfaces.
 </h6>
 <h6 className='text-justify text-green-500 py-4  max-w-[900px] '>
 In addition to the chatbot integration, I also worked on developing backend APIs to support various features of Zimyo's platform. I actively contributed to the design and implementation of RESTful APIs, database schema design, and data modeling. My experience in this area has given me a solid understanding of scalable architecture and best practices for building robust and secure web applications.
 </h6>
          </div>
      </div>
    </div>
  )
}

export default Skills;
