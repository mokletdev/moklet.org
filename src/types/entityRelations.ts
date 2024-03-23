import { Prisma } from "@prisma/client";

export type PostWithTagsAndUser = Prisma.PostGetPayload<{
  include: { tags: true; user: { select: { name: true; user_pic: true } } };
}>;

export type FormWithFields = Prisma.FormGetPayload<{
  include: { fields: { include: { options: true } } };
}>;
