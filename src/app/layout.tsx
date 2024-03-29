import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Import all font weights of Montserrat
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Impact Tower",
  description:"ImpacTower serves as a one-stop resource hub for organizations committed to creating positive change in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

