import { useState } from "react";
import HomeBoardAchievements from "./HomeBoardAchievements";
import HomeBoardContacts from "./HomeBoardContacts";
import HomeBoardFooter from "./HomeBoardFooter";
import HomeBoardMain from "./HomeBoardMain";
import HomeBoardMessage from "./HomeBoardMessage";
import HomeBoardQuestion from "./HomeBoardQuestion";
import HomeBoardTechs from "./HomeBoardTechs";

const HomeBoard = () => {
  return (
    <div>
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
