interface Category {
  id: number;
  title: string;
}

interface SubCategory {
  id: number;
  title: string;
}

export interface Post {
  id: number;
  title: string;
  markdown: string;
  thumbnail: string;
  excerpt: string;
  category: Category;
  subCategory: SubCategory;
  createdAt: string;
  updatedAt: string;
}
