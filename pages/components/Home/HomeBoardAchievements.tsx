import AchievementCard from "./cards/AchievementCard";

const HomeBoardAchievements = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="bg-[#ebd0a3] w-full aspect-square p-8 flex flex-col lg:w-1/2">
        <div className="relative h-full">
          <div className="h-[95%]">
            <div className="font-black lg:sticky lg:top-8 lg:bottom-10">
              <p className="text-5xl lg:text-8xl">Ryan Kim,</p>
              <p className="text-4xl lg:text-7xl">
                an <span className="font-black text-[#A621DB]">Ambitious</span> man
              </p>
              <p className="text-4xl lg:text-7xl">with 智德體</p>
            </div>
          </div>
          <div className="absolute bottom-3">
            <p className="text-lg bottom-3 lg:text-2xl">knowledge, morals, and body</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f5e1be] grid grid-cols-3 grid-rows-3 gap-3 p-5 lg:p-14 lg:w-1/2 lg:gap-14">
        <AchievementCard
          title="International Journal"
          imgPath="/images/achievements/international-journal.png"
          clickHandler={() => {
            window.open("https://www.mdpi.com/1424-8220/21/6/2060", "_blank");
          }}
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
        />
        <AchievementCard
          title="TOEIC"
          imgPath="/images/achievements/toeic.png"
          className="row-start-2 col-start-2"
          clickHandler={() => {
            window.open("/images/achievements/toeic.png", "_blank");
          }}
        />

        <AchievementCard
          title="Translation"
          imgPath="/images/achievements/translation.jpg"
          className="row-start-2 col-start-3"
          clickHandler={() => {
            window.open(
              "https://github.com/typescript-cheatsheets/react-typescript-cheatsheet-kr",
              "_blank"
            );
          }}
        />

        <AchievementCard
          title="Weight Training"
          imgPath="/images/achievements/weight-training.jpg"
          className="row-start-3 col-start-1"
          clickHandler={() => {
            window.open("/images/achievements/weight-training.jpg", "_blank");
          }}
        />

        <AchievementCard
          title="Tutoring"
          imgPath="/images/achievements/tutoring.jpg"
          className="row-start-3 col-start-2"
        />
      </div>
    </section>
  );
};
export default HomeBoardAchievements;
