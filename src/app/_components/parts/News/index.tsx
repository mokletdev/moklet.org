import { H2 } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import ArrowRight from "@/app/_components/icons/ArrowRight";
import { findNewestPost } from "@/utils/database/post.query";
import Link from "next/link";
import { NewsFigure } from "../../global/NewsFigure";

export default async function News() {
  const latestPosts = await findNewestPost(5);

  return (
    <SectionWrapper id="berita">
      <div className="flex w-full flex-col gap-[54px]">
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-[18px] md:gap-0">
          <div className="relative">
            <H2 className={"z-10 font-bold text-black"}>
              Berita Terbaru Organisasi & Sub-organisasi
            </H2>
            <div
              className={`absolute left-[3px] top-[17px] md:top-[28px] -z-10 h-[16px] bg-primary-100 w-[72px] md:w-[108px]`}
            ></div>
          </div>
          <Link href="/berita">
            <div className="group flex gap-[8px]">
              <span className="text-base text-primary-400 transition-all duration-500 group-hover:text-primary-200">
                Lihat semua
              </span>
              <ArrowRight className="transition-all duration-500 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
        <div className="w-full overflow-x-none md:overflow-x-scroll">
          <div className="flex flex-col md:flex-row w-full md:w-[200%] justify-start gap-[36px]">
            {latestPosts.map((post) => (
              <NewsFigure key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
