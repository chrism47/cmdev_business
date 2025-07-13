import type { Metadata } from "next";
import { Inconsolata, Lekton } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const lekton = Lekton({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata: Metadata = {
  title: "CMDev_Business",
  description: "I make your web dreams a reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${inconsolata.variable} ${lekton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
