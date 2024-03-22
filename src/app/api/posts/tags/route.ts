import { success } from "@/utils/apiResponse";
import { validatePage } from "@/utils/atomics";
import { findAllTags } from "@/utils/database/tag.query";
import { PaginatedResult } from "@/utils/paginator";
import { Tag } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const page = req.nextUrl.searchParams.get("page");

  if (validatePage(page!)) {
    const paginatedTags = (await findAllTags(
      parseInt(page!),
    )) as PaginatedResult<Tag>;
    return success({ tags: paginatedTags.data, meta: paginatedTags.meta });
  }

  const tags = await findAllTags();
  return success(tags);
}
