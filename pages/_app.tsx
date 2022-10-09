import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Menu from "./ui/Menu";
import BurgerMenu from "./components/icons/BurgerMenu";

function MyApp({ Component, pageProps }: AppProps) {
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
      <div className="fixed top-0 right-0 w-full h-[4rem] z-50">
        <div className="sticky top-[4%] w-full right-0 z-50">
          <BurgerMenu clickHandler={menuClickHandler} isMenuVisible={isMenuVisible} />
        </div>
      </div>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
