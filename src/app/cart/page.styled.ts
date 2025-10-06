import styled from "styled-components";

export const CartContainer = styled.section`
  min-height: 100vh;
  padding: 20px;
  background-color: #e8e3dc;
  padding-top: 130px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LayoutCart = styled.div`
  width: 100%; 
  max-width: 990px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px; 
  padding: 20px; 

  @media screen and (min-width: 992px) {
    align-items: flex-start;
    max-width: 880px;
    flex-direction: row;
  }
  @media screen and (min-width: 1200px) {
    max-width: 980px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1170px;
    gap: 0px; 
  }
`;

export const CartContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  h2 {
    align-self: start;
    font-size: 2rem;
  }
  button {
    align-self: start;
    svg {
      cursor: pointer;
      transition: 0.4s ease;
      &:hover {
        color: red;
      }
    }
  }
`;
