import Link from "next/link";
import RyanLogo from "../items/RyanLogo";

const BlogHeader = () => {
  return (
    <Link href="/">
      <a>
        <RyanLogo />
      </a>
    </Link>
  );
};
export default BlogHeader;
