"use client";
import React from "react";
import { CartContainer, CartContent, LayoutCart } from "./page.styled";
import Button from "@/components/Button/Button";
import Cart from "@/components/Cart/Cart";
import RequestSummary from "@/components/RequestSummary/RequestSummary";

function page() {
  return (
    <CartContainer>
      <LayoutCart>

      
      <CartContent>
        <h2>Meu Carrinho</h2>
        <Button/>
        <Cart />
        <Cart />
        
      </CartContent>
      <RequestSummary/>

      </LayoutCart>

      
    </CartContainer>
     

  );
}

export default page;
