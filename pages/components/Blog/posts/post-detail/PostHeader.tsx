import Image from "next/image";

const PostHeader = (props: { title: string; image: string; date: Date }) => {
  const postDate = props.date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <header className="mb-8 lg:mb-16">
      <div className="border-b-[1px] border-gray-400 pb-5 lg:flex lg:items-center">
        <h1 className="font-bold text-3xl pb-3 lg:text-5xl w-[80%] lg:pr-8">{props.title}</h1>
        <div className="lg:w-[40%]">
          <Image
            src={props.image}
            alt={props.title}
            width={1600}
            height={900}
            className="object-cover"
          />
        </div>
      </div>
      <p className="text-gray-600 mb-3 mt-3">{postDate}</p>
    </header>
  );
};
export default PostHeader;
