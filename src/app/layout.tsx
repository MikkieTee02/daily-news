import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { Toaster } from "../components/ui/toaster";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/theme-provider";
import {NextAuthProvider} from "./Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Daily News',
  description: 'Your daily dose of news,',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={cn('font-body antialiased bg-background min-h-screen flex flex-col')}>
        <NextAuthProvider>

        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
