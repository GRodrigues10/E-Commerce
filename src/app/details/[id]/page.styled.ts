"use client";
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


export const SkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const SkeletonCardStyled = styled.div`
margin: 20px;
  margin-top: 150px;
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 900px;
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 12px;
  align-items: center;
  flex-wrap: wrap;

  .skeleton-image {
    width: 450px;
    height: 450px;
    background-color: #e0e0e0;
    border-radius: 8px;
    animation: pulse 1.5s infinite ease-in-out;
  }

  .skeleton-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;

    .rect1 {
      width: 60%;
      height: 24px;
      border-radius: 4px;
      background-color: #e0e0e0;
    }
    .rect2 {
      width: 80%;
      height: 16px;
      border-radius: 4px;
      background-color: #e0e0e0;
    }
    .rect3 {
      width: 50%;
      height: 16px;
      border-radius: 4px;
      margin-bottom: 2rem;
      background-color: #e0e0e0;
    }
    .rect4 {
      width: 30%;
      height: 40px;
      border-radius: 6px;
      background-color: #e0e0e0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (min-width: 530px) {
    margin: 20px;
    margin-top: 160px;
    width: 450px;

    .skeleton-image {
      width: 450px;
      height: 450px;
      background-color: #e0e0e0;
      border-radius: 8px;
      animation: pulse 1.5s infinite ease-in-out;
    }
  }
  @media screen and (min-width: 768px) {
  margin: 20px;
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 900px;
  width: 90%;
  background-color: #f3f3f3;
  border-radius: 12px;
  align-items: center;
  flex-wrap: wrap;
    margin: 0;
    .skeleton-image {
      width: 200px;
      height: 250px;
      background-color: #e0e0e0;
      border-radius: 8px;
      animation: pulse 1.5s infinite ease-in-out;
    }
  }

  @media screen and (min-width: 992px) {
    margin-top: 80px;
    .skeleton-image {
      width: 400px;
      height: 400px;
      background-color: #e0e0e0;
      border-radius: 8px;
      animation: pulse 1.5s infinite ease-in-out;
    }
  }

  @media screen and (min-width: 1200px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .skeleton-image {
      width: 300px;
      height: 300px;
    }

    .skeleton-text {
      align-items: center;

      .rect1,
      .rect2,
      .rect3,
      .rect4 {
        width: 80%;
      }
    }
  }
`;
