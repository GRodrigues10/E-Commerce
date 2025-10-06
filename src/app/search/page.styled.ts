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
    font-size: 2.5rem;
    margin-bottom: 40px;
    width: 940px;
  }
`;

export const ResultsSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;

 .loading{
    height: 60vh;
    display: flex;
    align-items: center;
    font-size: 2rem;
 }
`;
