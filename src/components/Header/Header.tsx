"use client";
import React, { useState, useEffect } from "react";
import {
  HeaderContainer,
  DesktopMenu,
  Inputs,
  WrapperDesktop,
  MobileMenu,
  SideMenu,
  InputsMobile,
} from "./Header.styled";
import { ShoppingCart, Search, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => setIsClient(true), []);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <HeaderContainer id="inicio">
      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
        <h1>FullShop</h1>
      </Link>

      {/* Menu Desktop */}
      <WrapperDesktop>
        <DesktopMenu>
          <nav>
            <Link href="#inicio">Início</Link>
            <Link href="#trending">Em Alta</Link>
            <Link href="#bestsellers">Mais Vendidos</Link>
            <Link href="#reviews">Avaliações</Link>
          </nav>
        </DesktopMenu>

        {/* Inputs Desktop */}
        <Inputs>
          <input
            type="text"
            placeholder="Digite um produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search" onClick={handleSearch}>
            <Search />
          </button>
          <button className="cart">
            <Link href="/cart" style={{ color: "black" }}>
              <ShoppingCart />
            </Link>
          </button>
        </Inputs>
      </WrapperDesktop>

      {/* Menu Mobile */}
      <MobileMenu>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : "☰"}
        </button>
      </MobileMenu>

      {/* SideMenu Mobile */}
      {isClient && (
        <SideMenu open={menuOpen}>
          <nav>
            <Link href="#inicio" onClick={() => setMenuOpen(false)}>
              Início
            </Link>
            <Link href="#trending" onClick={() => setMenuOpen(false)}>
              Em Alta
            </Link>
            <Link href="#bestsellers" onClick={() => setMenuOpen(false)}>
              Mais Vendidos
            </Link>
            <Link href="#reviews" onClick={() => setMenuOpen(false)}>
              Avaliações
            </Link>
          </nav>

          {/* Inputs Mobile */}
          <InputsMobile>
            <input
              type="text"
              placeholder="Digite um produto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="search" onClick={handleSearch}>
              Buscar
            </button>
            <Link href="/cart" style={{ color: "black" }}>
            <button className="cart">
              
                <ShoppingCart />
            
            </button>
              </Link>
          </InputsMobile>
        </SideMenu>
      )}
    </HeaderContainer>
  );
}

export default Header;
