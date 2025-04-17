import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import Header from "./_components/layout/header/header";
import Footer from "./_components/layout/footer/footer";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "",
  description: "",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plusjakartasans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx("overflow-x-hidden", plusJakartaSans.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
