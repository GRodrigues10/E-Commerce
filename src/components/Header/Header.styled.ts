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
  position: fixed;
  z-index: 10000;

  h1 {
    cursor: pointer;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 992px) {
    align-items: center;
    justify-content: center;
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

  @media screen and (min-width: 1440px) {
    gap: 40px;
    h1 {
      font-size: 2.4rem;
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
      transition: 0.4s ease;
      &:hover {
        color: #2c2c2c;
      }
    }
  }

  @media screen and (min-width: 992px) {
    display: flex;
    align-items: center;
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

  @media screen and (min-width: 1440px) {
    gap: 40px;

    nav {
      a {
        font-size: 1.4rem;
      }
    }
  }
`;

export const MobileMenu = styled.div`
  position: relative;
  z-index: 1001; 

  button {
    font-weight: bold;
    font-size: 1.6rem; /* aumenta tamanho do X/Hamburger */
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
    width: 40px;  
    height: 40px; 
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const SideMenu = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background: white;
  box-shadow: ${({ open }) => (open ? "-2px 0 10px rgba(0,0,0,0.3)" : "none")};
  transition: right 0.3s ease-in-out;
  z-index: 999;
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 60px; /* deixa X alinhado com o botão */
    padding-left: 20px;

    a {
      text-decoration: none;
      font-size: 1rem;
      color: #3a3a3a;
      font-weight: 500;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        color: #2c2c2c;
      }
    }
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;





export const Inputs = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: none;
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

    .cart {
      position: relative;
      left: 10px;
    }
  }

  @media screen and (min-width: 992px) {
    display: flex;

    input {
      padding: 8px;
      font-size: 1rem;
      width: 300px;
      border-radius: 5px;
      outline: none;
    }
  }

  @media screen and (min-width: 1440px) {
    input {
      font-size: 1.2rem;
      width: 400px;
      padding: 10px;
    }

    .search {
      position: absolute;
      right: 55px;
      top: 10px;
    }

    .search svg {
      width: 30px;
    }

    .cart svg {
      width: 30px;
      height: 30px;
    }
  }
`;
