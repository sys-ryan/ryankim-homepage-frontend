import { MouseEventHandler, ReactNode } from "react";
import { SelectedTechinque } from "../Home/HomeBoardTechs";

const LogoContainer = (props: {
  children: React.ReactNode;
  selectedTechnique: SelectedTechinque;
  techInfo: SelectedTechinque;
  name: string;
  clickHandler: any;
}) => {
  return (
    <div
      className={`${props.selectedTechnique.selected === props.name ? "tech-selected" : ""} 
      ${
        props.selectedTechnique.selected !== props.name
          ? "hover:bg-primary-blue/30 hover:rounded-lg"
          : ""
      }
      flex items-center lg:my-[4%] lg:mx-[30%] lg:w-full lg:min-h-[7rem] lg:h-[20%] lg:items-center lg:text-4xl lg:font-bold lg:p-10`}
      onClick={props.clickHandler.bind(null, props.techInfo)}
    >
      <div className="lg:h-full lg:grid lg:grid-cols-4 lg:gap-5 lg:items-center hover:cursor-pointer">
        {props.children}
      </div>
    </div>
  );
  //
  // bg-primary-blue/25 py-2 rounded-lg h-[70%]
};
export default LogoContainer;
