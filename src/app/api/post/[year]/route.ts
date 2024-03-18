import { success } from "@/utils/apiResponse";
import { findAllPost } from "@/utils/database/post.query";

export async function GET({ params }: { params: { year: string } }) {
  const { year } = params;

  const posts = await findAllPost({
    published_at: {
      gte: new Date(`${year}-01-01`),
      lte: new Date(`${year}-12-31`),
    },
  });

  return success(posts);
}
