import Link from "next/link";

const MenuItem = (props: { clickHandler: any; to: string; title: string }) => {
  return (
    <div className="flex" onClick={props.clickHandler}>
      <p className="hover:text-primary-orange hover:cursor-pointer">
        <Link href={props.to ?? ""}>
          <a>{props.title}</a>
        </Link>
      </p>
    </div>
  );
};
export default MenuItem;
