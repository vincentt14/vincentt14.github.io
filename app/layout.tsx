import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vincent | Portfolio",
  description: "A Web Developer with 14 month of experience, get to know more about my skills and expertise.",
  keywords: ['Next.js', 'React', 'TypeScript', 'JavaScript','Portfolio','FrontEnd', 'BackEnd', 'Web Developer'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" /> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
