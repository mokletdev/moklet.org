import { internalServerError, success } from "@/utils/apiResponse";
import { findPostByTag } from "@/utils/database/tag.query";

export async function GET(
  req: Request,
  { params }: { params: { tagName: string } },
) {
  const { tagName } = params;

  try {
    const posts = await findPostByTag(tagName, true);

    return success(posts);
  } catch (error) {
    return internalServerError([]);
  }
}
