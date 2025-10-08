import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/Header/Header";
import { CartProvider } from "@/context/context";

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
