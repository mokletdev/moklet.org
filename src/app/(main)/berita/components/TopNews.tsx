import { H2 } from "@/app/_components/global/Text";
import { SmallSectionWrapper } from "@/app/_components/global/Wrapper";
import { findPopularPost } from "@/utils/database/post.query";
import { WideNewsFigure } from "./parts/WideNewsFigure";

export default async function TopNews() {
  const popularNews = await findPopularPost(4);

  return (
    <SmallSectionWrapper id="TopNews">
      <div className="flex flex-col gap-[54px]">
        <H2>Berita Terpopuler Organisasi & Sub Organ Moklet</H2>
        <div className="flex flex-wrap gap-x-[72px] gap-y-[58px]">
          {popularNews.map((post) => (
            <WideNewsFigure post={post} key={post.id} />
          ))}
        </div>
      </div>
    </SmallSectionWrapper>
  );
}
