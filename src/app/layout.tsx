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
  title: "Umer Karachiwala | Backend & DevOps Engineer",
  description: "Backend and DevOps Engineer specializing in scalable systems, cloud technologies, and AI-driven automation. Experienced in AWS, Docker, and Node.js.",
  keywords: ["Backend Engineer", "DevOps Engineer", "Cloud Technologies", "AWS", "Docker", "Node.js"],
  authors: [{ name: "Umer Karachiwala" }],
  openGraph: {
    title: "Umer Karachiwala | Backend & DevOps Engineer",
    description: "Backend and DevOps Engineer specializing in scalable systems and cloud technologies",
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
