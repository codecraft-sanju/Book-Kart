import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
//import { Header } from "@radix-ui/react-accordion";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import LayoutWrapper from "@/app/LayoutWrapper";

const roboto_mono = Roboto_Mono({
  
  subsets: ["latin"],
  display:'swap'
});

export const metadata: Metadata = {
  title: "Book-kart",
  description: "This is e-commerce platform where you can buy and shell your used books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ roboto_mono.className}`}
      >
        <LayoutWrapper>
    <Header/>
        {children}
          <Footer />
          </LayoutWrapper>
      </body>
    </html>
  );
}
