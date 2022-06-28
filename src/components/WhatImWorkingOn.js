// styles
import "./WhatImWorkingOn.css";

export default function WhatImWorkingOn() {
  return (
    <div className="whatimworkingon">
      <h2>What I'm Working On</h2>
      <div
        className="project"
        style={{
          backgroundImage: `url(${"/actionshot.jpg"})`,
        }}>
        <div className="project-info">
          <h2>Test</h2>
          <p>This is a test project</p>
        </div>
      </div>
    </div>
  );
}
