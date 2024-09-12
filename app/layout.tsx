import type { Metadata } from "next";
import "./_styles/globals.css";

export const metadata: Metadata = {
  title: "SOLDOG",
  description: " The Solana's Dog",
  openGraph: {
    images: {
      url: "./thumbnail.jpgs",
      alt: "background image",
      width: 1200,
      height: 650,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
