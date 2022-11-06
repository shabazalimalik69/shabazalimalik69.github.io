import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const GitHubStat = () => {
  return (
    <div name='githubstat' className=' w-full h-full py-20  bg-[#293c42] text-gray-300'>
        <h1 className='text-center font-bold py-8 text-2xl'>GitHub Statistics</h1>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-4 mx-auto w-4/5 py-10 ">
        <a href="https://github.com/shabazalimalik69" target="_blank" title="Profile">
          <img
            src="https://github-readme-stats.vercel.app/api?username=shabazalimalik69&show_icons=true&custom_title=My%20GitHub%20Stats&border_radius=0" 
            alt="Github Stats"
          />
        </a>
        <a href="https://github.com/shabazalimalik69" target="_blank" title="Profile">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=shabazalimalik69&border_radius=0"
            alt="shabazalimalik69"
          />
        </a>
      </div>
       
        <div className='w-11/12 mx-auto py-20 sm:flex items-center justify-center '>
        <GitHubCalendar  username="shabazalimalik69" />
        </div> 
    </div>
  )
}

export default GitHubStat
