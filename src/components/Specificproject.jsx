import projects from "./projects.json";

function Specificproject({ projectId }) {
  const getProjectById = (id) => {
    return projects.find((project) => project.id === id);
  };

  const project = getProjectById(projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div
        key={project.id}
        className="max-w-sm h-[750px] w-full flex flex-col overflow-hidden rounded-md bg-gray-700 mx-auto mb-8"
      >
        {/* Image section */}
        <div className="w-full">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content section */}
        <div className="px-6 py-4 flex flex-col flex-grow">
          <div>
            <h2 className="font-bold text-xl mb-2 text-white text-center">
              {project.name}
            </h2>
            <p className="text-white text-base mb-4">{project.description}</p>
          </div>

          {/* Button stays at bottom */}
          <div className="mt-auto">
            <a href={project.link}>
              <button className="bg-green-700 text-1xl py-2 px-10 rounded border border-black font-semibold mx-auto block">
                Explore Project
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Specificproject;
