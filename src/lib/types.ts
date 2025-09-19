// src/lib/types.ts

export interface Category {
  _id: string;
  name: string;
  slug: string;
}

export interface Article {
  _id: string;
  title: string;
  slug: string;
  content: string;
  category: Category;
  author: string;
  publishedAt: string;
}
