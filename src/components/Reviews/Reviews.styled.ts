// Reviews.styled.ts
import styled from "styled-components";

interface ArrowProps {
  $left?: boolean;
}

export const ContainerReviews = styled.section`
 scroll-margin-top: 80px; 
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow-x: hidden;
  position: relative; /* para as setas ficarem absolutas */

  h2 {
    font-size: 3rem;
    text-align: center;
    position: relative;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 992px) {
    h2 {
      position: relative;
      bottom: 40px;
    }
  }

  @media screen and (min-width: 1200px) {
    h2 {
      bottom: 135px;
    }
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  &:hover button {
    opacity: 1;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 0 25px;

  > * {
    flex-shrink: 0;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ArrowButton = styled.button<ArrowProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$left ? "left: 10px;" : "right: 10px;")}
  background: rgba(0,0,0,0.4);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;
