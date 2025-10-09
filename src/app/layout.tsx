import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/Header/Header";
import { CartProvider } from "@/context/context";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'FullShop',
  description: 'Projeto de e-commerce full stack com Next.js, TypeScript e Node.js',
  icons: {
    icon: '/shop2.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <CartProvider>
            <Header />
            {children}
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
