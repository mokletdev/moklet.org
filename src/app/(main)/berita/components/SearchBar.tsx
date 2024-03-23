"use client";

import { SmallSectionWrapper } from "@/app/_components/global/Wrapper";
import { TextField } from "@/app/_components/global/Input";
import { SearchButton, SmallSearchButton } from "./parts/Button";
import Search from "./icons/Search";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchBar() {
  const { replace } = useRouter();
  const [Query, setQuery] = useState<string>("");
  function handleSearch(q: string) {
    setQuery(q);
  }

  return (
    <SmallSectionWrapper id="SearchBar">
      <div className="flex gap-3 justify-center items-center w-full mt-[30px] md:mt-0">
        <TextField
          placeholder="Temukan berita terbaru di sini..."
          className="w-[318px] md:w-[1049px]"
          value={Query}
          handleChange={(e) => {
            handleSearch(e.target.value);
          }}
          type={""}
          name={""}
        />
        <SmallSearchButton
          onClick={() => {
            replace(`/berita/search?q=${Query}`);
          }}
        >
          <Search />
        </SmallSearchButton>
        <SearchButton
          isDisabled={false}
          onClick={() => {
            replace(`/berita/search?q=${Query}`);
          }}
        >
          Cari berita
        </SearchButton>
      </div>
    </SmallSectionWrapper>
  );
}
