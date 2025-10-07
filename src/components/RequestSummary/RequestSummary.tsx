import React, { useState } from "react";
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
import Link from "next/link";
import { useCart } from "@/context/context";
import { formatPrice } from "@/utils/FormatPrice";

function RequestSummary() {
  const { cart } = useCart();
  const [cupom, setCupom] = useState("");
  const [desconto, setDesconto] = useState(0);
  const [erroCupom, setErroCupom] = useState("");

  const subtotal = cart.reduce(
    (p, n) => p + (n.price || 0) * (n.quantity || 1),
    0
  );
  const total = subtotal - desconto;

  const checkCupom = () => {
    if (cupom.toLowerCase() === "gabriel") {
      setDesconto(subtotal / 2); // aplica 50% de desconto
      setErroCupom(""); // limpa mensagem de erro
    } else {
      setDesconto(0);
      setErroCupom("Cupom inválido!");
    }
  };

  return (
    <div>
      <RequestSummaryContainer>
        <Part1>
          <h2>Resumo do Pedido</h2>

          <ProductsSubtotal>
            <p>Subtotal:</p>
            <p>{formatPrice(subtotal)}</p>
          </ProductsSubtotal>

          {desconto > 0 && (
            <ProductsSubtotal>
              <p>Desconto:</p>
              <p>- {formatPrice(desconto)}</p>
            </ProductsSubtotal>
          )}

          <Shipping>
            <p>Frete:</p>
            <p>Grátis</p>
          </Shipping>

          <Total>
            <p>
              <strong>Total:</strong>
            </p>
            <p>
              <strong>{formatPrice(total)}</strong>
            </p>
          </Total>

          <Input>
            <input
              type="text"
              placeholder="Cupom de desconto"
              value={cupom}
              onChange={(e) => setCupom(e.target.value)}
            />
            <button onClick={checkCupom}>Verificar</button>
          </Input>

          {erroCupom && (
            <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              {erroCupom}
            </p>
          )}

          <Checkout>Comprar Agora</Checkout>

          <Link href="/">
            <Checkout2>Continuar Comprando</Checkout2>
          </Link>
        </Part1>

        <Part2>
          <h3>Compra Segura</h3>
          <p>🔒 Pagamento 100% seguro</p>
          <p>📦 Garantia de entrega</p>
          <p>📞 Suporte ao cliente</p>
        </Part2>
      </RequestSummaryContainer>
    </div>
  );
}

export default RequestSummary;
