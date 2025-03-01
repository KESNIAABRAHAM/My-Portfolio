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
        className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-700 justify-between mx-auto mb-8"
      >
        <img src={project.image} alt={project.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white text-center">
            {project.name}
          </div>
          <p className="text-white text-base">{project.description}</p>
          <a href={project.link}>
            <button className="bg-green-700 text-1xl py-2 px-10 rounded border border-black font-semibold mx-auto block mt-4">
              Explore Project
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Specificproject;
