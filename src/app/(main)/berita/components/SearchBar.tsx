import { SmallSectionWrapper } from "@/app/_components/global/Wrapper";
import { TextField } from "@/app/_components/global/Input";
import { SearchButton, SmallSearchButton } from "./parts/Button";
import Search from "./icons/Search";

export function SearchBar() {
  return (
    <SmallSectionWrapper id="SearchBar">
      <div className="flex gap-3 justify-center items-center w-full mt-[30px] md:mt-0">
        <TextField
          placeholder="Temukan berita terbaru di sini..."
          className="w-[318px] md:w-[1049px]"
          type={""}
          name={""}
        />
        <SmallSearchButton><Search/></SmallSearchButton>
        <SearchButton isDisabled={false}>Cari berita</SearchButton>
      </div>
    </SmallSectionWrapper>
  );
}
