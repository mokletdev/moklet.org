import LinkButton from "@/app/_components/global/LinkButton";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import { P, UnderlineTitle } from "@/app/_components/global/Text";
import Image from "next/image";

export default function About() {
  return (
    <SectionWrapper id="tentang">
      <div className="flex w-full justify-between">
        <Image
          src={"/images/About.png"}
          alt="About"
          width={470}
          height={390}
          className="h-[390px] w-[470px]"
        />
        <div className="flex w-full max-w-[680px] flex-col gap-[20px]">
          <div className="mb-11">
            <div className="mb-[42px]">
              <UnderlineTitle lineWidth={142} className="mb-[18px]">
                Jelajahi Berbagai Organisasi & Sub-organ di Moklet
              </UnderlineTitle>
              <P>
                moklet.org merupakan sebuah portal informasi yang berisikan
                kegiatan-kegiatan yang dilakukan oleh organisasi dan
                sub-organisasi di Moklet (SMK Telkom Malang).
              </P>
            </div>
            <div className="flex items-start gap-[34px]">
              <div className="flex max-w-[324px] gap-[24px] text-wrap">
                <div className="flex flex-col gap-[8px]">
                  <span className="text-lg font-bold ">
                    OSIS SMK TELKOM MALANG
                  </span>
                  <P>
                    Organisasi siswa di Moklet yang bertanggung jawab untuk
                    mengkoordinir berbagai kegiatan sekolah.
                  </P>
                </div>
              </div>
              <div className="flex max-w-[324px] gap-[24px] text-wrap">
                <div className="flex flex-col gap-[8px]">
                  <span className="text-lg font-bold ">
                    MPK SMK Telkom Malang
                  </span>
                  <P>
                    Majelis siswa di Moklet yang bertanggung jawab atas
                    organisasi dan aspirasi siswa-siswi di SMK Telkom Malang.
                  </P>
                </div>
              </div>
            </div>
          </div>
          <LinkButton href="#">Baca lebih detail</LinkButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
