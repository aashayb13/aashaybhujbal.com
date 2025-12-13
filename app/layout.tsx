import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aashay Bhujbal | Data Science & ML Portfolio",
  description: "Portfolio of Aashay Bhujbal - Data Analytics, Data Engineering, and Machine Learning professional. Explore my projects in ML, data engineering, and analytics.",
  keywords: ["Data Science", "Machine Learning", "Data Engineering", "Data Analytics", "Python", "AWS", "Azure", "Portfolio"],
  authors: [{ name: "Aashay Bhujbal" }],
  openGraph: {
    title: "Aashay Bhujbal | Data Science & ML Portfolio",
    description: "Portfolio of Aashay Bhujbal - Data Analytics, Data Engineering, and Machine Learning professional",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
