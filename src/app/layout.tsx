import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./_components/main/NextAuthProvider";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
