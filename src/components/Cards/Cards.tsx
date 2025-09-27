import React from "react";
import {
  CardButton,
  CardContainer,
  CardText,
  ContainerInfo,
  ContainerStars,
  HalfStarWrapper,
} from "./Cards.styled";
import Image from "next/image";
import { Star } from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  rating?: { rate: number; count: number }; // rate = nota 0-5
}

interface CardsProps {
  products: Product[];
}

const Cards: React.FC<CardsProps> = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        const rating = product.rating?.rate || 0;
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
          <CardContainer key={product.id}>
            <Image
              src={product.image}
              alt={product.title}
              width={250}
              height={280}
            />
            <CardText>
              <h3>
                {product.title.length > 20
                  ? product.title.slice(0, 20) + "..."
                  : product.title}
              </h3>
              <ContainerInfo>
                <span className="price">${product.price.toFixed(2)}</span>
                <ContainerStars>
                  {/* Estrelas cheias */}
                  {Array.from({ length: fullStars }).map((_, i) => (
                    <Star
                      key={"full" + i}
                      fill="#555555"
                      stroke="#555555"
                      strokeWidth={1}
                    />
                  ))}

                  {/* Meia estrela */}
                  {hasHalfStar && (
                    <HalfStarWrapper>
                      <Star fill="#fff" stroke="#555555" strokeWidth={1} />
                      <div className="half">
                        <Star fill="#555555" stroke="#555555" strokeWidth={1} />
                      </div>
                    </HalfStarWrapper>
                  )}

                  {/* Estrelas vazias */}
                  {Array.from({
                    length: 5 - fullStars - (hasHalfStar ? 1 : 0),
                  }).map((_, i) => (
                    <Star
                      key={"empty" + i}
                      fill="#fff"
                      stroke="#555555"
                      strokeWidth={1}
                    />
                  ))}

                  <span>({product.rating?.count || 0})</span>
                </ContainerStars>
              </ContainerInfo>
              <p>
                {product.description.length > 60
                  ? product.description.slice(0, 60) + "..."
                  : product.description}
              </p>
            </CardText>
            <CardButton>Adicionar</CardButton>
          </CardContainer>
        );
      })}
    </>
  );
};

export default Cards;
