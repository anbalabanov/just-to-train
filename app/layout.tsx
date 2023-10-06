import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/components/layout/header/header";
import Footer from "@/app/components/layout/footer/footer";
import React from "react";
import { ReduxProvider } from "@/app/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "World Radio Ever",
  description: "Just listen to the world radio ever",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased text-slate-500 dark:text-slate-400 
        dark:bg-gradient-to-tl dark:from-sky-900 dark:via-neutral-500 dark:to-black
        bg-gradient-to-bl from-green-200 via-transparent to-sky-200`}
      >
        <ReduxProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
