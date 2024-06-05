import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import SmoothScrolling from "@/components/core/SmoothScroll";
import "./globals.css";

const geistSans = GeistSans

export const metadata: Metadata = {
  title: "BSMNT — Laboratory",
  description: "Basement Works Laboratory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SmoothScrolling>
      <body className={geistSans.className}>
        {children}
      </body>
      </SmoothScrolling>
    </html>
  );
}
