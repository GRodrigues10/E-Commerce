import React from "react";
import {
  RequestSummaryContainer,
  ProductsSubtotal,
  Shipping,
  Total,
  Checkout,
  Part2,
  Part1,
  Input,
  Checkout2,
} from "./RequestSummary.styled";

function RequestSummary() {
  return (
    <RequestSummaryContainer>
      {/* Parte 1: Resumo do Pedido */}
      <Part1>
        <h2>Resumo do Pedido</h2>
        <ProductsSubtotal>
          <p>Subtotal:</p>
          <p>R$ 159,00</p>
        </ProductsSubtotal>
        <Shipping>
          <p>Frete:</p>
          <p>Grátis</p>
        </Shipping>
        <Total>
          <p><strong>Total:</strong></p>
          <p><strong>R$ 159,00</strong></p>
        </Total>
        <Input>
          <input type="text" placeholder="Cupom de desconto" />
          <button>Verificar</button>
        </Input>
        <Checkout>Comprar Agora</Checkout>
        <Checkout2>Continuar Comprando</Checkout2>
      </Part1>

      {/* Parte 2: Formas de Pagamento e Confiança */}
      <Part2>

        <h3>Compra Segura</h3>
        <p>🔒 Pagamento 100% seguro</p>
        <p>📦 Garantia de entrega</p>
        <p>📞 Suporte ao cliente</p>
      </Part2>
    </RequestSummaryContainer>
  );
}

export default RequestSummary;
