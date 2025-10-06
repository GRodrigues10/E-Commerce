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
import { useCart } from "@/context/context";
import { formatPrice } from "@/utils/FormatPrice";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      {cart.length === 0 ? (
        <p>Carrinho vazio 😕</p>
      ) : (
        cart.map((product) => (
          <CartContainer key={product._id}>
            <CartDetails>
              <Image
                src={product.image || "/fallback.png"}
                width={120}
                height={120}
                alt={product.name || "Produto"}
              />
              <CartText>
                <h3>{product.name}</h3>

                {/* Tag de promoção */}
                <div style={{ display: "inline" }}>
                  <span className="tag-sale">{product.category[0]}</span>
                </div>

                {/* Informação de frete */}
                <p className="shipping-info">
                  Entrega 100% gratuita em até 3 dias úteis.
                </p>

                <h4>R$ {formatPrice(product.price ?? 0)}</h4>
              </CartText>

              <CartControls>
                <Trash2 onClick={() => removeFromCart(product._id)} />
                
                {/* Inputs de quantidade idênticos ao design original */}
                <CartInputs>
                  <button className="minus">
                    <Minus />
                  </button>
                  <p className="number">1</p>
                  <button className="plus">
                    <Plus />
                  </button>
                </CartInputs>
              </CartControls>
            </CartDetails>
          </CartContainer>
        ))
      )}
    </div>
  );
}

export default Cart;
