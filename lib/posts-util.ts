import matter from "gray-matter";

export const parseMarkdown = (markdown: string) => {
  const { data, content } = matter(markdown);

  return {
    data,
    content,
  };
};
