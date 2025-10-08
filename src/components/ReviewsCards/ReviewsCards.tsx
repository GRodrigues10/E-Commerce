import React from "react";
import { ContainerReviewsCards, ReviewCardText } from "./ReviewsCards.styled";
import Image from "next/image";
import { ContainerStars, HalfStarWrapper } from "../Cards/Cards.styled";
import { Star } from "lucide-react";

interface ReviewsCardsProps {
  name: string;
  image: string;
  text: string;
  rating: number; // ex: 4.5
}

function ReviewsCards({ name, image, text, rating }: ReviewsCardsProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <ContainerReviewsCards>
      <Image
        src={image}
        alt={`Foto de ${name}`}
        width={150}
        height={150}
        unoptimized
      />
      <ReviewCardText>
        <h3>{name}</h3>
        <ContainerStars>
          {Array.from({ length: fullStars }).map((_, i) => (
            <Star key={i} fill="#555555" stroke="#555555" strokeWidth={1} />
          ))}
          {hasHalf && (
            <HalfStarWrapper>
              <Star fill="#fff" stroke="#555555" strokeWidth={1} />
              <div className="half">
                <Star fill="#555555" stroke="#555555" strokeWidth={1} />
              </div>
            </HalfStarWrapper>
          )}
        </ContainerStars>
        <p>{text}</p>
      </ReviewCardText>
    </ContainerReviewsCards>
  );
}

export default ReviewsCards;
