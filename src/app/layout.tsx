import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
        className={`${oswald.className} antialiased min-h-screen flex flex-col justify-between`}
      >
        <Analytics />
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
