// Trending.styled.ts
import styled from "styled-components";

interface ArrowProps {
  $left?: boolean; 
}

export const TrendingContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 25px 0px;


  h2 {
    
    font-size: 3rem;
    margin-bottom: 40px;

   

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 20px;
      position: relative;
      bottom:20px;
    }
  }

  @media screen and (min-width: 1200px) {
    h2{
      position: relative;
      bottom: 30px;
    }
  }

  
`;

export const TrendingCardsWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  align-items: center; /* centraliza verticalmente */
  justify-content: flex-start;
  padding-left: 20px; 
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TrendingCardsContainer = styled.div`
  display: flex;
  align-items: center; /* centraliza cada card verticalmente */
  justify-content: flex-start;
  gap: 30px;
  flex-wrap: nowrap;
  transition: all 0.3s ease;

  > * {
    flex: 0 0 330px;
    min-width: 250px;
  }

  @media screen and (min-width: 530px) {
    > * {
      flex: 0 0 380px;
    }
  }

  /* último card com margem extra */
  > *:last-child {
    margin-right: 20px;
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
    background: rgba(0,0,0,0.7);
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;

  &:hover ${ArrowButton} {
    opacity: 1;
  }
`;
