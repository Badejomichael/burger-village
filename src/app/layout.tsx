import type { Metadata } from "next";
import { ABeeZee } from "next/font/google";
import "./globals.css";

const abeezee = ABeeZee({
  variable: "--font-abeezee",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Burger Village",
  description: "Order the best burgers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/bv-logo.png" />
      </head>
      <body className={`${abeezee.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}