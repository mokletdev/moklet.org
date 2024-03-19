import { success } from "@/utils/apiResponse";
import { findAllPost } from "@/utils/database/post.query";

type params = { year: string; month: string };

export async function GET(req: Request, { params }: { params: params }) {
  const { year, month } = params;

  const posts = await findAllPost({
    published_at: {
      gte: new Date(`${year}-${month}-01`),
      lte: new Date(`${year}-${month}-31`),
    },
  });

  return success(posts);
}
