export interface Product {
  _id: string;
  category:string;
  name?: string;
  price?: number;
  image?: string;
  description?: string;
  // pode ser número simples OU objeto
  rate?: number | { rate: number; count?: number };
  stock?: number;
}