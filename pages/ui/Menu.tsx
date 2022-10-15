import Image from "next/image";
import { useEffect, useState } from "react";
import MenuItem from "../../components/items/MenuItem";

const Menu = (props: { className: string; isVisible: boolean; clickHandler: any }) => {
  useEffect(() => {
    if (!props.isVisible) {
      setTimeout(() => {
        setZIdx("-z-10");
      }, 1000);
    } else {
      setZIdx("z-30");
    }
  }, [props.isVisible]);

  const [zIdx, setZIdx] = useState("");

  const classes = props.isVisible ? "lg:grid opacity-100" : "opacity-0 hidden";

  return (
    <div
      className={`fixed h-screen w-screen bg-black top-0 left-0 lg:grid-cols-3 transition-opacity duration-[1s] ease-in-out ${classes} ${zIdx}`}
    >
      <div className="h-full w-full bg-black lg:col-span-1 lg:z-10">
        <div className=" text-white h-[60%] flex flex-col justify-between w-[70%] mt-[40%] mx-auto text-4xl font-semibold lg:mt-[30%] lg:h-[60%] ">
          <MenuItem clickHandler={props.clickHandler} to="/" title="Home" />
          <MenuItem clickHandler={props.clickHandler} to="/backend" title="Web Backend" />
          <MenuItem clickHandler={props.clickHandler} to="/frontend" title="Web Frontend" />
          <MenuItem clickHandler={props.clickHandler} to="/utilities" title="Utilities" />
          <MenuItem clickHandler={props.clickHandler} to="/portfolio" title="Portfolio" />
          <MenuItem clickHandler={props.clickHandler} to="/contact" title="Contact" />
        </div>
      </div>
      <div className="hidden lg:flex lg:col-start-2 lg:col-span-2 lg:bg-purple-50 overflow-hidden">
        <Image src="/images/menu-bg.jpg" alt="menu" layout="fill" priority unoptimized={true} />
      </div>
    </div>
  );
};
export default Menu;
