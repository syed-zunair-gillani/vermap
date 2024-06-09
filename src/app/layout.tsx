import type { Metadata } from "next";

// slick slider style imports 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


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
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
