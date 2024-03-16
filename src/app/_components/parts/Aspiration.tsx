import { PrimaryButton } from "../global/Button";
import { TextArea, TextField } from "../global/Input";
import { H2, P } from "../global/Text";
import { SectionWrapper } from "../global/Wrapper";
import EclipseIcon from "@/app/components/icons/EclipseIcon";

export default function Aspiration() {
  return (
    <SectionWrapper id="aspirasi">
      <div className="relative flex w-full items-start justify-between gap-[54px]">
        <div className="w-full max-w-[568px]">
          <H2 className="mb-[18px]">
            Sampaikan Aspirasimu untuk Masa Depan yang Lebih Baik
          </H2>
          <P>
            Aspirasi mewujudkan impian dan memberi ruang tumbuh bagi harapan.
            Aspirasi Anda sebagai siswa akan membantu MPK Moklet untuk
            mengembangkan program-programnya.
          </P>
        </div>
        <form className="block w-[568px]">
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
        <EclipseIcon className="absolute -top-12 left-0" />
        <EclipseIcon className="absolute bottom-36 left-[310px]" />
      </div>
    </SectionWrapper>
  );
}
