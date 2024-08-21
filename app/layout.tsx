import type { Metadata } from "next";
import "./_styles/globals.css";

export const metadata: Metadata = {
  title: "BasedMeg",
  description: "Basedmeg, Mog's Girlfriend",
  openGraph: {
    images: {
      url: "./thumbnail.jpg",
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