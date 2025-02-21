import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:"a",
  description:"",
  openGraph: {
    title: "Lemon chilli Restraunt",
    // description: "This Website is made with Nextjs",
    // url: "https://restrauntsapp.vercel.app/",
    // images: [
    //   {
    //     url: "/images/burgerimages.jpg",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content={metadata.openGraph?.title as string} />
        {/* Add other meta tags as needed */}
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}