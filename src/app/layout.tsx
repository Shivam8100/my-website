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
  title: "Shivam Ranjan - Portfolio",
  description: "Full-stack developer and creative technologist passionate about building innovative web applications",
  keywords: ["portfolio", "developer", "full-stack", "web development", "react", "next.js"],
  authors: [{ name: "Shivam Ranjan" }],
  creator: "Shivam Ranjan",
  openGraph: {
    title: "Shivam Ranjan - Portfolio",
    description: "Full-stack developer and creative technologist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
