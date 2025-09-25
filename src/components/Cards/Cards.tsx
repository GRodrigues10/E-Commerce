import React from "react";
import {
    CardButton,
  CardContainer,
  CardText,
  ContainerStars,
  HalfStarWrapper,
} from "./Cards.styled";
import Image from "next/image";
import { Star } from "lucide-react";

function Cards() {
  return (
    <CardContainer>
      <Image
        src="/product-banner3.png"
        alt="PlayStation 5 com controle"
        width={250}
        height={280}
      />
      <CardText>
        <h3>Mochila de Couro</h3>
        <ContainerStars>
          <Star fill="#555555" stroke="#555555" strokeWidth={1} />
          <Star fill="#555555" stroke="#555555" strokeWidth={1} />
          <Star fill="#555555" stroke="#555555" strokeWidth={1} />
          <Star fill="#555555" stroke="#555555" strokeWidth={1} />

          <HalfStarWrapper>
            <Star fill="#fff" stroke="#555555" strokeWidth={1} />
            <div className="half">
              <Star fill="#555555" stroke="#555555" strokeWidth={1} />
            </div>
          </HalfStarWrapper>

          <span>(145)</span>
        </ContainerStars>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut animi
          non molestias.
        </p>
      </CardText>
      <CardButton>Adicionar</CardButton>
    </CardContainer>

  );
}

export default Cards;
