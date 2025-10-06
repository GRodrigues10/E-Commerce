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
import { fetchTrending } from "@/api/api";
import { SkeletonCard } from "../SkeletonCard/SkeletonCard";


// SkeletonCard para mostrar enquanto carrega

const Trending: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [trendingProducts, setTrendingProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // estado de loading

  const scrollCards = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = 400;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    const SkeletonCard: React.FC = () => (
  <div style={{
    maxWidth: "372px",
    height: "500px",
    backgroundColor: "#e0e0e0",
    borderRadius: "8px",
    margin: "0.5rem",
  }} />
);

  };

  useEffect(() => {
    fetchTrending()
      .then((data) => setTrendingProducts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false)); // termina o loading
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
            {loading ? (
              // Mostra 4 skeletons enquanto carrega
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : (
              // Passando os produtos para o Cards quando carregou
              <Cards products={trendingProducts} />
            )}
          </TrendingCardsContainer>
        </TrendingCardsWrapper>
      </CarouselContainer>
    </TrendingContainer>
  );
};

export default Trending;
