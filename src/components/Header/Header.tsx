"use client";
import React from "react";
import {
  HeaderContainer,
  DesktopMenu,
  Inputs,
  MobileMenu,
  WrapperDesktop,
} from "./Header.styled";
import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <HeaderContainer>
      <h1>FullShop</h1>

    

      <WrapperDesktop>
        <DesktopMenu>
          <nav>
            <Link href="#">Início</Link>
            <Link href="#">Em Alta</Link>
            <Link href="#">Mais Vendidos</Link>
            <Link href="#">Avaliações</Link>
          </nav>
        </DesktopMenu>
      </WrapperDesktop>

        <MobileMenu>
        <button>☰</button>
      </MobileMenu>

      <Inputs>
        <input type="text" placeholder="Digite um produto..." />
        <button className="search"><Search/></button>
        <button className="cart"><ShoppingCart/></button>
      </Inputs>
    </HeaderContainer>
  );
}

export default Header;
