const Contact = () => {
  return (
    <div className="sm:mt-20" id="contact">
      <h3 className="text-6xl my-3 text-center">Contact</h3>
      <div className="w-full bg-white p-3 md:rounded-tl-full md:rounded-tr-full flex justify-around items-center border-4 border-[#FF2E63] my-5">
        <div className="text-[#FF2E63] font-bold flex flex-col justify-center items-center gap-2 p-3">
          <img src="/img/linkedin.png" className="sm:w-[72px] w-[45px]" />
          <a
            href="https://www.linkedin.com/in/gorkemuveyk/"
            target="_blank"
            rel="noreferrer"
            className="sm:text-[16px] text-[12px] text-center"
          >
            Visit Linkedin
          </a>
        </div>
        <div className="text-[#FF2E63] font-bold flex flex-col justify-center items-center gap-2 p-3">
          <img src="/img/github.png" className="sm:w-[72px] w-[45px]" />
          <a
            href="https://github.com/gorkemuveyk"
            target="_blank"
            rel="noreferrer"
            className="sm:text-[16px] text-[12px] text-center"
          >
            Go Github
          </a>
        </div>
        <div className="text-[#FF2E63] font-bold flex flex-col justify-center items-center gap-2 p-3">
          <img src="/img/mail.png" className="sm:w-[72px] w-[45px]" />
          <a
            href="mailto:gorkemuveyk@yahoo.com"
            target="_blank"
            rel="noreferrer"
            className="sm:text-[16px] text-[12px] text-center"
          >
            Write a Mail
          </a>
        </div>
        <div className="text-[#FF2E63] font-bold flex flex-col justify-center items-center gap-2 p-3">
          <img src="/img/instagram.png" className="sm:w-[72px] w-[45px]" />
          <a
            href="https://www.instagram.com/gorkemlideveloper/"
            target="_blank"
            rel="noreferrer"
            className="sm:text-[16px] text-[12px] text-center"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
