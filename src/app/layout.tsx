import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-jetbrains",
});

export const metadata: Metadata = {
  title: "Brimax — Security-first builder",
  description: "On-chain policy vaults, AI payment security, and Solana vulnerability research. Building security infrastructure for the AI agent economy.",
  metadataBase: new URL("https://visitbrimax.vercel.app"),
  openGraph: {
    title: "Brimax — Security-first builder",
    description: "On-chain policy vaults, AI payment security, and Solana vulnerability research.",
    url: "https://visitbrimax.vercel.app",
    siteName: "Brimax",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brimax — Security-first builder",
    description: "On-chain policy vaults, AI payment security, and Solana vulnerability research.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-bg`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}