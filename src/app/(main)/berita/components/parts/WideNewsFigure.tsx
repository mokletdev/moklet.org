import { PostWithTagsAndUser } from "@/types/entityRelations";
import Image from "@/app/_components/global/Image";
import { stringifyDate } from "@/utils/atomics";
import Link from "next/link";

export function WideNewsFigure({
  post,
}: Readonly<{ post: PostWithTagsAndUser }>) {
  return (
    <figure className="w-[560px] h-[140px] flex items-center gap-[26px]">
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
      <div className="w-full flex flex-col gap-[52px] text-wrap">
        <Link
          href={"/berita/" + post.slug}
          className="text-black hover:text-primary-400 transition-all duration-500"
        >
          <span className="text-[20px] font-bold">
            {post.title.length > 52
              ? post.title.slice(0, 48) + "..."
              : post.title}
          </span>
        </Link>
        <div className="flex w-full justify-between">
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
