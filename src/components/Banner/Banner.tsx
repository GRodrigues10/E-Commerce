import React from "react";
import { BannerContainer, BannerText } from "./Banner.styled";
import Image from "next/image";

function Banner() {
  return (
    <BannerContainer>
      <BannerText>
        <h1>Novidades</h1>
        <p>Descubra nossas últimas tendências e itens essenciais para você</p>
        <button>Comprar agora</button>
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
