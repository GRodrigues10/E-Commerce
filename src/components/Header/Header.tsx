"use client";
import React, { useState } from "react";
import {
  HeaderContainer,
  DesktopMenu,
  Inputs,
  WrapperDesktop,
  MobileMenu,
  SideMenu,
} from "./Header.styled";
import { ShoppingCart, Search, X } from "lucide-react";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer id="inicio">
      <h1>FullShop</h1>

      {/* Desktop Menu */}
      <WrapperDesktop>
        <DesktopMenu>
          <nav>
            <Link href="#inicio">Início</Link>
            <Link href="#trending">Em Alta</Link>
            <Link href="#bestsellers">Mais Vendidos</Link>
            <Link href="#reviews">Avaliações</Link>
          </nav>
        </DesktopMenu>
      </WrapperDesktop>

      {/* Botão Hamburger / X */}
      <MobileMenu>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30}/> : "☰"}
        </button>
      </MobileMenu>

      {/* Side Menu lateral */}
      <SideMenu open={menuOpen}>
        <nav>
          <Link href="#inicio" onClick={() => setMenuOpen(false)}>Início</Link>
          <Link href="#trending" onClick={() => setMenuOpen(false)}>Em Alta</Link>
          <Link href="#bestsellers" onClick={() => setMenuOpen(false)}>Mais Vendidos</Link>
          <Link href="#reviews" onClick={() => setMenuOpen(false)}>Avaliações</Link>
        </nav>
      </SideMenu>

      {/* Inputs e carrinho */}
      <Inputs>
        <input type="text" placeholder="Digite um produto..." />
        <button className="search">
          <Search />
        </button>
        <button className="cart">
          <Link href='/cart' style={{color:'black'}}>
            <ShoppingCart />
          </Link>
        </button>
      </Inputs>
    </HeaderContainer>
  );
}

export default Header;
