import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: { default: "AI Debug Agent – AI-Powered Website Debugging", template: "%s | AI Debug Agent" },
  description: "Automatically detect, explain, and fix website errors with AI. The smartest debugging and QA platform for developers.",
  keywords: ["AI debugging", "website scanner", "JavaScript errors", "Next.js debugging", "SaaS QA tool"],

  openGraph: {
    type: "website", siteName: "AI Debug Agent",
    title: "AI Debug Agent – AI-Powered Website Debugging",
    description: "Automatically detect, explain, and fix website errors with AI.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main className="md:pl-56">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
