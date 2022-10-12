import Image from "next/image";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
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

// const CodeBlock = ({ className, children }: CodeBlockProps) => {
//   const className.split()
//   return (
//     <div>
//       <SyntaxHighlighter language={language} style={atomDark} children={children}>
//     </div>
//   );
// };

const PostContent = (props: PostContentProps) => {
  const { post, content } = props;
  const postDate = new Date(post.createdAt);

  return (
    <>
      <div className="w-[90%] m-auto mt-[5%] lg:mt-[2%] lg:w-[60%] lg:max-w-[1000px]">
        <PostHeader title={post.title} image={DUMMY_POST.imagePath} date={postDate} />
        <article className="prose max-w-none">
          <ReactMarkdown components={customRenderers} remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </article>
        {/* {DUMMY_POST.content} */}
      </div>
    </>
  );
};
export default PostContent;
