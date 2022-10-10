import { useEffect, useState } from "react";
import ArrowDown from "../icons/ArrowDown";
import MobileKeyboard from "./cards/MobileKeyboard";

const HomeBoardMain = () => {
  const [transformAnimation, setTransformAnimation] = useState("");
  useEffect(() => {
    setTimeout(() => {
      const keys = document.querySelectorAll(".key");

      keys?.forEach((key) => {
        key.classList.remove(
          "animate-animated",
          "animate-fadeInRight",
          "animate-duration-[1s]",
          "animate-delay-[0.6s]"
        );
      });

      keys?.forEach((key) => {
        key.classList.add("lg:hover:translate-x-20", "transition", "duration-300");
      });
    }, 1500);
  }, []);

  return (
    <section className="h-screen grid grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-1 overflow-hidden">
      <div className="bg-primary-yellow row-span-3 relative animate-fadeInUp">
        <div className="heading-text h-full relative">
          <div className="text-5xl text-primary-black font-black font-aratsi absolute top-1/4 ml-4 md:top-[35%] md:text-7xl md:pl-6 xl:top-[28%] xl:text-8xl">
            <p>
              The <span className="text-primary-orange">#1</span>
            </p>
            <p>source for</p>
            <p>Web APIs &</p>
            <p>Application</p>
          </div>
        </div>
        <div className="description absolute bottom-0 text-xs text-primary-black ml-4 mb-4 font-noto_sans_kr font-bold md:text-lg md:pl-6 md:pb-6">
          <p>단순히 코드만 작성하는 사람이 아닌,</p>
          <p>웹 백엔드 서비스의 관점에서 분석하고 해결하여</p>
          <p>더 나은 세상을 만들어 나가는</p>
          <p>
            <span className="font-black text-3xl md:text-4xl">“문제 해결사”</span>
          </p>
        </div>
      </div>
      <div className="bg-primary-black row-span-2 flex flex-col items-end justify-center relative animate-fadeInUp animate-delay-150">
        {/* mobile */}

        <MobileKeyboard
          className={`key bg-primary-blue white-key animate-animated animate-fadeInRight animate-duration-[1s] animate-delay-[0.7s]`}
          text="Ryan Kim, 김성진"
        />

        <MobileKeyboard
          className={
            "key black-key top-[13%] md:top-[20%] animate-animated animate-fadeInRight animate-duration-[1s] animate-delay-[0.6s]"
          }
          text="Speak 🇰🇷, 🇺🇸"
        />
        <MobileKeyboard
          className={
            "key bg-primary-yellow white-key animate-animated animate-fadeInRight animate-duration-[1s] animate-delay-[0.5s]"
          }
          text="Web Backend"
        />
        <MobileKeyboard
          className={
            "key bg-primary-beige white-key animate-animated animate-fadeInRight animate-duration-[1s] animate-delay-[0.4s]"
          }
          text="Web Frontend"
        />
        <MobileKeyboard
          className={
            "key black-key top-1/2 md:top-[52%] animate-animated animate-fadeInRight animate-duration-[1s] animate-delay-[0.3s]"
          }
          text="Tutoring"
        />
        <MobileKeyboard
          className={
            "key bg-primary-orange white-key animate-animated animate-fadeInRight animate-duration-[1s] animate-delay-[0.2s]"
          }
          text="B.S, Computer Science"
        />
        <MobileKeyboard
          className={
            "key bg-primary-purple white-key animate-animated animate-fadeInRight animate-duration-[1s] animate-delay-[0.1s]"
          }
          text="M.S, Information Security"
        />
        {/* desktop */}
      </div>
      <div className="absolute bottom-0 lg:bottom-[1%] w-[3%] left-0 right-0 mx-auto animate-flash animate-duration-[3s] animate-infinite">
        <div className="flex flex-col items-center">
          <p className="text-xl text-white">Scroll</p>
          <ArrowDown className="bottom-[5%] left-0 right-0 mx-auto text-2xl text-white " />
        </div>
      </div>
    </section>
  );
};
export default HomeBoardMain;
