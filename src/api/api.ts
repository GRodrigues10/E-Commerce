import { Product } from "@/types/product";

const API_URL = "http://localhost:4000";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/products`);
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
      item.category.includes("Mais Vendidos") ||
      item.category.includes("Mais Vendidos")
  );
}


export async function fetchProductById(id: string): Promise<Product | undefined> {
  const products = await fetchProducts();
  return products.find((product) => product._id === id);
}