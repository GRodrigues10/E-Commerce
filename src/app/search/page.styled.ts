import styled from "styled-components";

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
    margin-bottom: 10px;
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
