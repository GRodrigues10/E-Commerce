// Trending.tsx
import React, { useRef } from "react";
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

  const scrollCards = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = 400;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <TrendingContainer>
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
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </TrendingCardsContainer>
        </TrendingCardsWrapper>
      </CarouselContainer>
    </TrendingContainer>
  );
};

export default Trending;
