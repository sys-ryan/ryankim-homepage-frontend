import { useEffect, useState } from "react";
import HomeBoardAchievements from "./components/Home/HomeBoardAchievements";
import HomeBoardContacts from "./components/Home/HomeBoardContacts";
import HomeBoardFooter from "./components/Home/HomeBoardFooter";
import HomeBoardMain from "./components/Home/HomeBoardMain";
import HomeBoardMessage from "./components/Home/HomeBoardMessage";
import HomeBoardQuestion from "./components/Home/HomeBoardQuestion";
import HomeBoardTechs from "./components/Home/HomeBoardTechs";
import BurgerMenu from "./components/icons/BurgerMenu";
import Menu from "./ui/Menu";

const HomeBoard = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const menuClickHandler = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <div>
      <Menu
        className={`${
          isMenuVisible ? "fixed lg:grid animate-fadeIn animate-duration-800" : "hidden"
        }`}
        isVisible={isMenuVisible}
        clickHandler={menuClickHandler}
      />

      {/* <div className="sticky top-[4%] h-[3rem] z-50 "> */}
      <div className="fixed top-0 right-0 w-full h-[4rem] z-50">
        <div className="sticky top-[4%] w-full right-0 z-50">
          <BurgerMenu clickHandler={menuClickHandler} isMenuVisible={isMenuVisible} />
        </div>
      </div>

      <HomeBoardMain />
      <HomeBoardTechs />
      <HomeBoardAchievements />
      <HomeBoardMessage />
      <HomeBoardQuestion />
      <HomeBoardContacts />
      <HomeBoardFooter />
    </div>
  );
};
export default HomeBoard;
