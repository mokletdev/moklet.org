import { NewsFigure } from "@/app/_components/global/NewsFigure";
import { H2, H4 } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import { PostWithTagsAndUser } from "@/types/entityRelations";
import { findAllPosts } from "@/utils/database/post.query";
import { PaginatedResult } from "@/utils/paginator";
import PageNav from "./parts/PageNav";
import { notFound } from "next/navigation";

export default async function News({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = parseInt(searchParams.page ?? "1");

  const paginatedPosts = (await findAllPosts(
    {},
    page,
  )) as PaginatedResult<PostWithTagsAndUser>;

  if (page > paginatedPosts.meta.lastPage || page < 0) notFound();

  return (
    <SectionWrapper id="News">
      <div className="mb-[92px]">
        <H4 className="mb-[54px] block sm:hidden">
          Berita Terbaru Organisasi dan Sub Organ Moklet
        </H4>
        <H2 className="text-wrap mb-[54px] hidden w-full lg:text-nowrap sm:block">
          Berita Terbaru Organisasi dan Sub Organ Moklet
        </H2>

        <div className="w-full flex flex-wrap gap-x-[36px] gap-y-[62px]">
          {paginatedPosts.data.map((post) => (
            <NewsFigure post={post} key={post.id} />
          ))}
        </div>
      </div>
      <PageNav
        currentPage={paginatedPosts.meta.currentPage}
        totalPage={paginatedPosts.meta.lastPage}
      />
    </SectionWrapper>
  );
}
