import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Link from "next/link";
import { Post } from "../../../interfaces/post.interface";

const AdminPostsPage = ({ posts }: { posts: Post[] }) => {
  const postItemClickHandler = () => {
    console.log("click");
  };

  // return <div>admin post page</div>
  return (
    <>
      {/* // TODO: admin post list element */}
      {posts.map((post) => {
        const postEditUrl = `/admin/posts/edit-post/${post.id}`
        return (
          <li key={post.id} onClick={postItemClickHandler}>
            <p>{post.title}</p>
            <Link href={postEditUrl}><a>Edit</a></Link>
          </li>
        );
      })}
    </>
  );
};

export default AdminPostsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${process.env.backendBaseUrl}/posts`);
  const posts: Post[] = await res.json();
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
};
