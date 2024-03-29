import { FaCodepen, FaGithub, FaItchIo, FaLinkedin, FaYoutube } from "react-icons/fa"

export default function SocialLinks({ linksFlexDirection = "row" }) {

  var className = "text-white bg-purple-500 p-2 rounded-full duration-200 hover:bg-purple-700 hover:rotate-[10deg]";
  
  return (
    <div className={`flex flex-${linksFlexDirection} ${linksFlexDirection == "col" ? "items-center" : ""} justify-center gap-3 text-2xl`}>
      <a className={className} href="https://github.com/Jack-Pettigrew" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a className={className} href="https://codepen.io/Jack-Pettigrew" target="_blank" rel="noopener noreferrer"><FaCodepen /></a>
      <a className={className} href="https://pixeldump.itch.io/" target="_blank" rel="noopener noreferrer"><FaItchIo /></a>
      <a className={className} href="https://youtube.com/@DarkDax" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      <a className={className} href="https://www.linkedin.com/in/jack-pettigrew/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    </div>
  )
}
