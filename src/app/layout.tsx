import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/header"
import Footer from "@/components/footer"
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bandit Typer",
  description: "Generate custom keyboards for users with limited ranges of motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Toaster />
        <Footer></Footer>
      </body>
    </html>
  );
}
