import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Post } from "../../../../../interfaces/post.interface";

import PostHeader from "./PostHeader";

const DUMMY_POST = {
  title: "POST Title which is very long so that I can test something",
  excerpt: "this is blog post excerpt",
  imagePath:
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80",
  content: "## This is post content. hello world",
  date: "2022-10-06",
};

interface PostContentProps {
  post: Post;
  content: string;
}
const PostContent = (props: PostContentProps) => {
  const { post, content } = props;
  const postDate = new Date(post.createdAt);

  return (
    <>
      <div className="w-[90%] m-auto mt-[5%] lg:mt-[2%] lg:w-[60%] lg:max-w-[1000px]">
        <PostHeader title={post.title} image={DUMMY_POST.imagePath} date={postDate} />
        <article className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
        {/* {DUMMY_POST.content} */}
      </div>
    </>
  );
};
export default PostContent;
