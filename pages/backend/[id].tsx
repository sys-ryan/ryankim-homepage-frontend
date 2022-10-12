import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { Post } from "../../interfaces/post.interface";
import { parseMarkdown } from "../../lib/posts-util";
import BlogHeader from "../components/Blog/BlogHeader";
import BlogMenu from "../components/Blog/BlogMenu";
import PostContent from "../components/Blog/posts/post-detail/PostContent";
import HeadMeta from "../components/HeadMeta";

const BackendPost: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  // TOOD: Loading Spinner

  const subCategory =
    props.post.subCategory.title.charAt(0).toUpperCase() + props.post.subCategory.title.slice(1);
  return (
    <>
      <HeadMeta
        title={`${subCategory} - ${props.post.title}`}
        description={props.post.excerpt}
        url={`${process.env.backendBaseUrl}/${router.asPath}`}
      />
      <BlogHeader />
      <BlogMenu />
      <PostContent post={props.post} content={props.content} />
    </>
  );
};
export default BackendPost;

type PageParams = {
  id: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${process.env.backendBaseUrl}/posts/${context.params?.id}`);
  const post: Post = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to fetch posts, received status ${res.status}`);
  }

  const { data, content } = parseMarkdown(post.markdown);

  return {
    props: {
      post,
      content,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: "blocking",
  };
};
