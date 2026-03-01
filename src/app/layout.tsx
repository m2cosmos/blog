import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://m2cosmos.com'),
  title: {
    default: "M2COSMOS Blog | Radiant Reader",
    template: "%s | M2COSMOS Blog"
  },
  description: "가독성과 수익에 최적화된 M2COSMOS 공식 블로그. AI와 Agentic Coding의 미래를 탐구합니다.",
  keywords: ["AI", "Agentic Coding", "블로그", "수익화", "애드센스", "M2COSMOS"],
  authors: [{ name: "M2COSMOS Nova" }],
  openGraph: {
    title: "M2COSMOS Blog | Radiant Reader",
    description: "가독성과 수익에 최적화된 M2COSMOS 공식 블로그",
    url: 'https://m2cosmos.com',
    siteName: 'M2COSMOS',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "M2COSMOS Blog | Radiant Reader",
    description: "가독성과 수익에 최적화된 M2COSMOS 공식 블로그",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
