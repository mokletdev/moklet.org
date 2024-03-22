import { success } from "@/utils/apiResponse";
import { validatePage } from "@/utils/atomics";
import { findAllPosts } from "@/utils/database/post.query";
import { PaginatedResult } from "@/utils/paginator";
import { Post } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { year: string } },
) {
  const { year } = params;
  const page = req.nextUrl.searchParams.get("page");

  const paginatedPosts = (await findAllPosts(
    {
      published_at: {
        gte: new Date(`${year}-01-01`),
        lte: new Date(`${year}-12-31`),
      },
    },
    validatePage(page!) ? parseInt(page!) : 1,
  )) as PaginatedResult<Post>;

  return success({ posts: paginatedPosts.data, meta: paginatedPosts.meta });
}
