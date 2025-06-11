import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ATOM - From Bold Ideas to Industry Changing Solutions",
  description:
    "Africa's Emerging AI Powerhouse – Building Tomorrow's Tech Today. We are builders of intelligent, future-ready solutions.",
  keywords:
    "AI, artificial intelligence, digital transformation, software development, machine learning, Africa, technology, ATOM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}
