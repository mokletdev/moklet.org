import { Metadata } from "next";
import Image from "@/app/_components/global/Image";
import PrimaryLinkButton from "@/app/_components/global/LinkButton";
import { H2 } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export const metadata: Metadata = {
  title: "Formulir ditutup",
};

export default function AlreadySubmit() {
  return (
    <SectionWrapper id="success">
      <div className="flex flex-col justify-center items-center gap-20">
        <Image
          src={"/images/Forbidden.svg"}
          alt={"404"}
          width={460}
          height={244}
        />
        <div className="flex flex-col items-center justify-center">
          <div className="mb-11 text-center">
            <H2 className="mb-[18px]">Jawaban Anda telah terkirim</H2>
          </div>
          <PrimaryLinkButton href="/">Kembali ke beranda</PrimaryLinkButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
