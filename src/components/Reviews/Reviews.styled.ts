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
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow-x: hidden;
  position: relative; /* para as setas ficarem absolutas */

  h2 {
    font-size: 2rem;
    text-align: center;
    position: relative;
    margin-bottom: 30px;
    bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    h2 {
      margin-bottom: 30px;
      font-size: 3rem;
      bottom: 70px;
    }
  }

  @media screen and (min-width: 992px) {
    h2 {
      bottom: 70px;
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 1200px) {
    h2 {
      bottom: 100px;
    }
  }

   @media screen and (min-width: 1440px) {
    h2 {
      font-size: 3.5rem;
      bottom: 140px;
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
