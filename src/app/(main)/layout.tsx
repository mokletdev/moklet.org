import Navbar from "../_components/global/Navbar";
import Footer from "../_components/global/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[380px] sm:max-w-[716px] md:max-w-[1192px] py-[22px]">
        {children}
        <Footer />
      </main>
    </>
  );
}
