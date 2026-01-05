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

export const metadata = {
  title: "Sumit Bhargav — Senior iOS & Product Engineer",
  description:
    "Senior iOS developer with 6+ years of experience building high-performance Swift & SwiftUI apps used by 500K+ users.",
  keywords: [
    "iOS Developer",
    "Swift Developer",
    "SwiftUI",
    "Mobile App Developer",
    "Freelance iOS Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-black dark:bg-black dark:text-white antialiased">
        {children}
      </body>

      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}
    </html>
  );
}
