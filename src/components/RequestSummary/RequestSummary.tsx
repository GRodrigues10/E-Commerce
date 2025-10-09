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
  const { cart, removeAll } = useCart();
  const [cupom, setCupom] = useState("");
  const [desconto, setDesconto] = useState(0);
  const [erroCupom, setErroCupom] = useState("");
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [erroCarrinho, setErroCarrinho] = useState(false);

  const subtotal = cart.reduce(
    (p, n) => p + (n.price || 0) * (n.quantity || 1),
    0
  );
  const total = subtotal - desconto;

  const checkCupom = () => {
    if (cupom.toLowerCase() === "desconto") {
      setDesconto(subtotal / 2);
      setErroCupom("");
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
            <p>R$ {formatPrice(subtotal)}</p>
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
              <strong>R$ {formatPrice(total)}</strong>
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

          <Checkout
            onClick={() => {
              if (subtotal === 0) {
                setErroCarrinho(true);
                setTimeout(() => setErroCarrinho(false), 2000);
                return;
              }

              setCompraRealizada(true);
              setTimeout(() => setCompraRealizada(false), 2000);

              removeAll();
            }}
          >
            Comprar Agora
          </Checkout>

          {erroCarrinho && (
            <span style={{ color: "red", marginTop: "10px" }}>
              ⚠️ O carrinho está vazio!
            </span>
          )}

          {compraRealizada && (
            <span style={{ color: "green", marginTop: "10px" }}>
              🎉 Compra realizada com sucesso!
            </span>
          )}

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
