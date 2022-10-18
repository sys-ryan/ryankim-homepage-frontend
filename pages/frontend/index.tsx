import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useRouter } from "next/router";
import BlogHeader from "../../components/Blog/BlogHeader";
import BlogMenu from "../../components/Blog/BlogMenu";
import PostList from "../../components/Blog/posts/PostList";
import HeadMeta from "../../components/HeadMeta";
import { Post } from "../../interfaces/post.interface";

const FrontendPage: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return (
    <div>
      <HeadMeta
        title={`Frontend`}
        description={`Posts on frontend frameworks and techknowledge.`}
        url={`${process.env.appBaseUrl}${router.asPath}`}
      />
      <BlogHeader />
      <BlogMenu />

      <PostList posts={props.posts} />
    </div>
  );
};
export default FrontendPage;

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch(`${process.env.backendBaseUrl}/posts`);
  // const posts: Post[] = await res.json();

  // if (!res.ok) {
  //   throw new Error(`Failed to fetch posts, received status ${res.status}`);
  // }

  const posts = [
    {
      id: 1,
      title: "Post Title",
      markdown: "# Hello world!",
      thumbnail:
        "https://images.unsplash.com/photo-1509731987499-fd9bba3a46cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      excerpt: "post excerpt",
      category: { id: 1, title: "post-category" },
      subCategory: { id: 1, title: "post-subCategory" },
      createdAt: "2022-10-20",
      updatedAt: "2022-10-20",
    },
  ];

  return {
    props: {
      posts,
    },
  };
};
