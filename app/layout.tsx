import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AppProviders from "@/providers/AppProviders";
import { env } from "@/config/env";
import { Toaster } from "@/components/ui/sonner";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),

  title: {
    default: "StudyPilot AI",
    template: "%s | StudyPilot AI",
  },

  description: "The AI that learns how you learn and helps you study better.",

  applicationName: "StudyPilot AI",

  keywords: ["AI", "Education", "Study", "Learning", "Roadmap", "Quiz", "Next.js"],

  authors: [
    {
      name: "Bishal Pal",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        figtree.variable,
      )}
    >
      <body
        suppressHydrationWarning
        className={cn("bg-background", "text-foreground", "flex", "min-h-screen", "flex-col")}
      >
        <AppProviders>
          {children}
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
