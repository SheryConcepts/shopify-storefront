import Joinus from "@/components/views/joinus";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/views/navbar";
import Footer from "@/components/views/footer";
import CartID from "@/components/views/navbar/cartID";

const inter = Montserrat({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Shopify Storefront",
  description: "A shopify store, build using Nextjs 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <CartID />
        <Joinus />
        {children}
        <Footer />
      </body>
    </html>
  );
}
