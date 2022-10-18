import ChevronRight from "../icons/ChevronRight";

const BlogMenu = () => {
  return (
    <div className="sticky top-0 shadow-xl z-10">
      <div className="flex items-center p-3 h-[4rem] bg-white">
        {/* search */}
        <ChevronRight className="w-6 h-6" />
        <p className="text-xl font-light">Menu</p>
      </div>
    </div>
  );
};
export default BlogMenu;
