import React from "react";
import {
  CardButton,
  CardCategory,
  CardContainer,
  CardText,
  ContainerInfo,
  ContainerStars,
  HalfStarWrapper,
} from "./Cards.styled";
import Image from "next/image";
import { Star } from "lucide-react";
import { formatPrice } from "@/utils/FormatPrice";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/context/context";

interface CardsProps {
  products: Product[];
}

const Cards: React.FC<CardsProps> = ({ products }) => {
  const { addToCart } = useCart();
  return (
    <>
      {products.map((product) => {
        const rating =
          typeof product.rate === "number"
            ? product.rate
            : product.rate?.rate || 0;

        const count =
          typeof product.rate === "object" ? product.rate?.count : 0;

        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        return (
          <CardContainer
            key={product._id}
            onClick={() => {
             
              window.location.href = `/details/${product._id}`;
            }}
          >
            <Image
              src={product.image || "/fallback.png"}
              alt={product.name || "Produto sem nome"}
              width={260}
              height={260}
            />
            <CardCategory>
              <p>{product.category[0]}</p>
            </CardCategory>
            <CardText>
              <h3>
                {product.name?.length && product.name.length > 20
                  ? product.name.slice(0, 20) + "..."
                  : product.name || "Produto sem nome"}
              </h3>
              <ContainerInfo>
                <span className="price">
                  R${" "}
                  {product.price !== undefined
                    ? formatPrice(product.price)
                    : "0.00"}
                </span>
                <ContainerStars>
                  {Array.from({ length: fullStars }).map((_, i) => (
                    <Star
                      key={"full" + i}
                      fill="#555555"
                      stroke="#555555"
                      strokeWidth={1}
                    />
                  ))}

                  {hasHalfStar && (
                    <HalfStarWrapper>
                      <Star fill="#fff" stroke="#555555" strokeWidth={1} />
                      <div className="half">
                        <Star fill="#555555" stroke="#555555" strokeWidth={1} />
                      </div>
                    </HalfStarWrapper>
                  )}

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

            
            <CardButton
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
                console.log("Produto adicionado:", product.name);
              }}
            >
              Adicionar
            </CardButton>
          </CardContainer>
        );
      })}
    </>
  );
};

export default Cards;
