import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const playfair = localFont({
  src: "./fonts/PlaywriteITModerna-VariableFont_wght.ttf",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Talia Greer",
  description: "Talia Greer Books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-custom-bg text-gray-900`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
