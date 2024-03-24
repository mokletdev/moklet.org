import { H2, H3, P } from "@/app/_components/global/Text";
import { SmallSectionWrapper } from "@/app/_components/global/Wrapper";
import { findPost } from "@/utils/database/post.query";
import GoBack from "./_components/BackButton";
import Image from "@/app/_components/global/Image";
import Related from "./_components/RelatedNews";
import { Tags } from "@/app/_components/global/NewsFigure";
import { stringifyDate } from "@/utils/atomics";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await findPost({ slug: params.slug });

  return (
    <SmallSectionWrapper id={"Post-" + params.slug}>
      <div className="flex gap-[52px]">
        <div className="max-w-[768px] flex flex-col gap-[52px]">
          <div className="flex gap-[32px]">
            <GoBack />
            <H2 className="text-wrap w-[686px]">{post?.title}</H2>
          </div>
          <div>
            <div className="w-full h-[450px] mb-[72px]">
              <Image
                src={post?.thumbnail!}
                alt={"image-" + post?.title}
                width={768}
                height={450}
                className="w-full h-full rounded-[20px]"
                unoptimized
              />
            </div>
            <div className="w-full px-[42px]">
              <div className="mb-[42px] flex justify-between">
                <div className="flex gap-[10px]">
                  {post?.tags.map((tag) => (
                    <Tags tag={tag} key={tag.tagName} />
                  ))}
                </div>
                <div className="flex items-center gap-[41px]">
                  <div className="flex items-center gap-3">
                    <Image
                      src={post?.user.user_pic!}
                      alt={post?.user.name + "'s Pfp"}
                      unoptimized
                      height={28}
                      width={28}
                      className="h-7 w-7 object-cover rounded-full"
                    />
                    <span className="text-base text-black">
                      {post?.user.name}
                    </span>
                  </div>
                  <span className="text-neutral-500">
                    {stringifyDate(post?.created_at!)}
                  </span>
                </div>
              </div>
              <P>{post?.content}</P>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[52px] w-[372px]">
          <H3>Berita Terkait</H3>
          <Related tags={post?.tags!} />
        </div>
      </div>
    </SmallSectionWrapper>
  );
}
