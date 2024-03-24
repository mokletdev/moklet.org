import { PostWithTagsAndUser } from "@/types/entityRelations";
import Image from "@/app/_components/global/Image";
import { stringifyDate } from "@/utils/atomics";
import Link from "next/link";

export function WideNewsFigure({
  post,
}: Readonly<{ post: PostWithTagsAndUser }>) {
  return (
    <figure className="w-full h-[172px] lg:h-[140px] xl:w-[560px] xl:h-[140px] flex items-center gap-[26px]">
      <div className="min-w-[140px] h-full">
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={140}
          height={140}
          className="h-[140px] w-[140px] rounded-2xl object-cover"
          unoptimized
        />
      </div>
      <div className="w-full flex flex-col gap-[22px] md:gap-[52px] text-wrap">
        <Link
          href={"/berita/" + post.slug}
          className="text-black hover:text-primary-400 transition-all duration-500"
        >
          <div className="min-h-[87px] md:min-h-[60px]">
            <span className="text-[18px] md:text-[20px] font-bold">
              {post.title.length > 52
                ? post.title.slice(0, 48) + "..."
                : post.title}
            </span>
          </div>
        </Link>
        <div className="flex flex-col justify-start gap-[10px] md:flex-row w-full md:gap-0 md:justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={post.user.user_pic}
              alt={post.user.name + "'s Pfp"}
              unoptimized
              height={28}
              width={28}
              className="h-7 w-7 object-cover rounded-full"
            />
            <span className="text-base text-black">{post.user.name}</span>
          </div>
          <span className="text-neutral-500">
            {stringifyDate(post.created_at)}
          </span>
        </div>
      </div>
    </figure>
  );
}
