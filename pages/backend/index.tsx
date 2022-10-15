import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { Post } from "../../interfaces/post.interface";
import BlogHeader from "../../components/Blog/BlogHeader";
import BlogMenu from "../../components/Blog/BlogMenu";
import PostList from "../../components/Blog/posts/PostList";

const BackendPage: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const asPath = router.asPath;

  return (
    <div>
      {/* <BlogHome posts={props.posts} /> */}
      <div>
        <BlogHeader />
        <BlogMenu />

        <PostList posts={props.posts} />
      </div>
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
  };
};
