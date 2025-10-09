// Reviews.tsx
import React, { useRef } from "react";
import {
  ContainerCards,
  ContainerReviews,
  CarouselContainer,
  ArrowButton,
} from "./Reviews.styled";
import ReviewsCards from "../ReviewsCards/ReviewsCards";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Reviews: React.FC = () => {
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
    <ContainerReviews id="reviews">
      <h2>Avaliações</h2>

      <CarouselContainer>
        <ArrowButton $left onClick={() => scrollCards("left")}>
          <ChevronLeft size={32} />
        </ArrowButton>

        <ContainerCards ref={containerRef}>
          <ReviewsCards
            name="Natália Lima"
            image="https://randomuser.me/api/portraits/women/65.jpg"
            text="Produto incrível! Chegou super rápido e bem embalado."
            rating={4.5}
          />
          <ReviewsCards
            name="Carlos Souza"
            image="https://randomuser.me/api/portraits/men/75.jpg"
            text="Muito bom, chegou bem antes do prazo!"
            rating={4}
          />
          <ReviewsCards
            name="Fernanda Lima"
            image="https://randomuser.me/api/portraits/women/44.jpg"
            text="Excelente qualidade, superou minhas expectativas!"
            rating={5}
          />
          <ReviewsCards
            name="João Pedro"
            image="https://randomuser.me/api/portraits/men/12.jpg"
            text="Gostei bastante, preço muito justo."
            rating={3.5}
          />
          <ReviewsCards
            name="Mariana Silva"
            image="https://randomuser.me/api/portraits/women/68.jpg"
            text="Chegou antes do prazo e muito bem embalado. Recomendo!"
            rating={4}
          />
          <ReviewsCards
            name="Rafael Gomes"
            image="https://randomuser.me/api/portraits/men/28.jpg"
            text="Cumpre o que promete, bem legal!"
            rating={3.5}
          />
          <ReviewsCards
            name="Patrícia Oliveira"
            image="https://randomuser.me/api/portraits/women/21.jpg"
            text="Atendimento ótimo e produto de qualidade."
            rating={4.5}
          />
          <ReviewsCards
            name="André Santos"
            image="https://randomuser.me/api/portraits/men/50.jpg"
            text="Valeu a pena a compra, utilizo todos os dias!"
            rating={5}
          />
        </ContainerCards>

        <ArrowButton onClick={() => scrollCards("right")}>
          <ChevronRight size={32} />
        </ArrowButton>
      </CarouselContainer>
    </ContainerReviews>
  );
};

export default Reviews;
