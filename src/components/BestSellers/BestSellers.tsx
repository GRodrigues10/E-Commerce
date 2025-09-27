// BestSellers.tsx
import React, { useRef, useEffect, useState } from "react";
import {
  BestSellersContainer,
  BestSellersWrapper,
  BestSellersCardsContainer,
  ArrowButton,
  CarouselContainer,
} from "./BestSellers.styled";
import Cards from "../Cards/Cards";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BestSellers: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [bestSellers, setBestSellers] = useState<any[]>([]);

  // Função de scroll
  const scrollCards = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = 300;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Buscar produtos
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setBestSellers(data.slice(0, 8))); // por exemplo, os 8 mais vendidos
  }, []);

  return (
    <BestSellersContainer id="bestsellers">
      <h2>Mais Vendidos</h2>

      <CarouselContainer>
        {/* Setas fixas */}
        <ArrowButton $left onClick={() => scrollCards("left")}>
          <ChevronLeft size={32} />
        </ArrowButton>
        <ArrowButton onClick={() => scrollCards("right")}>
          <ChevronRight size={32} />
        </ArrowButton>

        {/* Wrapper que rola */}
        <BestSellersWrapper ref={containerRef}>
          <BestSellersCardsContainer>
            {/* Passando os produtos para o componente Cards */}
            <Cards products={bestSellers} />
          </BestSellersCardsContainer>
        </BestSellersWrapper>
      </CarouselContainer>
    </BestSellersContainer>
  );
};

export default BestSellers;
