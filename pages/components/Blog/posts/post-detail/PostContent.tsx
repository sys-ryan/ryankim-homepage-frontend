import PostHeader from "./PostHeader";

const DUMMY_POST = {
  title: "POST Title",
  excerpt: "this is blog post excerpt",
  imagePath:
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80",
  content: "# This is post content.",
  date: "2022-10-06",
};

const PostContent = () => {
  const postDate = new Date(DUMMY_POST.date);

  return (
    <>
      <div className="w-[90%] m-auto mt-[5%] lg:mt-[2%]">
        <PostHeader title={DUMMY_POST.title} image={DUMMY_POST.imagePath} date={postDate} />
        {DUMMY_POST.content}
      </div>
    </>
  );
};
export default PostContent;
