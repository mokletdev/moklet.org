import { SearchBar } from "../components/SearchBar";
import { SmallSectionWrapper } from "@/app/_components/global/Wrapper";
import { H2 } from "@/app/_components/global/Text";
import { findAllPosts } from "@/utils/database/post.query";
import { PaginatedResult } from "@/utils/paginator";
import { PostWithTagsAndUser } from "@/types/entityRelations";
import { NewsFigure } from "@/app/_components/global/NewsFigure";

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const Posts = (await findAllPosts({
    title: { contains: searchParams.q ?? "" },
  })) as PostWithTagsAndUser[];

  return (
    <SmallSectionWrapper id="search">
      <div>
        <SearchBar />
        <div className="">
          <H2 className="mb-[52px]">
            Menampilkan hasil pencarian untuk &quot{searchParams.q ?? ""}&quot
          </H2>
          <div className="w-full flex flex-wrap gap-x-[36px] gap-y-[62px]">
            {Posts.map((post) => (
              <NewsFigure post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </SmallSectionWrapper>
  );
}
