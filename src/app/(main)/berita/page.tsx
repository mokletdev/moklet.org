import News from "./_components/News";
import { SearchBar } from "./_components/SearchBar";
import TopNews from "./_components/TopNews";

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
