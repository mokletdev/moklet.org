import Image from "@/app/_components/global/Image";
import { Tags } from "@/app/_components/global/NewsFigure";
import { H2, H3, P } from "@/app/_components/global/Text";
import { SmallSectionWrapper } from "@/app/_components/global/Wrapper";
import { stringifyDate } from "@/utils/atomics";
import { findPost, updatePost } from "@/utils/database/post.query";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import GoBack from "./_components/BackButton";
import MdViewer from "./_components/MdViewer";
import Related from "./_components/RelatedNews";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await findPost({ slug: params.slug });

  if (!post)
    return {
      title: "Berita tidak ditemukan",
    };

  return {
    title: post.title,
    description: post.description,
    authors: { name: post.user.name },
    keywords: post.tags.map((tag) => tag.tagName).join(", "),
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await findPost({ slug: params.slug });

  if (!post) notFound();
  else await updatePost({ id: post.id }, { view_count: { increment: 1 } });

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
                src={post?.thumbnail}
                alt={"image-" + post?.title}
                width={768}
                height={450}
                className="w-full h-full rounded-[20px]"
                unoptimized
              />
            </div>
            <div className="w-full">
              <div className="mb-[42px] flex justify-between items-center">
                <div className="flex gap-[10px]">
                  {post?.tags.map((tag) => (
                    <Tags tag={tag} key={tag.tagName} />
                  ))}
                </div>
                <div className="flex items-center gap-[40px]">
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
                    {stringifyDate(post?.created_at)}
                  </span>
                  <P>{post.view_count} views</P>
                </div>
              </div>
              <MdViewer markdown={post?.content} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[52px] w-full">
          <H3>Berita Terkait</H3>
          <Related tags={post?.tags!} />
        </div>
      </div>
    </SmallSectionWrapper>
  );
}
