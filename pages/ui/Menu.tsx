import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  const classes = props.isVisible ? "lg:grid opacity-100" : "opacity-0";

  return (
    <div
      className={`fixed h-screen w-screen bg-black top-0 left-0 lg:grid-cols-3 transition-opacity duration-[1s] ease-in-out ${classes} ${zIdx}`}
    >
      <div className="h-full w-full bg-black lg:col-span-1 lg:z-10">
        <div className=" text-white h-[60%] flex flex-col justify-between w-[70%] mt-[40%] mx-auto text-4xl font-semibold lg:mt-[30%] lg:h-[60%] ">
          <div className="flex" onClick={props.clickHandler}>
            <p className="hover:text-primary-orange hover:cursor-pointer">
              <Link href="/">Home</Link>
            </p>
          </div>
          <div className="flex">
            <p className="hover:text-primary-orange hover:cursor-pointer">Web Backend</p>
          </div>
          <div className="flex">
            <p className="hover:text-primary-orange hover:cursor-pointer">Web Frontend</p>
          </div>
          <div className="flex">
            <p className="hover:text-primary-orange hover:cursor-pointer">Utilities</p>
          </div>
          <div className="flex">
            <p className="hover:text-primary-orange hover:cursor-pointer">Experience</p>
          </div>
          <div className="flex">
            <p className="hover:text-primary-orange hover:cursor-pointer">Contact</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:col-start-2 lg:col-span-2 lg:bg-purple-50 overflow-hidden">
        <Image src="/images/menu-bg.jpg" alt="menu" width={900} layout="fill" />
      </div>
    </div>
  );
};
export default Menu;
