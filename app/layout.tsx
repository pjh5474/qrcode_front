import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | QR Menu Project",
    default: "QR Menu Project",
  },
  description: "Order foods using QR Code!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-200 mx-auto`}>
        {children}
      </body>
    </html>
  );
}
