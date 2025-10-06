import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Main Beis Midrash | Ohr Somayach Yeshiva Jerusalem",
  description:
    "For the serious student who can study Gemara with Rashi and Tosfos. Transform into an advanced, independent learner through our intensive program in Jerusalem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`torah-theme ${geistSans.variable} ${geistMono.variable} antialiased bg-[linear-gradient(180deg,#0c0f11,#101416_60%,#141819)] min-h-screen selection:bg-[rgba(212,180,104,0.25)] selection:text-[#1f2325]`}
      >
        {children}
      </body>
    </html>
  );
}
