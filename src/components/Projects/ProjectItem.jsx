import PropType from "prop-types";

const ProjectItem = ({ repo }) => {
  return (
    <div className="sm:w-[590px] md:w-full mx-2 lg:w-[490px] xl:mx-0 xl:w-[590px] bg-[#FF2E63] border-2 text-white border-[#fff] flex sm:flex-row flex-col items-center rounded shadow">
      <div className="flex w-full justify-center gap-3 p-2 flex-1">
        <img
          src={repo.img}
          className="sm:w-[150px] w-[130px] max-w-[150px] mt-1"
        />
        {/*}<img src="/img/laptop.png" className="w-[500px] mt-1" />{*/}
      </div>
      <div>
        <h2 className="mt-3 text-2xl w-full text-center">{repo.name}</h2>
        <p className="mt-1 w-full p-3 h-full">{repo.desc}</p>
        <div className="w-full p-2 flex justify-center gap-3">
          <a
            target="_blank"
            href={repo.liveDemo}
            rel="noreferrer"
            className="p-1 bg-transparent border border-[#fff] my-2 rounded w-[100px] hover:bg-[#fff] hover:text-[#FF2E63] transition-colors cursor-pointer text-center text-sm flex items-center justify-center md:text-[16px]"
          >
            Live Demo
          </a>
          <a
            target="_blank"
            href={repo.sourceCode}
            rel="noreferrer"
            className="p-1 bg-transparent border border-[#fff] my-2 rounded w-[100px] hover:bg-[#fff] hover:text-[#FF2E63] transition-colors cursor-pointer text-center text-sm flex items-center justify-center md:text-[16px]"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

ProjectItem.propTypes = {
  repo: PropType.object,
};
