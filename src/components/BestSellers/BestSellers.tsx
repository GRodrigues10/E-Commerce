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
import { fetchBestSellers } from "@/api/api";


const BestSellers: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [bestSellers, setBestSellers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Função de scroll
  const scrollCards = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = 300;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const SkeletonCard: React.FC = () => (
  <div style={{
    maxWidth: "372px",
    height: "500px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    margin: "0.5rem",
  }} />
);




useEffect(() => {
  fetchBestSellers()
    .then((data) => setBestSellers(data))
    .catch((err) => console.error(err))
    .finally(() => setLoading(false)); // <<<<< aqui
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
            {loading ? (
              // Mostra 4 skeletons enquanto carrega
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : (
              <Cards products={bestSellers} />
            )}
          </BestSellersCardsContainer>
        </BestSellersWrapper>
      </CarouselContainer>
    </BestSellersContainer>
  );
};

export default BestSellers;
