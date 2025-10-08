import { Product } from "@/types/product";

const API_URL = "https://e-commerce-api-2u04.onrender.com/products"; 

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(API_URL); 
  if (!res.ok) throw new Error("Erro ao buscar produtos");
  const data: Product[] = await res.json();
  return data;
}

export async function fetchTrending(): Promise<Product[]> {
  const products = await fetchProducts();
  return products.filter(
    (item) =>
      item.category.includes("Em Alta") || item.category.includes("Alta")
  );
}

export async function fetchBestSellers(): Promise<Product[]> {
  const products = await fetchProducts();
  return products.filter(
    (item) =>
      item.category.includes("Mais Vendidos") || item.category.includes("Mais Vendidos")
  );
}

export async function fetchProductById(id: string): Promise<Product | undefined> {
  const products = await fetchProducts();
  return products.find((product) => product._id === id);
}
