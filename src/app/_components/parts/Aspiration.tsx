import { PrimaryButton } from "../global/Button";
import { TextArea, TextField } from "../global/Input";
import { H2, P } from "../global/Text";
import { SectionWrapper } from "../global/Wrapper";
import EclipseIcon from "@/app/_components/icons/EclipseIcon";

export default function Aspiration() {
  return (
    <SectionWrapper id="aspirasi">
      <div className="relative flex flex-col md:flex-row w-full items-start justify-between gap-[54px]">
        <div className="w-full">
          <H2 className="mb-[18px]">
            Sampaikan Aspirasimu untuk Masa Depan yang Lebih Baik
          </H2>
          <P>
            Aspirasi mewujudkan impian dan memberi ruang tumbuh bagi harapan.
            Aspirasi Anda sebagai siswa akan membantu MPK Moklet untuk
            mengembangkan program-programnya.
          </P>
        </div>
        <form className="block w-full">
          <TextField
            label="judul"
            placeholder="Masukkan judul aspirasi"
            className="mb-6 w-full"
          />
          <TextArea
            label="aspirasi"
            placeholder="Bagikan impian atau aspirasi Anda untuk MPK Moklet"
            className="mb-[44px] w-full"
          />
          <PrimaryButton>Kirim aspirasi</PrimaryButton>
        </form>
        <EclipseIcon className="absolute -top-12 -left-4 hidden md:block" />
        <EclipseIcon className="absolute bottom-36 left-[310px] hidden md:block" />
      </div>
    </SectionWrapper>
  );
}
