import { MouseEventHandler, ReactNode } from "react";
import { SelectedTechinque } from "../Home/HomeBoard2";

const LogoContainer = (props: {
  children: React.ReactNode;
  selectedTechnique: SelectedTechinque;
  techInfo: SelectedTechinque;
  name: string;
  clickHandler: any;
}) => {
  return (
    <div
      className={`${props.selectedTechnique.selected === props.name ? "tech-selected" : ""} flex`}
      onClick={props.clickHandler.bind(null, props.techInfo)}
    >
      {props.children}
    </div>
  );
};
export default LogoContainer;
