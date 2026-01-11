import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "BOTA Holdings | Accelerating Innovation, Delivering Excellence",
  description: "Premier multi-strategy investment firm that identifies and accelerates breakthrough innovations with transformative potential. Strategic capital and operational expertise for exponential growth.",
  keywords: ["investment firm", "venture capital", "healthcare innovation", "sustainable technology", "education technology", "BOTA Holdings", "strategic investment"],
  openGraph: {
    type: "website",
    siteName: "BOTA Holdings",
    title: "BOTA Holdings | Accelerating Innovation, Delivering Excellence",
    description: "Premier multi-strategy investment firm that identifies and accelerates breakthrough innovations with transformative potential.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
