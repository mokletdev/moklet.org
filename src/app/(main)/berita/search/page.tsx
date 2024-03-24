import { NewsFigure } from "@/app/_components/global/NewsFigure";
import { H2 } from "@/app/_components/global/Text";
import { SmallSectionWrapper } from "@/app/_components/global/Wrapper";
import { PostWithTagsAndUser } from "@/types/entityRelations";
import { findAllPosts } from "@/utils/database/post.query";
import { SearchBar } from "../_components/SearchBar";

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const Posts = (await findAllPosts({
    OR: (searchParams.q as string).split(" ").map((query) => ({
      title: { contains: query },
    })),
  })) as PostWithTagsAndUser[];

  return (
    <SmallSectionWrapper id="search">
      <div>
        <SearchBar query={searchParams.q} />
        <div className="">
          <H2 className="mb-[52px]">
            Menampilkan hasil pencarian untuk &quot;
            {searchParams.q?.toString() ?? ""}&quot;
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
