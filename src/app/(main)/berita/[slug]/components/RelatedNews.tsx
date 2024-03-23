import { findPopularPost } from "@/utils/database/post.query";
import { NewsFigure } from "@/app/_components/global/NewsFigure";

export default async function Related() {
  const relatedPost = await findPopularPost(3);

  return (
    <div className="flex flex-col gap-[62px]">
      {relatedPost.map((post) => (
        <NewsFigure post={post} key={post.id} />
      ))}
    </div>
  );
}
