import { findPostByTag } from "@/utils/database/tag.query";
import { Tag } from "@prisma/client";
import RelatedNewsFigure from "./RelatedNewsFigure";

export default async function Related({ tags }: { tags: Tag[] }) {
  const relatedPosts =
    tags.length > 0 ? await findPostByTag(tags[0].tagName, true, 3) : [];

  return (
    <div className="flex flex-col gap-[62px] w-full">
      {relatedPosts?.map((post) => (
        <RelatedNewsFigure post={post} key={post.id} />
      ))}
    </div>
  );
}
