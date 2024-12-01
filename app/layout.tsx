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
  metadataBase: new URL('https://taliagreerbooks.com'),
  title: {
    default: "Talia Greer | Fantasy & Romance Author",
    template: "%s | Talia Greer"
  },
  description: "Talia Greer is the author of fantasy romance and romantic fantasy novels including The Ardor Cycle and Wild Wanderings series.",
  keywords: ["fantasy romance", "romantic fantasy", "fantasy author", "romance author", "Talia Greer", "The Ardor Cycle", "Wild Wanderings"],
  authors: [{ name: "Talia Greer" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://taliagreerbooks.com',
    siteName: 'Talia Greer Books',
    title: 'Talia Greer | Fantasy & Romance Author',
    description: 'Talia Greer is the author of fantasy romance and romantic fantasy novels including The Ardor Cycle and Wild Wanderings series.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1875,
        height: 2775,
        alt: 'Talia Greer Books'
      }
    ]
  }
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
        <div className="pt-[72px]">
          {children}
        </div>
      </body>
    </html>
  );
}
