import { Metadata } from "next";
import { SectionWrapper } from "./_components/global/Wrapper";
import PrimaryLinkButton from "./_components/global/LinkButton";
import Navbar from "./_components/global/Navbar";
import Footer from "./_components/global/Footer";
import Image from "./_components/global/Image";
import { H1, H2, H3, H4, P } from "./_components/global/Text";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1192px] px-5 py-[22px]">
        <SectionWrapper id="not-found">
          <div className="flex flex-col justify-center items-center gap-20">
            <Image
              src={"/images/NotFound.png"}
              alt={"404"}
              width={460}
              height={244}
            />
            <div className="flex flex-col items-center justify-center">
              <div className="mb-11">
                <H1 className="mb-[18px]">Halaman Tidak Ditemukan</H1>
                <P>
                  Harap kembali ke beranda kami, kami mohon maaf atas
                  ketidaknyamanan ini.
                </P>
              </div>
              <PrimaryLinkButton href="/">Kembali ke beranda</PrimaryLinkButton>
            </div>
          </div>
        </SectionWrapper>
        <Footer />
      </main>
    </>
  );
}
