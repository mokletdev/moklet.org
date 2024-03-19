import { success } from "@/utils/apiResponse";
import { findAllTag } from "@/utils/database/tag.query";

export async function GET() {
  const tags = await findAllTag();

  return success(tags);
}
