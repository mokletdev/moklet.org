import Image from "@/app/_components/global/Image";
import Link from "next/link";
import { SearchBar } from "./components/SearchBar";
import TopNews from "./components/TopNews";
import News from "./components/News";

export default function Berita({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <>
      <SearchBar />
      <div className="w-full flex flex-wrap">
        <TopNews />
      </div>
      <News searchParams={searchParams} />
    </>
  );
}
