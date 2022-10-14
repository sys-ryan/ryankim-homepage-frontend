import Image from "next/image";
import Link from "next/link";
import { Post } from "../../../interfaces/post.interface";

const PostItem = (props: { post: Post }) => {
  const { post } = props;

  const postPath = `${process.env.appBaseUrl}/${post.category.title}/${post.id}`;
  const postDate = new Date(post.createdAt).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const postExcerpt =
    post.excerpt.length <= 85 ? post.excerpt : post.excerpt.substring(0, 85) + " ...";
  const postExcerptMd =
    post.excerpt.length <= 164 ? post.excerpt : post.excerpt.substring(0, 164) + " ...";

  // const temptext =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus diam quis tincidunt condimentum. Duis eget blandit nibh, sed placerat ex. Mauris porta in urna sed maximus. Vivamus urna ex, facilisis porttitor ante ut, consectetur ornare lacus. Proin luctus dapibus purus sed rutrum. Pellentesque lacinia nulla odio, id venenatis lorem volutpat a. Nam justo urna, porta eu augue vel, tristique vehicula lectus. Proin dolor ipsum, pellentesque at euismod sit amet, accumsan vitae nibh. Fusce fermentum sodales purus at gravida. Vivamus sit amet massa ante. Sed ut mattis dolor. Morbi vestibulum fermentum consectetur. Proin interdum est et risus tincidunt, vel eleifend massa fermentum.";
  // const temp = temptext.substring(0, 85) + " ...";
  // const tempMd = temptext.substring(0, 164) + " ...";

  return (
    <li
      key={post.id}
      className="shadow-xl mb-8 flex flex-col mt-[2rem] w-full md:w-[50rem] md:mx-auto hover:cursor-pointer"
    >
      <Link href={postPath}>
        <a className="">
          <div className="mt-5 px-4 text-gray-600 text-sm lg:text-md">{postDate}</div>
          <div className="font-extrabold text-3xl my-2 px-4 mb-5 lg:text-4xl">{post.title}</div>
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={1600}
            height={900}
            layout="responsive"
            priority
          />
          <div className="px-4 py-4 text-md md:text-xl md:mb-5 md:px-8 break-normal flex items-center overflow-hidden md:hidden">
            {postExcerpt}
          </div>
          <div className="mt-5 px-4 py-4 text-md md:text-xl md:mb-5 md:px-8 break-normal md:flex overflow-hidden hidden items-center">
            {postExcerptMd}
          </div>
        </a>
      </Link>
    </li>
  );
};
export default PostItem;
