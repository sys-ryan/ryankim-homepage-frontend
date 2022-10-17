import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Menu from "../components/ui/Menu";
import BurgerMenu from "../components/icons/BurgerMenu";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const menuClickHandler = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <div className="w-full">
      <Menu
        className={`${
          isMenuVisible ? "fixed lg:grid animate-fadeIn animate-duration-800" : "hidden"
        }`}
        isVisible={isMenuVisible}
        clickHandler={menuClickHandler}
      />

      <BurgerMenu clickHandler={menuClickHandler} isMenuVisible={isMenuVisible} />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
