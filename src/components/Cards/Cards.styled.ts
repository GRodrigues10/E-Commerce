import styled from "styled-components";

export const CardContainer = styled.div`
  padding-top: 25px;
  width: 330px;
  height: 430px;
   
  flex-shrink: 0;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 10px;
  cursor: pointer;
  transition: box-shadow 0.5s ease, transform 0.5s ease;

  &:hover {
    /* Sem scale, só aumenta a sombra */
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
    transform: translateY(-2px); /* leve elevação, sem empurrar cards */
  }
  img {
    height: 190px;
    width: 190px;
  }
  @media screen and (min-width: 530px) {
    width: 290px;
    height: 390px;
  
    img {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (min-width:768px) {
   /*  */
  }


  @media screen and (min-width: 992px) {
      width: 250px;
    height: 350px; 

    img{
      height: 100px;
      width: 100px;
    }
  }
  @media screen and (min-width: 1200px) {
      width: 353px;
    height: 500px;
    img{
      height: 260px;
      width: 260px;
    }
    margin-left: 5px;
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; /* centraliza verticalmente estrelas e preço */
  margin-top: 10px;

  .price {
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

export const ContainerStars = styled.div`
  display: flex;
  align-items: center; // alinha verticalmente estrelas e texto
  gap: 4px; // espaço entre estrelas e texto

  svg {
    width: 20px;
    height: 20px;
  }

  p {
    margin: 0; // remove margin padrão
    font-size: 0.9rem;
    color: #555555;
  }
`;

export const HalfStarWrapper = styled.div`
  position: relative;
  width: 20px;
  height: 20px;

  .half {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%; // metade da estrela
    height: 100%;
    overflow: hidden;
  }
`;

export const CardText = styled.div`
  width: 100%;
  padding: 20px;

  h3 {
    font-size: 1.5rem;
    color: #333333;
  }

  p {
    color: #555555;
    margin-top: 10px;
  }
`;

export const CardButton = styled.button`
  width: 90%;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #333333;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 1.1rem;
  transition: 0.4s ease;

  &:hover {
    background-color: #222222;
  }
`;
