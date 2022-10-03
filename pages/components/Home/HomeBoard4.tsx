import { useState } from "react";
import EmailIcon from "../icons/EmailIcon";
import GithubIcon from "../icons/GithubIcon";
import HeartIcon from "../icons/HeartIcon";
import InstagramIcon from "../icons/InstagramIcon";
import StarIcon from "../icons/StarIcon";

const HomeBoard4 = () => {
  const [myEmail, setMyEmail] = useState("sys.ryan0902@gmail.com");

  const clickCopyHandler = () => {
    navigator.clipboard.writeText("sys.ryan0902@gmail.com");
    setMyEmail("Copied!");
    setTimeout(() => {
      setMyEmail("sys.ryan0902@gmail.com");
    }, 1000);
  };
  return (
    <section className="grid grid-columns-1 grid-rows-2 md:grid-cols-2">
      <div className="h-[70vh] bg-primary-purple relative p-3">
        <EmailIcon className="w-20 top-0" />

        <p className="text-5xl font-black absolute top-[45%] md:text-7xl lg:text-8xl">Contact Me</p>
        <p onClick={clickCopyHandler} className="text-3xl font-bold absolute bottom-3 lg:text-4xl">
          {myEmail}
        </p>
      </div>
      <div className="h-[70vh] bg-primary-beige relative p-3">
        {/* <HeartIcon className="w-20 top-0" /> */}
        <StarIcon className="w-20 top-0" />
        <p className="text-5xl font-black absolute top-[45%] md:text-7xl lg:text-8xl">Follow Me</p>
        <div className="absolute bottom-3">
          <div className="flex flex-row gap-3">
            <div
              onClick={() => {
                window.open("https://github.com/sys-ryan");
              }}
            >
              <GithubIcon className="w-14 border-4 rounded border-black p-1 md:w-16" />
            </div>
            <div
              onClick={() => {
                window.open("https://www.instagram.com/me_gusta__ryan/");
              }}
            >
              <InstagramIcon className="w-14 border-4 rounded border-black p-1 md:w-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeBoard4;
