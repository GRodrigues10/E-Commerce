// Reviews.tsx
import React, { useRef } from 'react';
import { ContainerCards, ContainerReviews, CarouselContainer, ArrowButton } from './Reviews.styled';
import ReviewsCards from '../ReviewsCards/ReviewsCards';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Reviews: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollCards = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const scrollAmount = 400;
    containerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <ContainerReviews>
      <h2>Avaliações</h2>

      <CarouselContainer>
        <ArrowButton $left onClick={() => scrollCards('left')}>
          <ChevronLeft size={32} />
        </ArrowButton>

        <ContainerCards ref={containerRef}>
          <ReviewsCards />
          <ReviewsCards />
          <ReviewsCards />
          <ReviewsCards />
          <ReviewsCards />
          <ReviewsCards />
        </ContainerCards>

        <ArrowButton onClick={() => scrollCards('right')}>
          <ChevronRight size={32} />
        </ArrowButton>
      </CarouselContainer>
    </ContainerReviews>
  );
};

export default Reviews;
