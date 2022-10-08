import InputCart from "./cards/InputTextCard";
import InputTextareaCard from "./cards/InputTextareaCard";
import { MouseEvent } from "react";

const HomeBoardQuestion = () => {
  const sendHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("message sent");
  };
  return (
    <section className="h-screen grid grid-cols-1 grid-rows-12 lg:grid-cols-2 lg:grid-rows-none">
      <div className="row-span-3 bg-primary-yellow h-screen pt-8 px-8 lg:pt-16">
        <div className="lg:h-[95%]">
          <div className="text-5xl font-black lg:text-7xl lg:sticky lg:top-8">
            <p>
              Any <span className="text-primary-orange">Questions</span>?
            </p>
            <p>Shoot it!</p>
          </div>
        </div>
      </div>
      <div className="row-span-9 grid grid-rows-9 px-8 bg-primary-yellow lg:bg-white lg:pt-16 lg:grid-rows-5">
        <div className="row-span-2 lg:row-span-1">
          <InputCart title="Name" placeholder="Your name" />
        </div>
        <div className="row-span-2 lg:row-span-1">
          <InputCart title="Email Address" placeholder="Your email" />
        </div>
        <div className="row-span-3 lg:row-span-2">
          <InputTextareaCard title="Message" placeholder="Example Text" />
        </div>
        <div className="row-span-2 grid grid-cols-3 pb-6 lg:row-start-6 lg:row-span-1 lg:grid-cols-3 lg:grid-rows-2">
          <button
            onClick={sendHandler}
            type="submit"
            className="text-4xl font-extrabold bg-primary-orange py-0.5 px-7 rounded-lg row-start-2 col-start-4 lg:text-6xl lg:row-start-2 lg:py-7 lg:px-10"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};
export default HomeBoardQuestion;
