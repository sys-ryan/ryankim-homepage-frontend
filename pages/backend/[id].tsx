import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { Post } from "../../interfaces/post.interface";
import { parseMarkdown } from "../../lib/posts-util";
import BlogHeader from "../../components/Blog/BlogHeader";
import BlogMenu from "../../components/Blog/BlogMenu";
import PostContent from "../../components/Blog/posts/post-detail/PostContent";
import HeadMeta from "../../components/HeadMeta";

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
        url={`${process.env.appBaseUrl}/${router.asPath}`}
      />
      <BlogHeader />
      <BlogMenu />
      <PostContent post={props.post} content={props.content} />
    </>
  );
};
export default BackendPost;

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
  const res = await fetch(`${process.env.backendBaseUrl}/posts`);
  const posts: Post[] = await res.json();
  posts.map((post) => ({ params: { id: post.id.toString() } }));

  return {
    paths: posts.map((post) => ({ params: { id: post.id.toString() } })),
    fallback: "blocking",
  };
};
