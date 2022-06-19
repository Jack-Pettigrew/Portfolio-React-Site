import { FaGithub, FaItchIo } from "react-icons/fa"

// styles
import "./Links.css"

export default function Links({transitionClass}) {
    
  return (
      <div className="links">
        <div className="links-container">
            <a href="https://github.com/Jack-Pettigrew" target="_blank" rel="noopener noreferrer"><FaGithub className={"icon " + transitionClass} /></a>
            <a href="https://pixeldump.itch.io/" target="_blank" rel="noopener noreferrer"><FaItchIo className={"icon " + transitionClass} /></a>
        </div>
    </div>
  )
}
