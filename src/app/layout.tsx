import type { Metadata } from "next";

// slick slider style imports 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { GlobalProvider } from "@/context/global-context";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
        <Header/>
        {children}
        <Footer/>
        </GlobalProvider>
      </body>
    </html>
  );
}
