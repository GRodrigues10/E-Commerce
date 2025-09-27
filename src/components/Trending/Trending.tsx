// Trending.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  TrendingCardsWrapper,
  TrendingCardsContainer,
  TrendingContainer,
  ArrowButton,
  CarouselContainer,
} from "./Trending.styled";
import Cards from "../Cards/Cards";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Trending: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [trendingProducts, setTrendingProducts] = useState<any[]>([]);

  const scrollCards = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = 400;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Buscar produtos em alta
useEffect(() => {
  fetch("https://fakestoreapi.com/products?limit=20")
    .then((res) => res.json())
    .then((data) => {
      const electronics = data.filter((p: any) => p.category === "electronics").slice(0, 10);
      const others = data.filter((p: any) => p.category !== "electronics").slice(0, 5);
      
      const mixedProducts = [...electronics, ...others]; // mistura eletrônicos e outros
      setTrendingProducts(mixedProducts);
    });
}, []);

  return (
    <TrendingContainer id="trending">
      <h2>Em Alta</h2>

      <CarouselContainer>
        <ArrowButton $left onClick={() => scrollCards("left")}>
          <ChevronLeft size={32} />
        </ArrowButton>
        <ArrowButton onClick={() => scrollCards("right")}>
          <ChevronRight size={32} />
        </ArrowButton>

        <TrendingCardsWrapper ref={containerRef}>
          <TrendingCardsContainer>
            {/* Passando os produtos para o Cards */}
            <Cards products={trendingProducts} />
          </TrendingCardsContainer>
        </TrendingCardsWrapper>
      </CarouselContainer>
    </TrendingContainer>
  );
};

export default Trending;
