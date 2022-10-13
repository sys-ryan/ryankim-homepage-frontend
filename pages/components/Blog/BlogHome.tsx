import { Post } from "../../../interfaces/post.interface";
import BlogHeader from "./BlogHeader";
import BlogMenu from "./BlogMenu";
import PostList from "./posts/PostList";

interface BlogHomeProps {
  posts: Post[];
}

const BlogHome = (props: BlogHomeProps) => {
  return (
    <div>
      <BlogHeader />
      <BlogMenu />

      <PostList posts={props.posts} />
    </div>
  );
};
export default BlogHome;
