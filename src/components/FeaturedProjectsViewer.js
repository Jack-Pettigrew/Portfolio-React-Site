// data
import data from "../data/projects.json";

export default function FeaturedProjectsViewer() {
  const { projects } = data;
  
  return (
    <div className="w-full">
      {/* Base Div */}
      <div className="flex flex-row items-center justify-center mx-[20px] h-[100px] drop-shadow-md duration-500 hover:h-[300px] hover:drop-shadow-xl">
        {/* Project */}
        {projects &&
          projects.map(function (project) {
            return (
              <div
              key={project.id}
              className="flex w-full h-full bg-cover bg-center duration-500 text-transparent hover:text-white hover:w-[300%]"
              style={{
                backgroundImage: `url(${project.img})`,
                borderRadius: `${project.id === 1 ? "10px 0px 0px 10px" : (projects.length === project.id ? "0px 10px 10px 0px" : "0px")}`
              }}
              >
                {/* Project Text */}
                <div className="absolute flex flex-col text-start bottom-0 mx-[2%] my-[1%]">
                  <p className="text-3xl font-bold">{project.title}</p>
                  {project.subtitle && <p className="text-2xl font-bold">{project.subtitle}</p>}
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
}
