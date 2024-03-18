import { UnderlineTitle } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import ArrowRight from "@/app/_components/icons/ArrowRight";
import { postsSeeder } from "@/seeders/posts.seeder";
import Link from "next/link";
import { NewsFigure } from "./NewsFigure";

export default function News() {
  return (
    <SectionWrapper id="berita">
      <div className="flex w-full flex-col gap-[54px]">
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-[18px] md:gap-0">
          <UnderlineTitle lineWidth={108}>
            Berita Terbaru Organisasi & Sub-organisasi
          </UnderlineTitle>
          <Link href="/berita">
            <div className="group flex gap-[8px]">
              <span className="text-base text-primary-400 transition-all duration-500 group-hover:text-primary-200">
                Lihat semua
              </span>
              <ArrowRight className="transition-all duration-500 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between gap-[36px]">
          {postsSeeder.slice(0, 3).map((post) => (
            <NewsFigure key={post.id} post={post} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
