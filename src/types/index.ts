
export type Category =
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
  category: Category | Category[];
  author: Author;
  date: string;
}
