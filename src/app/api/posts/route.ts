import { internalServerError, success } from "@/utils/apiResponse";
import { validatePage } from "@/utils/atomics";
import { findAllPosts } from "@/utils/database/post.query";
import { PaginatedResult } from "@/utils/paginator";
import { Post } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const page = req.nextUrl.searchParams.get("page");

  try {
    const paginatedPosts = (await findAllPosts(
      {},
      validatePage(page!) ? parseInt(page!) : 1,
    )) as PaginatedResult<Post>;

    return success({ posts: paginatedPosts.data, meta: paginatedPosts.meta });
  } catch (error) {
    return internalServerError([]);
  }
}
