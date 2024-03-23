import { SmallSectionWrapper } from "@/app/_components/global/Wrapper";
import { TextField } from "@/app/_components/global/Input";
import { PrimaryButton } from "@/app/_components/global/Button";

export function SearchBar() {
  return (
    <SmallSectionWrapper id="SearchBar">
      <div className="flex gap-3 justify-center items-center w-full">
        <TextField
          placeholder="Temukan berita terbaru di sini..."
          className="w-[1049px]"
          type={""}
          name={""}
        />
        <PrimaryButton isDisabled={false}>Cari berita</PrimaryButton>
      </div>
    </SmallSectionWrapper>
  );
}
