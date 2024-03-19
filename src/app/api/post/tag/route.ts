import { success } from "@/utils/apiResponse";
import { findAllTag } from "@/utils/database/tag.query";
export async function GET() {
  const posts = await findAllTag();

  return success(posts);
}
