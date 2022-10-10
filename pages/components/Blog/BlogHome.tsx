import BlogHeader from "./BlogHeader";
import BlogMenu from "./BlogMenu";
import PostList from "./PostList";

const BlogHome = () => {
  return (
    <div>
      <BlogHeader />
      <BlogMenu />

      <PostList />
    </div>
  );
};
export default BlogHome;
