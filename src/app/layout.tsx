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
  title: "Shivam Ranjan - Frontend Developer & Creative Technologist",
  description: "Frontend Developer with 4+ years of experience building innovative web applications. Specializing in React, Next.js, TypeScript, and modern web technologies. View my portfolio of projects and get in touch for collaboration opportunities.",
  keywords: [
    "Shivam Ranjan",
    "Frontend Developer", 
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Portfolio",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Strapi CMS",
    "Redux",
    "Playwright",
    "Jenkins",
    "Jira",
    "Confluence",
    "Git"
  ],
  authors: [{ name: "Shivam Ranjan" }],
  creator: "Shivam Ranjan",
  publisher: "Shivam Ranjan",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  category: "Technology",
  classification: "Portfolio",
  openGraph: {
    title: "Shivam Ranjan - Frontend Developer & Creative Technologist",
    description: "Frontend Developer with 4+ years of experience building innovative web applications. Specializing in React, Next.js, TypeScript, and modern web technologies.",
    type: "website",
    url: "https://thefrontify.com",
    siteName: "Shivam Ranjan Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/my-logo.png",
        width: 1200,
        height: 630,
        alt: "Shivam Ranjan - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Ranjan - Frontend Developer & Creative Technologist",
    description: "Frontend Developer with 4+ years of experience building innovative web applications. Specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/my-logo.png"],
    creator: "@shivamranjan",
  },
  alternates: {
    canonical: "https://thefrontify.com",
  },
  other: {
    "theme-color": "#1f2937",
    "color-scheme": "dark",
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
