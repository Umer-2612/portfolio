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
  title: "Umer Karachiwala | Software Engineer",
  description: "Full-stack developer specializing in modern web applications. Experienced in React, Node.js, and cloud technologies.",
  keywords: ["Software Engineer", "Full Stack Developer", "React Developer", "Node.js Developer"],
  authors: [{ name: "Umer Karachiwala" }],
  openGraph: {
    title: "Umer Karachiwala | Software Engineer",
    description: "Full-stack developer specializing in modern web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
