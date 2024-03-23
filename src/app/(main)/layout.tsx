import Navbar from "../_components/global/Navbar";
import Footer from "../_components/global/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1192px] py-[22px]">
        {children}
        <Footer />
      </main>
    </>
  );
}
