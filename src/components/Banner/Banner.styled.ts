import styled from "styled-components";

export const BannerContainer = styled.section`
  width: 100%;
  background-color: #e8e3dc;
  padding-top: 12vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  @media screen and (min-width: 530px){
      h1{
        padding-top: 20px;
      }
  }

  @media screen and (min-width: 768px) {
    h1{
        padding-top: 0px;

    }
    flex-direction: row;
  }

  @media screen and (min-width: 992px) {
    img {
      width: 400px;
      height: 550px;
    }
  }

  @media screen and (min-width: 1200px) {
    img {
      width: 550px;
      height: 700px;
      
    }
  }

    @media screen and (min-width: 1440px) {
    img {
       width: 560px;
      height: 710px;
    }
  }
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;

  h1 {
    font-size: 2.5rem;
    color: black;
    margin-top: 20px;
  }
  p {
    font-size: 1.1rem;
    max-width: 250px;
    color: #4b4b4b;
  }

  button {
    width: 100%;
    max-width: 250px;
    padding: 10px;
    font-size: 1.1rem;
    background-color: #e86a33;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background-color: #cf5e2d;
    }
  }

  @media screen and (min-width: 530px) {
    h1 {
      font-size: 2.7rem;
    }
    p {
      font-size: 1.2rem;
    }

    button {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2.8rem;
      margin-top: 0px;
    }
    p {
      font-size: 1.2rem;
    }

    button {
      width: 250px;
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 992px) {
    width: 400px;
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.2rem;
      max-width: 350px;
    }

    button {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 500px;

    h1 {
      font-size: 4.5rem;
    }
    p {
      font-size: 1.3rem;
      max-width: 340px;
    }

    button {
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 500px;

    h1 {
      font-size: 5rem;
    }
    p {
      font-size: 1.5rem;
      max-width: 400px;
    }

    button {
      font-size: 1.5rem;
      padding: 12px;
    }
  }
`;
