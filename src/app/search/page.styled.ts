import styled, { keyframes } from "styled-components";

export const ContainerSearch = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #e8e3dc;
  padding-top: 130px;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    margin-bottom: 40px;
    text-align: center;
  }

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
    margin-bottom: 0px;
  }
  @media screen and (min-width: 1200px) {
    h1 {
      position: relative;
      top: 5px;
      text-align: start;
      width: 1160px;
      font-size: 2.5rem;
      margin-bottom: 45px;
    }
  }
  @media screen and (min-width: 1440px) {
    h1 {
      text-align: start;
      width: 1165px;
      font-size: 2.8rem;
    }
  }
`;

export const ResultsSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin-bottom: 60px;

  .loading {
    height: 60vh;
    display: flex;
    align-items: center;
    font-size: 2rem;
    text-align: center;
  }
`;

// animação de loading
const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

// SkeletonCard com fundo branco e efeito de shimmer
export const SkeletonCardStyled = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  width: 350px;
  height: 500px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 8px;

  div {
    background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
    background-size: 400px 100%;
    animation: ${shimmer} 1.5s infinite linear;
    border-radius: 4px;
  }

  .image {
    height: 150px;
  }

  .text {
    height: 20px;
    margin-top: 8px;
  }

  .text-short {
    width: 50%;
    height: 20px;
    margin-top: 8px;
  }

    /* @media screen and (min-width: 768px) {
    width: 350px;
    height: 500px;
  }

    @media screen and (min-width: 992px) {
    width: 350px;
    height: 500px;
  } */

  @media screen and (min-width: 1200px) {
    width: 350px;
    height: 500px;
  }
`;
