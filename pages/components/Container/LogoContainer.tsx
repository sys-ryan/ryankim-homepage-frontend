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
      className={`${
        props.selectedTechnique.selected === props.name ? "tech-selected" : ""
      } flex lg:mt-[7%] lg:mx-[30%] lg:w-full lg:min-h-[7rem] lg:items-center lg:text-4xl lg:font-bold lg:p-3 `}
      onClick={props.clickHandler.bind(null, props.techInfo)}
    >
      {props.children}
    </div>
  );
};
export default LogoContainer;
