import ProjectItem from "./ProjectItem";
import items from "./items.json";

const Projects = () => {
  return (
    <div className="my-10 w-full">
      <h3 className="text-6xl my-3 text-center">Projects</h3>
      <p className="text-center">
        Only some of my projects, for all my projects 👉{" "}
        <a
          className="border-b"
          href="https://github.com/gorkemuveyk"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
      <div className="flex items-center">
        {/*} <img src="/img/arrow.png" className="lg:block hidden" /> {*/}
        <div className="flex items-center flex-wrap gap-3 lg:justify-between justify-center w-full mt-5">
          {items.map((repo) => (
            <ProjectItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
