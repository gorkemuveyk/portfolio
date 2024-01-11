const About = () => {
  return (
    <div className="my-10" id="about">
      <h3 className="text-6xl my-3 text-center">About</h3>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center justify-center gap-3 sm:w-1/2 w-full">
          <img src="/img/arrow.png" className="lg:block hidden" />
          <p className="p-3 text-black bg-white rounded-md border-4 w-full m-2 border-[#FF2E63]">
            Görkem Üveyk was born in 2001 in Izmir. While continuing his
            education life, he took his first step into software in 2017 and is
            still actively working on software today. He has developed software
            on web software, mobile applications, desktop applications and
            games, and continues to actively work on the web.
          </p>
        </div>
        <img
          src="/img/skills.png"
          className="sm:w-2/5 md:w-3/5 lg:w-2/5 w-full mt-2 sm:mt-0"
        />
      </div>
    </div>
  );
};

export default About;
