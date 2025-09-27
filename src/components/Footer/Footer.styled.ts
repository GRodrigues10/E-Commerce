// Footer.styled.ts
import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  background-color: #1f1f1f;
  color: #fff;
  padding: 60px 20px;
  display: grid;
 

`;

export const FooterInner = styled.div`
width: 100%;

  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  
  


  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;

  }
`;

export const AboutUs = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const UtilsLinks = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 12px;
    a {
      color: #ccc;
      text-decoration: none;
      &:hover {
        color: #fff;
      }
    }
  }
`;

export const Newsletter = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1rem;
    margin-bottom: 16px;
  }
  form {
    display: flex;
    width: 100%;

    input {
      flex: 1;
      padding: 12px;
      border: none;
      border-radius: 4px 0 0 4px;
      font-size: 1rem;
      outline: none;
    }

    button {
      padding: 12px 24px;
      border: none;
      background-color: #E86A33;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 0 4px 4px 0;
      transition: background 0.3s;
      &:hover {
        background-color: rgba(223, 69, 69, 1);
      }
    }
  }
`;

export const SocialMedia = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  .links {
    display: flex;
    gap: 16px;

    a {
      font-size: 1.8rem;
      color: #ccc;
      transition: color 0.3s;
      &:hover {
        color: #fff;
      }
    }
  }
`;

export const FooterBottom = styled.div`
  margin-top: 40px;
  border-top: 1px solid #444;
  padding-top: 20px;
  text-align: center;
  font-size: 0.9rem;
  color: #aaa;
`;
