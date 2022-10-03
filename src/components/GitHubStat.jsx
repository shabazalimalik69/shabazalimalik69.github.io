import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const GitHubStat = () => {
  return (
    <div name='githubstat' className=' w-full h-full py-20  bg-[#0a192f] text-gray-300'>
        <h1 className='text-center font-bold py-8 text-2xl'>GitHub Statistics</h1>
       
       <div className='grid grid-cols-4 gap--10 sm:grid-cols-4 shadow-lg rounded-lg bg-[#153441] mx-auto w-11/12  items-center justify-items-center py-6 grid-rows-2'>
        <div className='flex items-center justify-center gap-x-1  w-[65px] h-[65px] rounded-full border-4 border-blue-800  opacity-100 hover:opacity-80 '>
            <h1 className='text-orange-800 font-bold text-lg '>2000+</h1>
            </div>
        <div className='flex items-center justify-center  w-[65px] h-[65px] rounded-full border-4 border-green-800 opacity-100 hover:opacity-80 '>
            <h1 className='text-orange-800 font-bold text-lg'>276+</h1>
        </div>
        <div className='flex items-center justify-center  w-[65px] h-[65px] rounded-full border-4 border-blue-800 opacity-100 hover:opacity-80'>
            <h1 className='text-orange-800 font-bold text-lg'>15+</h1>
        </div>
        <div className='flex items-center justify-center w-[65px] h-[65px] rounded-full border-4 border-green-800 opacity-100 hover:opacity-80 '>
            <h1 className='text-orange-800 font-bold text-lg'>100+</h1>
        </div>
        <div>
            <h1 className=' text-blue-800 font-bold text-center text-lg'>Hours</h1>
            <p className=' text-center text-xs text-amber-500'>of coding</p>
        </div>
        <div>
            <h1 className='text-green-800 font-bold text-center text-lg' >Git</h1>
            <p className=' text-center text-xs text-amber-500'>Commits</p>
        </div>
        <div>
            <h1 className=' text-blue-800 font-bold text-center text-lg'>Projects</h1>
            <p className=' text-center text-xs text-amber-500'>Done</p>
        </div>
        <div>
            <h1 className='text-green-800 font-bold text-center text-lg'>Hours</h1>
            <p className=' text-center text-xs text-center text-amber-500'>of soft skills sessions</p>
        </div>
       
       </div>
        <div className='w-11/12 mx-auto sm:flex items-center justify-center py-10 '>
        <GitHubCalendar  username="shabazalimalik69" />
        </div> 
    </div>
  )
}

export default GitHubStat
