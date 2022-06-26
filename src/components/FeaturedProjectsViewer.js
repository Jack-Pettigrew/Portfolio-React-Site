// data
import data from "../data/projects.json";

// styles
import "./FeaturedProjectsViewer.css";

export default function FeaturedProjectsViewer() {
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
                  <h2>{project.title}</h2>
                  {project.subtitle && <p>{project.subtitle}</p>}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}