import { FaGithub, FaItchIo } from "react-icons/fa"

// styles
import "./Links.css"

export default function Links({introTransitionClass}) {
    
  return (
    <div className="links">
      <a className={"link " + introTransitionClass} href="https://github.com/Jack-Pettigrew" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a className={"link " + introTransitionClass} href="https://pixeldump.itch.io/" target="_blank" rel="noopener noreferrer"><FaItchIo /></a>
    </div>
  )
}
