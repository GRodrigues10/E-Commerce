// Footer.tsx
import React from "react";
import Link from "next/link";
import {
  ContainerFooter,
  FooterInner,
  AboutUs,
  UtilsLinks,
  Newsletter,
  SocialMedia,
  FooterBottom,
} from "./Footer.styled";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <ContainerFooter>
      <FooterInner>
        <AboutUs>
          <h2>Sobre Nós</h2>
          <p>
            Somos a melhor loja de produtos online, com entrega rápida e garantia de qualidade.
          </p>
        </AboutUs>

        <UtilsLinks>
          <h2>Links Úteis</h2>
          <ul>
            <li><Link href="#">Início</Link></li>
            <li><Link href="#">Produtos</Link></li>
            <li><Link href="#">Contato</Link></li>
            <li><Link href="#">FAQ</Link></li>
          </ul>
        </UtilsLinks>

        <Newsletter>
          <h2>Newsletter</h2>
          <p>Inscreva-se e receba ofertas exclusivas!</p>
          <form onSubmit={(e) => { e.preventDefault(); /* lógica de envio */ }}>
            <input type="email" placeholder="Seu e-mail" required />
            <button type="submit">Enviar</button>
          </form>
        </Newsletter>

        <SocialMedia>
          <h2>Siga-nos</h2>
          <div className="links">
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaTwitter /></Link>
          </div>
        </SocialMedia>
      </FooterInner>

      <FooterBottom>
        © {new Date().getFullYear()} FullShop. Todos os direitos reservados.
      </FooterBottom>
    </ContainerFooter>
  );
};

export default Footer;
