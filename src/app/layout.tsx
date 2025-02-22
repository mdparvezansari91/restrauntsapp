import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// Load the Geist and Geist Mono fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// Define metadata for the application
export const metadata: Metadata = {
  title: "Lemon Chilli Restaurant",
  description: "This Website is made with Next.js",
  openGraph: {
    title: "Lemon Chilli Restaurant",
    description: "This Website is made with Next.js",
    url: "https://restrauntsapp.vercel.app/",
    images:"'/burgerImage.jpg" 
  },
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content={metadata.openGraph?.title as string} />
        <meta property="og:description" content={metadata.openGraph?.description as string} />
        <meta property="og:url" content={metadata.openGraph?.url as string} />
        <meta property="og:image" content="https://restrauntsapp.vercel.app/burgerImage.jpg" />
        {/* Add other meta tags as needed */}
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children} {/* Render child components */}
      </body>
    </html>
  );
}