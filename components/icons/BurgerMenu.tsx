import { MouseEvent, useRef, useState } from "react";
import classes from "./BurgerMenu.module.css";

const BurgerMenu = (props: { clickHandler: any; isMenuVisible: boolean }) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
    props.clickHandler();
  };
  return (
    <div
      ref={buttonRef}
      className={`${classes.btn} ${classes["burger-menu"]} ${
        props.isMenuVisible ? classes.active : classes["not-active"]
      } z-200`}
      onClick={clickHandler}
    >
      <span className={classes.span}></span>
      <span className={classes.span}></span>
      <span className={classes.span}></span>
    </div>
  );
};
export default BurgerMenu;
