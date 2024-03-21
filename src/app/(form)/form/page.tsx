import { PrimaryButton } from "@/app/_components/global/Button";
import { TextArea, TextField } from "@/app/_components/global/Input";
import { H2, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import EclipseIcon from "@/app/_components/icons/EclipseIcon";
import React from "react";

const page = () => {
  return (
    <SectionWrapper id="form">
      <div className="relative flex flex-col w-full items-start justify-between gap-[54px]">
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
      </div>
    </SectionWrapper>
  );
};

export default page;
