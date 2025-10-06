'use client'

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import { Minus, Plus, Star } from "lucide-react";
import { ContainerDetails, DetailsText } from "./page.styled";
import { CartInputs } from "@/components/Cart/Cart.styled";
import { CardButton } from "@/components/Cards/Cards.styled";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:4000/products/${id}`);
        if (!res.ok) throw new Error("Produto não encontrado");
        const data: Product = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <h2>Carregando produto...</h2>;
  if (!product) return <h2>Produto não encontrado 😕</h2>;

  const rating = typeof product.rate === "number" ? product.rate : product.rate?.rate || 0;
  const count = typeof product.rate === "object" ? product.rate?.count : 0;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <ContainerDetails>
      <Image
        src={product.image ?? "/fallback.png"}
        alt={product.name ?? "Produto"}
        width={450}
        height={450}
      />
      <DetailsText>
        <h2 className="details">Detalhes do Produto</h2>
        <h3 className="product">{product.name}</h3>

        <div className="stars">
          {Array.from({ length: fullStars }).map((_, i) => (
            <Star key={i} fill="#55555" />
          ))}
          {hasHalfStar && <Star fill="#ccc" />}
          <span>({product.stock})</span>
        </div>

        <h3 className="price">R$ {product.price?.toFixed(2)}</h3>
        <p>{product.description}</p>

        <CartInputs>
          <button className="minus" style={{position:'relative', top:'2px'}}>
            <Minus />
          </button>
          <p className="number">1</p>
          <button className="plus" style={{position:'relative', top:'2px'}}>
            <Plus />
          </button>
        </CartInputs>

        <CardButton className="add">Adicionar</CardButton>
      </DetailsText>
    </ContainerDetails>
  );
}
