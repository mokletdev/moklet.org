import { success } from "@/utils/apiResponse";
import { findPostByTag } from "@/utils/database/tag.query";

export async function GET(
  req: Request,
  { params }: { params: { tagName: string } },
) {
  const { tagName } = params;
  const posts = await findPostByTag(tagName, true);

  return success(posts);
}
