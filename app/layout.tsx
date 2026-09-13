import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/navigation/AnnouncementBar";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FINORA | Financial Intelligence. Advisory. Research. Tools.",
  description: "FINORA is a precision financial intelligence, advisory, research, and tools platform engineered for founders, finance teams, and enterprises.",
  keywords: [
    "Financial Intelligence",
    "Corporate Finance India",
    "Financial Modelling",
    "Equity Research",
    "Fractional CFO",
    "Finora Tools",
    "Finora Intelligence"
  ],
  metadataBase: new URL("https://finora.in"),
  openGraph: {
    title: "FINORA | Financial Intelligence",
    description: "Financial clarity for better decisions.",
    url: "https://finora.in",
    siteName: "FINORA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FINORA | Financial Intelligence",
    description: "Financial clarity for better decisions.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-paper text-ink antialiased selection:bg-ember selection:text-paper font-sans">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
