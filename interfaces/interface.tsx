export interface Book {
  id: number;
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
