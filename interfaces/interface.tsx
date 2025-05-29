export interface Book {
  _id: string;
  title_bn: string;
  title_en: string;
  author_bn: string;
  author_en: string;
  category: string;
  tags: string[];
  price: number;
  discount_price: number;
  language: string;
  cover_image: string;
  description: string;
  publication: string;
}
export interface BookSearchParams {
  search: string;
  data_from: string;
  limit: number;
  price: "asc" | "desc";
}

export interface BooksPreviewProps {
  title: string;
  search: string;
  dataFrom: string;
}

export interface ReviewUser {
  _id: string;
  name: string;
  email: string;
}

export interface Review {
  _id: string;
  book: string;
  user: ReviewUser;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  password: string;
}
