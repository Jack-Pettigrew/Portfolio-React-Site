import { FaGithub, FaItchIo } from "react-icons/fa"

export default function SocialLinks() {
    
  return (
    <div className="flex flex-row justify-center">
      <a className="text-white bg-[#232323] text-[2em] m-2 p-1 rounded-[10px] duration-200 hover:scale-[1.2]" href="https://github.com/Jack-Pettigrew" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a className="text-white bg-[#232323] text-[2em] m-2 p-1 rounded-[10px] duration-200 hover:scale-[1.2]" href="https://pixeldump.itch.io/" target="_blank" rel="noopener noreferrer"><FaItchIo /></a>
    </div>
  )
}
