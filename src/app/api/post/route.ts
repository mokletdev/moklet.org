import { success } from "@/utils/apiResponse";
import { findAllPost } from "@/utils/database/post.query";

export async function GET() {
  const posts = await findAllPost();

  return success(posts);
}
