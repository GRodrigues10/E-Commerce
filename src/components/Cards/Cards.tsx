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
import { formatPrice } from "@/utils/FormatPrice";
interface Product {
  _id: string;
  name?: string;
  price?: number;
  image?: string;
  description?: string;
  // pode ser número simples OU objeto
  rate?: number | { rate: number; count?: number };
  stock?:number
}

interface CardsProps {
  products: Product[];
}

const Cards: React.FC<CardsProps> = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        // Normaliza a nota
        const rating =
          typeof product.rate === "number"
            ? product.rate
            : product.rate?.rate || 0;

        const count =
          typeof product.rate === "object" ? product.rate?.count : 0;

        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        return (
          <CardContainer key={product._id}>
            <Image
              src={product.image || "/fallback.png"}
              alt={product.name || "Produto sem nome"}
              width={280}
              height={280}
            />
            <CardText>
              <h3>
                {product.name?.length && product.name.length > 20
                  ? product.name.slice(0, 20) + "..."
                  : product.name || "Produto sem nome"}
              </h3>
              <ContainerInfo>
                <span className="price">
                  R$ {" "}
                   {product.price !== undefined
                    ? formatPrice(product.price)
                    : "0.00"}
                </span>
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

                  <span>({product.stock || 0})</span>
                </ContainerStars>
              </ContainerInfo>
              <p>
                {product.description?.length && product.description.length > 60
                  ? product.description.slice(0, 60) + "..."
                  : product.description || "Sem descrição"}
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
