export type ProductProps = {
  id: number;
  product_name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};
