import Image from "next/image";

const Menu = (props: { className: string }) => {
  const openClasses = "fixed  lg:grid";
  return (
    <div
      className={`h-screen w-screen bg-black top-0 left-0 z-30 lg:grid-cols-3 ${props.className}`}
    >
      <div className="h-full w-full bg-black lg:col-span-1 lg:z-10">
        <div className=" text-white h-[60%] flex flex-col justify-between w-[70%] mt-[40%] mx-auto text-4xl font-semibold lg:mt-[30%] lg:h-[60%] ">
          <div className="flex">
            <p className="hover:text-primary-orange hover:cursor-pointer">Home</p>
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
