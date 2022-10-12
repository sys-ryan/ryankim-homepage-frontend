import Image from "next/image";
import Link from "next/link";
import { Post } from "../../../../interfaces/post.interface";

const PostItem = (props: { post: Post; postBasePath: string }) => {
  const { post, postBasePath } = props;

  const postPath = `${postBasePath}/${post.id}`;
  const postDate = new Date(post.createdAt).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const postExcerpt =
    post.excerpt.length <= 164 ? post.excerpt : post.excerpt.substring(0, 164) + " ...";

  const temptext =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus diam quis tincidunt condimentum. Duis eget blandit nibh, sed placerat ex. Mauris porta in urna sed maximus. Vivamus urna ex, facilisis porttitor ante ut, consectetur ornare lacus. Proin luctus dapibus purus sed rutrum. Pellentesque lacinia nulla odio, id venenatis lorem volutpat a. Nam justo urna, porta eu augue vel, tristique vehicula lectus. Proin dolor ipsum, pellentesque at euismod sit amet, accumsan vitae nibh. Fusce fermentum sodales purus at gravida. Vivamus sit amet massa ante. Sed ut mattis dolor. Morbi vestibulum fermentum consectetur. Proin interdum est et risus tincidunt, vel eleifend massa fermentum.";
  const temp = temptext.substring(0, 164) + " ...";

  return (
    <div className="shadow-xl mb-8 flex flex-col mt-[2rem] lg:w-[50rem] lg:h-[41rem] lg:mx-auto hover:cursor-pointer">
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
          <div className="mt-5 px-4 text-md lg:h-[3.5rem] lg:text-xl lg:mb-5 lg:px-8 break-normal flex overflow-hidden">
            {postExcerpt}
          </div>
        </a>
      </Link>
    </div>
  );
};
export default PostItem;
