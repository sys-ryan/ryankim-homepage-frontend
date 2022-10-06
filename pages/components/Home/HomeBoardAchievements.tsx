import { useEffect, useRef, useState } from "react";
import AchievementCard from "./cards/AchievementCard";

const HomeBoardAchievements = () => {
  const startingDomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setStartingElementVisible(entry.isIntersecting);
    });

    observer.observe(startingDomRef.current as Element);
  }, []);

  const [startingElementVisible, setStartingElementVisible] = useState(false);

  const animationClasses = `animate-bounceInUp animate-duration-[1s]`;

  return (
    <section className="flex flex-col lg:flex-row">
      <div className="bg-[#ebd0a3] w-full aspect-square p-4 flex flex-col lg:w-1/2 lg:p-8">
        <div className="relative h-full">
          <div className="h-[95%]">
            <div className="font-black lg:sticky lg:top-8 lg:bottom-10">
              <p className="text-5xl lg:text-8xl">Ryan Kim,</p>
              <p className="text-4xl lg:text-7xl">
                an <span className="font-black text-[#A621DB] text-5xl lg:text-8xl">Ambitious</span>{" "}
                man with
              </p>
              <p className="text-4xl lg:text-7xl">knowledge, morals, and body</p>
            </div>
          </div>
          <div className="absolute bottom-3">
            <p className="text-lg bottom-3 lg:text-2xl">A sound mind in a sound body</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f5e1be] grid grid-cols-3 grid-rows-3 gap-3 p-4 lg:p-14 lg:w-1/2 lg:gap-14">
        <AchievementCard
          title="International Journal"
          imgPath="/images/achievements/international-journal.png"
          clickHandler={() => {
            window.open("https://www.mdpi.com/1424-8220/21/6/2060", "_blank");
          }}
          imgDivClassName="bg-primary-yellow"
          imgClassName={`${
            startingElementVisible ? animationClasses : "hidden"
          } animate-delay-[0.4s]`}
        />
        <AchievementCard
          title="Master's Thesis"
          imgPath="/images/achievements/thesis.png"
          clickHandler={() => {
            window.open(
              "https://drive.google.com/file/d/1BaziXO1Vnhm1QTZ5CBCh4V8EpLou2Yn_/view",
              "_blank"
            );
          }}
          imgDivClassName="bg-primary-blue"
          imgClassName={`${
            startingElementVisible ? animationClasses : "hidden"
          } animate-delay-[0.2s]`}
        />

        <AchievementCard
          title="TOEIC"
          imgPath="/images/achievements/toeic.png"
          className="row-start-2 col-start-2"
          clickHandler={() => {
            window.open("/images/achievements/original/toeic.png", "_blank");
          }}
          imgDivClassName="bg-primary-purple"
          imgClassName={`${
            startingElementVisible ? animationClasses : "hidden"
          } animate-delay-[0.7s]`}
        />

        <AchievementCard
          title="Translation"
          imgPath="/images/achievements/translation.png"
          className="row-start-2 col-start-3"
          clickHandler={() => {
            window.open(
              "https://github.com/typescript-cheatsheets/react-typescript-cheatsheet-kr",
              "_blank"
            );
          }}
          imgDivClassName="bg-primary-orange"
          imgClassName={`${startingElementVisible ? animationClasses : "hidden"}`}
        />
        <span ref={startingDomRef} className="row-start-2"></span>

        <AchievementCard
          title="Weight Training"
          imgPath="/images/achievements/weight-training.png"
          className="row-start-3 col-start-1"
          clickHandler={() => {
            window.open("/images/achievements/original/weight-training.jpg", "_blank");
          }}
          imgDivClassName="bg-primary-purple"
          imgClassName={`${
            startingElementVisible ? animationClasses : "hidden"
          } animate-delay-[0.6s]`}
        />

        <AchievementCard
          title="Tutoring"
          imgPath="/images/achievements/tutoring.png"
          className="row-start-3 col-start-2"
          imgDivClassName="bg-primary-yellow"
          imgClassName={`${startingElementVisible ? animationClasses : "hidden"}`}
        />
      </div>
    </section>
  );
};
export default HomeBoardAchievements;
