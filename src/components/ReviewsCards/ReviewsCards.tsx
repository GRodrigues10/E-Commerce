import React from "react";
import { ContainerReviews } from "../Reviews/Reviews.styled";
import { ContainerReviewsCards, ReviewCardText } from "./ReviewsCards.styled";
import Image from "next/image";
import { ContainerStars, HalfStarWrapper } from "../Cards/Cards.styled";
import { Star } from "lucide-react";

function ReviewsCards() {
  return (
    <ContainerReviewsCards>
      <Image
        src="https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-expressiva_1258-48167.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Imagem Review"
        width={150} // define largura
        height={150} // define altura
      />
      <ReviewCardText>
          
        <h3>Helen Ganzaroli</h3>
        <ContainerStars>
          <Star fill="#555555" stroke="#555555" strokeWidth={1} />
          <Star fill="#555555" stroke="#555555" strokeWidth={1} />
          <Star fill="#555555" stroke="#555555" strokeWidth={1} />
          <Star fill="#555555" stroke="#555555" strokeWidth={1} />

          <HalfStarWrapper>
            <Star fill="#fff" stroke="#555555" strokeWidth={1} />
            <div className="half">
              <Star fill="#555555" stroke="#555555" strokeWidth={1} />
            </div>
          </HalfStarWrapper>

        </ContainerStars>
        <p>Produto incrível! Chegou super rápido e bem embalado. Estou muito satisfeita com a compra!</p>
      </ReviewCardText>
    </ContainerReviewsCards>
  );
}

export default ReviewsCards;
