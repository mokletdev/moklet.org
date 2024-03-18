import { Prisma } from "@prisma/client";

export type PostWithTagsAndUser = Prisma.PostGetPayload<{
  include: { tags: true; user: true };
}>;
