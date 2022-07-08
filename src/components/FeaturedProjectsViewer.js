// data
import data from "../data/projects.json";

// styles
import "./FeaturedProjectsViewer.css";

export default function FeaturedProjectsViewer() {
  const { projects } = data;
  
  return (
    <div className="featured">
      <div className="projects">
        {projects &&
          projects.map(function (project) {
            return (
              <div
                key={project.id}
                className="project"
                style={{
                  backgroundImage: `url(${project.img})`,
                  borderRadius: `${project.id === 1 ? "10px 0px 0px 10px" : (projects.length === project.id ? "0px 10px 10px 0px" : "0px")}`
                }}
              >
                <div className="info">
                  <h2>{project.title}</h2>
                  {project.subtitle && <p>{project.subtitle}</p>}
                </div>
              </div>
            );
          })}
          {/* <h2 className="title">Featured Projects</h2> */}
      </div>
    </div>
  );
}
