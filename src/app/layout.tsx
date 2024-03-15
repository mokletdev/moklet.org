import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "moklet.org",
  description:
    "A one doorway to explore Moklet's organizations' creativity and innovations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          montserrat.className +
          " bg-opacity-75 bg-gradient-to-b from-primary-50 to-white"
        }
      >
        <Navbar />
        <main className="mx-auto w-full max-w-[1192px] px-5 py-[22px]">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
