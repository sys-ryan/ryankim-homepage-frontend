import BlogHeader from "../BlogHeader";
import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    title: "POST Title",
    excerpt: "this is blog post excerpt",
    imagePath:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80",
    content: "# This is post content.",
  },
  {
    title: "title",
    excerpt: "experpt 2 hello world",
    imagePath: "http://igstorysize.com/wp-content/uploads/2020/02/Photo-1024x563.png",
    content: "# This is post content.",
  },
  {
    title: "title",
    excerpt: "experpt 2 hello world",
    imagePath:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    content: "# This is post content.",
  },
];

const PostList = () => {
  return (
    <div className="lg:flex lg:flex-col">
      {DUMMY_POSTS.map((post) => (
        <PostItem
          key={post.title}
          title={post.title}
          excerpt={post.excerpt}
          imagePath={post.imagePath}
        />
      ))}

      {/* <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem /> */}
    </div>
  );
};
export default PostList;
