import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="relative flex flex-row w-full justify-end items-center text-center space-x-[5%] pr-[20px]">
        <Link className="text-2xl duration-200 hover:text-[#a23fff] hover:-translate-y-[3px] hover:text font-bold" to="/"><h1>Portfolio</h1></Link>
        <Link className="text-2xl duration-200 hover:text-[#a23fff] hover:-translate-y-[3px] hover:text font-bold" to="/about-me"><h1>About Me</h1></Link>
        <Link className="text-2xl duration-200 hover:text-[#a23fff] hover:-translate-y-[3px] hover:text font-bold" to="/projects/game-dev"><h1>Game Dev</h1></Link>
    </div>
  )
}
