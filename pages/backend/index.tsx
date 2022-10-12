import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Post } from "../../interfaces/post.interface";
import BlogHome from "../components/Blog/BlogHome";

const BackendPage: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <BlogHome posts={props.posts} />
    </div>
  );
};
export default BackendPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.backendBaseUrl}/posts`);
  const posts: Post[] = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to fetch posts, received status ${res.status}`);
  }

  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
};
