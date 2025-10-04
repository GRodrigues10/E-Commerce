"use client";
import React from "react";
import { ContainerDetails, DetailsText } from "./page.styled";
import Image from "next/image";
import { Minus, Plus, Star } from "lucide-react";
import { CartInputs } from "@/components/Cart/Cart.styled";
import { CardButton } from "@/components/Cards/Cards.styled";

function page() {
  return (
    <ContainerDetails>
      <Image
        src="https://wallpapers.com/images/featured/ps5-console-png-ywbv2gv3gfw23o3w.jpg"
        alt="Imagem teste"
        width={450}
        height={450}
      />
      <DetailsText>
        <h2 className="details">Detalhes do Produto</h2>
        <h3 className="product">Bola de Futebol Oficial</h3>
        <div className="stars">
          <Star fill="#55555" />
          <Star fill="#55555" />
          <Star fill="#55555" />
          <Star fill="#55555" />
          <Star fill="#55555" />
          <span>(121)</span>
        </div>
        <h3 className="price">R$ 89,99</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque optio
          minima adipisci corporis sequi et sit commodi voluptatibus ad corrupti
          obcaecati sint suscipit laborum, quisquam, recusandae maxime.
        </p>
        <CartInputs>
          <button className="minus" style={{ top: "2px" }}>
            <Minus />
          </button>
          <p className="number">1</p>
          <button className="plus" style={{ top: "2px" }}>
            <Plus />
          </button>
        </CartInputs>
        <CardButton className="add" style={{fontSize:'1.2rem', padding:'12px'}}>Adicionar</CardButton>
      </DetailsText>
    </ContainerDetails>
  );
}

export default page;
