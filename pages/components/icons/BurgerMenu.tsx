import { MouseEvent, useRef, useState } from "react";
import classes from "./BurgerMenu.module.css";

const BurgerMenu = (props: { clickHandler: any; isMenuVisible: boolean }) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  // const [isActive, setIsActive] = useState(false);

  const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
    // setIsActive((prev) => !prev);
    props.clickHandler();
  };
  return (
    <div
      ref={buttonRef}
      className={`${classes.btn} ${classes["burger-menu"]} ${
        props.isMenuVisible ? classes.active : classes["not-active"]
      } z-10 bg-primary-orange p-2 rounded m-0`}
      onClick={clickHandler}
    >
      <span className={classes.span}></span>
      <span className={classes.span}></span>
      <span className={classes.span}></span>
    </div>
  );
};
export default BurgerMenu;
