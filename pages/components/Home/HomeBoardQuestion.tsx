import InputCart from "./cards/InputTextCard";
import InputTextareaCard from "./cards/InputTextareaCard";
import { MouseEvent } from "react";

const HomeBoardQuestion = () => {
  const sendHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("message sent");
  };
  return (
    <section className="h-screen grid grid-cols-1 grid-rows-12 md:grid-cols-2 md:grid-rows-none">
      <div className="row-span-3 bg-primary-yellow h-screen pt-8 px-8 md:pt-16">
        <div className="text-5xl font-black md:text-6xl lg:text-8xl md:sticky md:top-8">
          <p>
            Any <span className="text-primary-orange">Questions</span>?
          </p>
          <p>Shoot it!</p>
        </div>
      </div>
      <div className="row-span-9 grid grid-rows-9 px-8 bg-primary-yellow md:bg-white md:pt-16 md:grid-rows-5">
        <div className="row-span-2 md:row-span-1">
          <InputCart title="Name" placeholder="Your name" />
        </div>
        <div className="row-span-2 md:row-span-1">
          <InputCart title="Email Address" placeholder="Your email" />
        </div>
        <div className="row-span-3 md:row-span-2">
          <InputTextareaCard title="Message" placeholder="Example Text" />
        </div>
        <div className="row-span-2 grid grid-cols-3 pb-6 md:row-start-6 md:row-span-1 md:grid-cols-3 md:grid-rows-2">
          <button
            onClick={sendHandler}
            type="submit"
            className="text-4xl font-extrabold bg-primary-orange py-0.5 px-7 rounded-lg row-start-2 col-start-4 md:text-6xl md:row-start-2 md:py-7 md:px-10"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};
export default HomeBoardQuestion;
