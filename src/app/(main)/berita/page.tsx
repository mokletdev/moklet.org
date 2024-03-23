import News from "./components/News";
import { SearchBar } from "./components/SearchBar";
import TopNews from "./components/TopNews";

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
