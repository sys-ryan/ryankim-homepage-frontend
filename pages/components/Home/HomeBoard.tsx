import { useEffect, useState } from "react";
import HomeBoardAchievements from "./HomeBoardAchievements";
import HomeBoardContacts from "./HomeBoardContacts";
import HomeBoardFooter from "./HomeBoardFooter";
import HomeBoardMain from "./HomeBoardMain";
import HomeBoardMessage from "./HomeBoardMessage";
import HomeBoardQuestion from "./HomeBoardQuestion";
import HomeBoardTechs from "./HomeBoardTechs";
import BurgerMenu from "../icons/BurgerMenu";
import Menu from "../../ui/Menu";

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
