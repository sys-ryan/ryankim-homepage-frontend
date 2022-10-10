import Image from "next/image";

const PostItem = (props: { title: string; imagePath: string; excerpt: string }) => {
  return (
    <div className="shadow-xl mb-8 flex flex-col mt-[2rem] lg:w-[50rem] lg:h-[40rem] lg:mx-auto">
      <div className="mt-10 px-4">Oct.06.0200</div>
      <div className="font-bold text-3xl my-2 px-4 mb-5">{props.title}</div>
      <Image
        src={props.imagePath}
        alt={props.title}
        width={1600}
        height={900}
        layout="responsive"
        priority
      />
      <div className="mt-5 mb-10 px-4">{props.excerpt}</div>
    </div>
  );
};
export default PostItem;
