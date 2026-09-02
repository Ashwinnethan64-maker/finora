import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FINORA | Financial Intelligence. Advisory. Research. Tools.",
  description: "FINORA is a flat financial intelligence platform combining corporate finance advisory, dynamic financial modeling, equity research, and financial tools for better decisions.",
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
    description: "Financial intelligence for better decisions.",
    url: "https://finora.in",
    siteName: "FINORA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FINORA | Financial Intelligence",
    description: "Financial intelligence for better decisions.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary selection:text-white font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
