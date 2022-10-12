import { useState } from "react";
import EmailIcon from "../icons/EmailIcon";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import StarIcon from "../icons/StarIcon";

const HomeBoardContacts = () => {
  const [myEmail, setMyEmail] = useState("sys.ryan0902@gmail.com");

  const clickCopyHandler = () => {
    navigator.clipboard.writeText("sys.ryan0902@gmail.com");
    setMyEmail("Copied!");
    setTimeout(() => {
      setMyEmail("sys.ryan0902@gmail.com");
    }, 1000);
  };
  return (
    <section className="grid grid-columns-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
      <div className="h-[70vh] bg-primary-purple relative p-3 lg:p-8">
        <EmailIcon className="w-20 top-0" />

        <p className="text-5xl font-black absolute top-[45%] md:text-7xl">Contact Me</p>
        <p
          onClick={clickCopyHandler}
          className="text-3xl font-bold absolute bottom-3 lg:text-4xl lg:bottom-8 hover:cursor-copy"
        >
          {myEmail}
        </p>
      </div>
      <div className="h-[70vh] bg-primary-beige relative p-3 lg:p-8">
        <StarIcon className="w-20 top-0" />
        <p className="text-5xl font-black absolute top-[45%] md:text-7xl">Follow Me</p>
        <div className="absolute bottom-3 lg:bottom-8">
          <div className="flex flex-row gap-3">
            <div className="border-4 rounded border-black w-[4.5rem] lg:hover:w-[12rem] transition-all contact-icon lg:hover:border-primary-orange">
              <div
                onClick={() => {
                  window.open("https://github.com/sys-ryan");
                }}
                className="w-[4rem] h-[4rem] lg:hover:w-[12rem] overflow-hidden"
              >
                <div className="flex flex-row w-[12rem] items-center">
                  <GithubIcon className="w-[4rem] h-[4rem] p-1" />
                  <p className="text-3xl ml-[0.8rem] font-bold">Github</p>
                </div>
              </div>
            </div>
            <div className="border-4 rounded border-black w-[4.5rem] lg:hover:w-[15rem] transition-all contact-icon lg:hover:border-primary-orange">
              <div
                onClick={() => {
                  window.open("https://www.instagram.com/me_gusta__ryan/");
                }}
                className="w-[4rem] h-[4rem] lg:hover:w-[15rem] overflow-hidden"
              >
                <div className="flex flex-row w-[15rem] items-center">
                  <InstagramIcon className="w-[4rem] h-[4rem] p-1" />
                  <p className="text-3xl ml-[0.8rem] font-bold">Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeBoardContacts;
