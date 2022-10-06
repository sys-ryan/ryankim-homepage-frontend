import { MouseEvent, useRef, useState } from "react";
import classes from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const [isActive, setIsActive] = useState(false);
  const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
    setIsActive((prev) => !prev);
    console.log(isActive);
  };
  return (
    <div
      ref={buttonRef}
      className={`${classes.btn} ${classes["burger-menu"]} ${
        isActive ? classes.active : classes["not-active"]
      } z-10 bg-primary-orange p-2 rounded`}
      onClick={clickHandler}
    >
      <span className={classes.span}></span>
      <span className={classes.span}></span>
      <span className={classes.span}></span>
    </div>
  );
};
export default BurgerMenu;
