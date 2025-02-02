import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hendese Otomotiv | Suzuki Çıkma Yedek Parça",
  description: "Sakarya Arifiye Suzuki Çıkma Yedek Parça",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
