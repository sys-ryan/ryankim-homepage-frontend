import { useEffect } from "react";
import HomeBoardAchievements from "./components/Home/HomeBoardAchievements";
import HomeBoardContacts from "./components/Home/HomeBoardContacts";
import HomeBoardFooter from "./components/Home/HomeBoardFooter";
import HomeBoardMain from "./components/Home/HomeBoardMain";
import HomeBoardMessage from "./components/Home/HomeBoardMessage";
import HomeBoardQuestion from "./components/Home/HomeBoardQuestion";
import HomeBoardTechs from "./components/Home/HomeBoardTechs";
import BurgerMenu from "./components/icons/BurgerMenu";

const HomeBoard = () => {
  return (
    <>
      <div className="sticky top-[4%] z-50">
        <BurgerMenu className="" />
      </div>
      <HomeBoardMain />
      <HomeBoardTechs />
      <HomeBoardAchievements />
      <HomeBoardMessage />
      <HomeBoardQuestion />
      <HomeBoardContacts />
      <HomeBoardFooter />
    </>
  );
};
export default HomeBoard;
