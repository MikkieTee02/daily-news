
export type CategoryName =
  | 'Technology'
  | 'Science'
  | 'Business'
  | 'Health'
  | 'World'
  | 'Culture'
  | 'Economy'
  | 'Politics'
  | 'Travel'
  | 'About'
  | 'Contact';

export interface Category {
  _id: string;
  name: CategoryName;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: CategoryName | CategoryName[] | Category | Category[];
  author: Author;
  date: string;
}
