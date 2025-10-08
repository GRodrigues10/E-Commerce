import React from "react";
import { BannerContainer, BannerText } from "./Banner.styled";
import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <BannerContainer>
      <BannerText>
        <h1>Novidades</h1>
        <p>Descubra nossas últimas tendências e itens essenciais para você</p>
        <button><Link href='#trending' style={{color:'white', textDecoration:'none'}}>Comprar agora</Link></button>
      </BannerText>
      <Image
        src="/product-banner3.png"
        alt="Minha Foto"
        width={350}
        height={350}
      />
    </BannerContainer>
  );
}

export default Banner;
