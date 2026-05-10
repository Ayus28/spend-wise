import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Yahan hum Inter font ko modern set kar rahe hain
const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "AI Spend Auditor - Save Money on Subscriptions",
  description: "Calculate your monthly AI subscription costs instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Humne inter font class body par apply kar di */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}  