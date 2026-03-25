import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const _geist = GeistSans;
const _geistMono = GeistMono;

export const metadata: Metadata = {
    title: "SubSync AI - Smart Subscription Management",
    description:
        "AI-powered subscription tracking and management for individuals and teams",
    generator: "v0.app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`font-sans antialiased`} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
