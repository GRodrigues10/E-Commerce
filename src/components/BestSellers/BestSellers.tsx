// BestSellers.tsx
import React, { useRef } from "react";
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

  const scrollCards = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = 300;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <BestSellersContainer>
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
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </BestSellersCardsContainer>
        </BestSellersWrapper>
      </CarouselContainer>
    </BestSellersContainer>
  );
};

export default BestSellers;
