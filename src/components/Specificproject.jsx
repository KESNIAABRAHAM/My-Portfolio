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
        className="h-[750px] flex flex-col overflow-hidden rounded-xl bg-gray-700 mb-8"
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
            <h2 className="font-bold text-xl mb-2 text-white text-center font-marker">
              {project.name}
            </h2>
            <p className="text-white text-base mb-4">{project.description}</p>
          </div>

          {/* Button stays at bottom */}
          <div className="mt-auto" data-aos="zoom-in" data-aos-delay="0">
            <a href={project.link}>
              <button className="bg-green-700 py-2 px-10 rounded-md border border-black font-semibold mx-auto block font-marker">
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
