// data
import data from "../data/projects.json";

// styles
import "./FeaturedProjectViewer.css";

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
                  backgroundImage: `url(${project.img})`,
                }}
              >
                <div className="info">
                  <h2 className="project-title">{project.title}</h2>
                  {project.subtitle && <p className="project-description">{project.subtitle}</p>}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
