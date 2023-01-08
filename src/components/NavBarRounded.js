import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarRounded() {
  return (
    <div className="flex w-full justify-center sm:justify-end">
      <div className="flex justify-center items-center gap-8 text-[1.3rem] text-center m-3 px-5 py-2 bg-[rgba(38,38,38,0.75)] rounded-xl backdrop-blur-md">
          <Link className="duration-200 hover:text-[#a23fff] hover:-translate-y-[3px] hover:text font-bold" to="/"><h1>Home</h1></Link>
          <Link className="duration-200 hover:text-[#a23fff] hover:-translate-y-[3px] hover:text font-bold" to="/about-me"><h1>About Me</h1></Link>
          <Link className="duration-200 hover:text-[#a23fff] hover:-translate-y-[3px] hover:text font-bold" to="/projects/game-dev"><h1>Game Dev</h1></Link>
          <Link className="duration-200 hover:text-[#a23fff] hover:-translate-y-[3px] hover:text font-bold" to="/projects/game-dev"><h1>DarkDax</h1></Link>
      </div>
    </div>
  )
}
