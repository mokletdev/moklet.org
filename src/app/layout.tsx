import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Toaster } from "sonner";
import { NextAuthProvider } from "./_components/main/NextAuthProvider";
import TopLoader from "./_components/main/TopLoader";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Moklet.org",
    template: "%s | Moklet.org",
  },
  description:
    "A one doorway to explore Moklet's organizations' creativity and innovations",
  keywords: "moklet.org, Moklet, Moklet.org, Telkom, SMK, Malang",
  authors: { name: "MokletDev", url: "https://mokletdev.vercel.app" },
  creator: "MokletDev Team",
  publisher: "SMK Telkom Malang",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
        <NextAuthProvider>
          <Suspense>
            <TopLoader />
          </Suspense>
          <Toaster duration={3000} pauseWhenPageIsHidden theme="light" />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
