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
            image="https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-expressiva_1258-48167.jpg?semt=ais_hybrid&w=740&q=80"
            text="Produto incrível! Chegou super rápido e bem embalado."
            rating={4.5}
          />

          <ReviewsCards
            name="Carlos Souza"
            image="https://randomuser.me/api/portraits/men/75.jpg"
            text="Muito bom, mas demorou um pouco pra chegar."
            rating={3}
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
  text="Gostei bastante, mas o preço poderia ser mais em conta."
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
  text="Cumpre o que promete, mas achei frágil em algumas partes."
  rating={2.5}
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
