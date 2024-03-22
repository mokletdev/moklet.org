import { notFound, success } from "@/utils/apiResponse";
import { findPost } from "@/utils/database/post.query";

type params = { year: string; month: string; slug: string };

export async function GET(req: Request, { params }: { params: params }) {
  const { year, month, slug } = params;

  const post = await findPost({
    published_at: {
      gte: new Date(`${year}-${month}-01`),
      lte: new Date(`${year}-${month}-31`),
    },
    slug,
  });

  if (!post) return notFound("Post not found");

  return success(post);
}
