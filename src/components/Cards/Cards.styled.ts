import styled from "styled-components";

export const CardContainer = styled.div`
  width: 380px;
  height: 500px;
  background-color: #F9F9F9;
  /* background-color: black; */
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;


  @media screen and (min-width: 1200px){
    margin-left: 5px;
  }
`;

export const ContainerStars = styled.div`
margin-top: 10px;
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

export const CardButton = styled.button `
width: 90%;
padding: 10px;
font-size: 1rem;
cursor: pointer ;
background-color: #333333;
border-radius: 8px;
color: white;
font-size: 1.1rem;
transition: .4s ease;

&:hover{
    background-color: #222222;
}
`
