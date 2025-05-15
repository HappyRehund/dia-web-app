import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dia App",
  description: "An app for diabetes management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-t from-amber-50 via-amber-50 to-amber-200 min-h-screen`}
      >
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <ReactQueryProvider>
              <Navbar />
              {children}
              <Toaster />
            </ReactQueryProvider>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
