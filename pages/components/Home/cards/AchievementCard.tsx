import Image from "next/image";
import LinkIcon from "../../icons/LinkIcon";

const AchievementCard = (props: {
  title: string;
  imgPath?: string;
  text?: string;
  className?: string;
  clickHandler?: any;
  imgDivClassName?: string;
}) => {
  return (
    <div
      className={`${props.className} relative ${
        props.clickHandler ? "hover:cursor-pointer" : null
      }`}
      onClick={props.clickHandler}
    >
      {props.clickHandler ? (
        <LinkIcon className="w-5 absolute top-2 right-2 z-10 p-0.5 lg:w-7" />
      ) : null}
      {props.imgPath ? (
        <div className={`rounded-xl ${props.imgDivClassName}`}>
          <Image
            src={props.imgPath}
            alt={props.title}
            width={1000}
            height={1500}
            layout="responsive"
            className="rounded"
          />
        </div>
      ) : (
        <p>{props.text}</p>
      )}

      <p className="text-sm font-semibold pt-1 lg:pt-5 lg:text-xl">{props.title}</p>
    </div>
  );
};
export default AchievementCard;
