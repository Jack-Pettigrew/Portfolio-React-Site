// data
import data from "../data/projects.json";

// styles
import "./FeaturedProjectViewer.css";

export default function FeaturedProjectViewer() {
  const { projects } = data;

  return (
    <>
      <h2 className="featured-title">Featured Projects</h2>

      <div className="featured">
        {projects &&
          projects.map(function (project) {
            return (
              <div
                key={project.id}
                className="container"
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "500px 500px",
                }}
              >
                <h2 className="project-title">Test</h2>
                <p className="project-description"></p>
              </div>
            );
          })}
      </div>
    </>
  );
}
