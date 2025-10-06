'use client'
import styled from "styled-components";

export const ContainerDetails = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #e8e3dc;
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 130px;
  gap: 50px;

  img {
    width: 350px;
    height: 350px;
    margin-bottom: 20px;
     
     
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    img {
      width: 300px;
      height: 300px;
      margin-bottom: 0px;
   
    }
  }

  @media screen and (min-width: 992px) {
    padding-top: 120px;
    img {
      width: 450px;
      height: 450px;
  
     
    }
  }

  @media screen and (min-width: 1200px) {
    padding-top: 90px;
  }
`;

export const DetailsText = styled.div`
  display: flex;
  height: 450px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  .details {
    font-size: 1.3rem;
  }

  .product {
    font-size: 2.5rem;
    max-width: 650px;
   text-align: center;
  }

  span {
    font-size: 0.9rem;
  }

  .stars {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  svg {
    width: 20px;
  }

  .price {
    font-size: 1.5rem;
  }

  p {
    max-width: 300px;
    text-align: justify;
  }

  .add {
    margin-bottom: 30px;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
  align-items: start;

    height: 450px;
    width: auto;
  }

  @media screen and (min-width: 992px) {
    .details {
      font-size: 1.5rem;
      text-decoration: underline;
    }

    .product {
      font-size: 2.5rem;
    }

    span {
      font-size: 0.9rem;
    }

    .price {
      font-size: 2rem;
      
    }

    p {
      max-width: 320px;
    }
    .add {
      margin-bottom: 0;
      width: 100%;
    
    }
  }
`;
