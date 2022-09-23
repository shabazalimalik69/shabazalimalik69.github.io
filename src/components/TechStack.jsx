import React from 'react';

import HTML from '../logos/html.png';
import CSS from '../logos/css.png';
import JavaScript from '../logos/javascript.png';
import ReactImg from '../logos/react.png';
import Node from '../logos/node.png';
import GitHub from '../logos/gitHub.png';
 import Tailwind from '../logos/tailwind.png';
import Mongo from '../logos/mongo.png';
import Redux from '../logos/redux.png';
import Git from '../logos/git.png';
import Postman from '../logos/postman.png';
import Npm from '../logos/npm.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-full py-20 bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl py-8 font-bold text-center'>Tech Stacks</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>React</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={Redux} alt="Redux icon" />
                  <p className='my-4'>Redux</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>Node JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>Mongo DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={Git} alt="TypeScript icon" />
                  <p className='my-4'>Git</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GitHub</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={Postman} alt="Postman icon" />
                  <p className='my-4'>Postman</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 py-3 mx-auto' src={Npm} alt="npm icon" />
                  <p className='my-4'>npm</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='my-4 w-10 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-6'>Tailwind css</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;