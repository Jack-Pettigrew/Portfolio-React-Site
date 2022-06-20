// data
import data from "../data/projects.json";

// styles
import "./FeaturedProjectViewer.css";
import image from "../logo.webp"

export default function FeaturedProjectViewer() {
  const { projects } = data;

  return (
    <div className="featured">
      <h2>Featured Projects</h2>

      <div className="projects">
        {projects &&
          projects.map(function (project) {
            return (
              <div
                key={project.id}
                className="project"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              >
                <div className="info">
                  <h2 className="project-title">Test</h2>
                  <p className="project-description"></p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
