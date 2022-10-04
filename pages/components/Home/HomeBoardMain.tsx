import MobileKeyboard from "./cards/MobileKeyboard";

const HomeBoardMain = () => {
  return (
    <section className="h-screen grid grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-1">
      <div className="bg-primary-yellow row-span-3 relative">
        <div className="heading-text h-full relative">
          <div className="text-5xl text-primary-black font-black font-aratsi absolute top-1/4 ml-4 md:top-[35%] md:text-7xl md:pl-6 xl:top-[28%] xl:text-8xl text-primary-black">
            <p>
              The <span className="text-primary-orange">#1</span>
            </p>
            <p>source for</p>
            <p>Web APIs &</p>
            <p>Application</p>
          </div>
        </div>
        <div className="description absolute bottom-0 text-sm text-primary-black ml-4 mb-4 font-nanum_gothic font-semibold md:text-lg md:pl-6 md:pb-6 xl:text-xl">
          <p>단순히 코드만 작성하는 사람이 아닌,</p>
          <p>주어진 문제를 웹 백엔드 서비스의 관점에서</p>
          <p>분석하고 해결하여 더 나은 세상을</p>
          <p>
            만들어 나가는{" "}
            <span className="font-black text-lg md:text-2xl lg:text-3xl">“문제 해결사”</span>
          </p>
        </div>
      </div>
      <div className="bg-primary-black row-span-2 flex flex-col items-end justify-center relative">
        {/* mobile */}
        <MobileKeyboard className={"bg-primary-blue white-key"} text="Ryan Kim, 김성진" />
        <MobileKeyboard className={"black-key top-[13%] md:top-[20%]"} text="Speak 🇰🇷, 🇺🇸" />
        <MobileKeyboard className={"bg-primary-yellow white-key"} text="Web Backend" />
        <MobileKeyboard className={"bg-primary-beige white-key"} text="Web Frontend" />
        <MobileKeyboard className={"black-key top-1/2 md:top-[52%]"} text="Tutoring" />
        <MobileKeyboard className={"bg-primary-orange white-key"} text="B.S, Computer Science" />
        <MobileKeyboard
          className={"bg-primary-purple white-key"}
          text="M.S, Information Security"
        />
        {/* desktop */}
      </div>
    </section>
  );
};
export default HomeBoardMain;
