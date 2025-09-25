// Header.styled.js
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 12vh;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;

  h1 {
    cursor: pointer;
    font-size: 1.5rem;
    
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: center;
    gap: 20px;
    h1 {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 992px) {
    gap: 30px;
    h1 {
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 1200px) {
    gap: 40px;
    h1 {
      font-size: 2rem;
    }
  }
`;

export const MobileMenu = styled.div`
  button {
    font-weight: bold;
    font-size: 1.4rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  @media screen and (min-width: 768px) {
    button {
      display: none;
    }
  }
`;
export const WrapperDesktop = styled.div`

  
  display: flex;
  align-items: center;
  gap: 40px; 
  
`;

export const DesktopMenu = styled.div`
  display: none;
  nav {
    display: flex;
    gap: 20px;

    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
       color: #3a3a3a;
      transition: .4s ease;
      &:hover{
        color: #2c2c2c;
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;

    nav {
      a {
        font-size: 0.8rem;
      }
    }
  }
  @media screen and (min-width: 992px) {
    gap: 30px;
    nav {
      a {
        font-size: 1rem;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    gap: 40px;

    nav {
      a {
        font-size: 1.2rem;
      }
    }
  }
`;

export const Inputs = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;

    input {
      padding: 10px;
      font-size: 0.8rem;
      width: 200px;
      border-radius: 5px;
      outline: none;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      border: none;
    }

    .search {
      position: absolute;
      right: 45px;
      top: 5px;
    }

    .search svg {
      width: 20px;
      transition: 0.4s ease;
      &:hover {
        transform: scale(1.07);
      }
    }

    button {
      cursor: pointer;
      border: none;
      background: transparent;
    }

    .cart{
      position: relative;
      left: 10px;
    }
  }

  @media screen and (min-width: 992px) {
    input {
      padding: 8px;
      font-size: 1rem;
      width: 300px;
      border-radius: 5px;
      outline: none;
    }
  }
`;
