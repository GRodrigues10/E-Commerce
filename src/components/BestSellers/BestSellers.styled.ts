import styled from "styled-components";

export const BestSellersContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 25px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e8e3dc;
  padding-top: 40px;

  h2 {
    position: relative;
;
   margin-bottom: 40px;
    font-size: 3rem;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 20px;
    }
  }

  
  @media screen and (min-width: 1200px) {
    h2{
      position: relative;
      bottom: 40px;
    }
  }
`;

export const BestSellersWrapper = styled.div`
  width: 100%;
  overflow-x: auto; 
  position: relative;
  display: flex;
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

export const BestSellersCardsContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: nowrap;
  transition: all 0.3s ease;

  > * {
    flex: 0 0 330px;
    min-width: 250px;
  }

  > *:last-child {
    margin-right: 20px;
  }
`;

export const ArrowButton = styled.button<{ $left?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$left ? "left: 10px;" : "right: 10px;")}
  background: rgba(0, 0, 0, 0.4); /* cor preta semi-transparente */
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
  transition: opacity 0.3s ease, background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7); /* hover mais escuro */
    
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;

  &:hover ${ArrowButton} {
    opacity: 1;
  }
`;
