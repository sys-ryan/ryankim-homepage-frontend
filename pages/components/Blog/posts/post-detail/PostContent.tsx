import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import { Post } from "../../../../../interfaces/post.interface";

import PostHeader from "./PostHeader";

interface PostContentProps {
  post: Post;
  content: string;
}

const customRenderers = {
  code(code: any) {
    const { node, inline, className, children, ...props } = code;
    const match = /language-(\w+)/.exec(className || "");

    return !inline && match ? (
      <SyntaxHighlighter style={nightOwl} language={match[1]}>
        {children}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const PostContent = (props: PostContentProps) => {
  const { post, content } = props;
  const postDate = new Date(post.createdAt);

  return (
    <>
      <div className="w-[90%] m-auto mt-[5%] lg:mt-[2%] lg:w-[60%] lg:max-w-[1000px]">
        <PostHeader title={post.title} image={post.thumbnail} date={postDate} />
        <article className="prose max-w-none">
          <ReactMarkdown components={customRenderers} remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </>
  );
};
export default PostContent;
