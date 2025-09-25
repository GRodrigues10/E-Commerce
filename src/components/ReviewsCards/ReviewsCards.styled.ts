import styled from "styled-components";

export const ContainerReviewsCards = styled.div`
  width: 250px;
  height: 380px;
  background-color: #e8e3dc;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  img {
    border-radius: 50%;
    object-fit: cover;
    margin-top: 10px;
  }
`;

export const ReviewCardText = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin-top: 10px;
    font-size: 1.5rem;
  }
  p {
    margin-top: 10px;
    font-size: 1.1rem;
    text-align: justify;
    text-justify: auto; /* ou inter-word */
    word-spacing: normal; /* evita espaçamento extra entre palavras */
  }
`;
