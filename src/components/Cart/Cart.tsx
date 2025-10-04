import React from "react";
import {
  CartContainer,
  CartControls,
  CartDetails,
  CartInputs,
  CartText,
} from "./Cart.styled";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

function Cart() {
  return (
    <CartContainer>
      <CartDetails>
        <Image
          src="https://cms-assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png"
          width={150}
          height={150}
          alt="Xbox Series X"
        />
        <CartText>
          <h3>Xbox Series X</h3>

          {/* Tag de promoção */}
          <div style={{ display: "inline" }}>
            <span className="tag-sale">Eletrônicos</span>
          </div>

          {/* Informação de frete */}
          <p className="shipping-info">
            Entrega 100% gratuita em até 3 dias úteis.
          </p>

          <h4>R$ 5.999,00</h4>
        </CartText>
        <CartControls>
          <Trash2 />
          <CartInputs>
            <button className="minus">
              <Minus  />
            </button>
            <p className="number">1</p>
            <button className="plus">
              <Plus />
            </button>
          </CartInputs>
        </CartControls>
      </CartDetails>
    </CartContainer>
  );
}

export default Cart;
