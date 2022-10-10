import Image from "next/image";

const PostHeader = (props: { title: string; image: string; date: Date }) => {
  const postDate = props.date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <header className="mb-8">
      <div className="border-b-[1px] border-gray-400 pb-5">
        <h1 className="font-bold text-3xl pb-3">{props.title}</h1>
        <Image
          src={props.image}
          alt={props.title}
          width={1600}
          height={900}
          className="object-cover "
        />
      </div>
      <p className="text-gray-600 mb-3 mt-">{postDate}</p>
    </header>
  );
};
export default PostHeader;
