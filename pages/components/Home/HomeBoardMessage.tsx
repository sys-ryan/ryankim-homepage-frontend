import Image from "next/image";

const HomeBoardMessage = () => {
  return (
    <section className="h-screen bg-primary-black grid grid-cols-1 grid-rows-2 gap-y-0 lg:grid-cols-2 lg:grid-rows-1">
      <div className="bg-primary-black h-full p-4 row-span-1 lg:col-start-2 lg:bg-primary-white lg:relative">
        <div className="lg:h-[90%]">
          <div className="text-5xl font-extrabold text-primary-white lg:p-8 lg:text-primary-black lg:text-7xl lg:sticky lg:top-8">
            <p>
              I am <span className="text-6xl text-[#6F38C5] lg:text-8xl">ready</span> to
            </p>
            {/* text-[#9403fc] */}
            <p>embark on </p>
            <p>the journey of</p>
            <p className="text-6xl text-[#87A2FB] lg:text-8xl">solving</p>
            <p>your problems.</p>
          </div>
        </div>
        <div className="text-primary-white mt-10 text-lg lg:text-primary-black lg:absolute lg:bottom-12 lg:left-12 lg:text-xl">
          <p>With my experience ranging from</p>
          <p>diverse Web development projects </p>
          <p>to collaborations with veraiety of people.</p>
        </div>
      </div>
      <div className="bg-primary-black h-full row-span-1 p-4 lg:col-start-1 lg:row-start-1">
        <div className="flex justify-center items-end w-full h-full">
          <div className="w-48 lg:w-[50%] lg:m-8">
            <Image
              src={"/images/ready-image.png"}
              alt={"box"}
              width={1263}
              height={1936}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="bg-primary-black h-full">{/* image */}</div>
    </section>
  );
};
export default HomeBoardMessage;
