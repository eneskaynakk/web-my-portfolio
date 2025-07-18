import type { Metadata } from "next";
import { Header, Footer } from '@/components';
import { Inter, Playfair_Display, Open_Sans, Source_Sans_3 } from 'next/font/google';

import "./globals.css";

export const metadata: Metadata = {
  title: "E.K",
  description: "Generated by create next app",
};

const interFont = Inter({
    subsets: ['latin'],
    weight: "600",
    variable: "--font-inter"
});

const playfairFont = Playfair_Display({
    subsets: ['latin'],
    weight: "600",
    variable: "--font-playfair-display"
});

const openFont = Open_Sans({
    subsets: ['latin'],
    weight: "400",
    variable: "--font-open-sans"
});

const sourceFont = Source_Sans_3({
    subsets: ['latin'],
    weight: "400",
    variable: "--font-sorce-sans-3"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interFont.variable} ${playfairFont.variable} ${openFont.variable} ${sourceFont.variable}`}>
      
      <body>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  );
}
