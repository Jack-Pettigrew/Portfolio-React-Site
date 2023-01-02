import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="flex flex-row w-full justify-center sm:justify-end items-center text-center space-x-[2.5%] py-[15px] sm:pr-[20px] backdrop-blur-md shadow-[inset_0_-10px_10px_-4px_rgba(0,0,0,0.3)]">
        <Link className="text-2xl duration-200 hover:text-[#a23fff] hover:-translate-y-[3px] hover:text font-bold" to="/"><h1>Home</h1></Link>
        <Link className="text-2xl duration-200 hover:text-[#a23fff] hover:-translate-y-[3px] hover:text font-bold" to="/about-me"><h1>About Me</h1></Link>
        <Link className="text-2xl duration-200 hover:text-[#a23fff] hover:-translate-y-[3px] hover:text font-bold" to="/projects/game-dev"><h1>Game Dev</h1></Link>
        <Link className="text-2xl duration-200 hover:text-[#a23fff] hover:-translate-y-[3px] hover:text font-bold" to="/projects/game-dev"><h1>DarkDax</h1></Link>
    </div>
  )
}
