const Intro = () => {
  return (
    <div
      className="w-full p-4 sm:my-20 flex sm:flex-row flex-col justify-between items-center"
      id="home"
    >
      <div className="flex flex-col justify-center">
        <h1 className="uppercase text-center text-4xl sm:text-start sm:text-6xl md:text-7xl">
          Görkem Üveyk
        </h1>
        <h4 className="text-2xl sm:text-3xl md:text-3xl text-center sm:text-start italic pl-2 text-[#FF2E63]">
          Front-end Developer
        </h4>
        <div className="my-8 w-[220px] md:w-[200px] lg:w-[300px] mx-auto sm:mx-0">
          <img src="/img/intro-img.png" className={"w-full"} alt="" />
        </div>
      </div>

      <img
        className="w-[200px] sm:w-[250px] lg:w-[300px]"
        src="/img/gorkem.png"
        alt=""
      />
    </div>
  );
};

export default Intro;
