import { FaGithub, FaItchIo, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa"

export default function SocialLinks({ linkSizes = "2rem", linksFlexDirection = "row" }) {
    
  return (
    <div className={`flex flex-${linksFlexDirection} ${linksFlexDirection == "col" ? "items-center" : ""} justify-center text-[2rem]`}>
      <a className={`text-white bg-[#232323] m-2 p-1 rounded-[10px] duration-200 hover:scale-[1.2] drop-shadow-md`} href="https://github.com/Jack-Pettigrew" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a className={`text-white bg-[#232323] m-2 p-1 rounded-[10px] duration-200 hover:scale-[1.2] drop-shadow-md`} href="https://www.linkedin.com/in/jack-pettigrew/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      <a className={`text-white bg-[#232323] m-2 p-1 rounded-[10px] duration-200 hover:scale-[1.2] drop-shadow-md`} href="https://pixeldump.itch.io/" target="_blank" rel="noopener noreferrer"><FaItchIo /></a>
      <a className={`text-white bg-[#232323] m-2 p-1 rounded-[10px] duration-200 hover:scale-[1.2] drop-shadow-md`} href="https://youtube.com/@DarkDax" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      {/* <a className={`text-white bg-[#232323] m-2 p-1 rounded-[10px] duration-200 hover:scale-[1.2] drop-shadow-md`} href="https://twitter.com/ThisIsDarkDax" target="_blank" rel="noopener noreferrer"><FaTwitter /></a> */}
    </div>
  )
}
