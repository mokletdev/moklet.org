import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const findAllPost = (filter?: Prisma.PostWhereInput) => {
  return prisma.post.findMany({
    where: filter,
    orderBy: { published_at: "desc" },
    include: { tags: true, user: { select: { name: true, user_pic: true } } },
  });
};

export const findNewestPost = (limit: number = 5) => {
  return prisma.post.findMany({
    orderBy: { published_at: "desc" },
    take: limit,
    include: { tags: true, user: { select: { name: true, user_pic: true } } },
  });
};

export const findPopularPost = (limit: number = 10) => {
  return prisma.post.findMany({
    orderBy: { published_at: "desc", view_count: "desc" },
    take: limit,
    include: { tags: true, user: { select: { name: true, user_pic: true } } },
  });
};

export const findPost = (filter: Prisma.PostWhereInput) => {
  return prisma.post.findFirst({
    where: filter,
    orderBy: { published_at: "desc" },
    include: { tags: true, user: { select: { name: true, user_pic: true } } },
  });
};
export const createPost = (data: Prisma.PostUncheckedCreateInput) => {
  return prisma.post.create({ data });
};

export const updatePost = (
  where: Prisma.PostWhereUniqueInput,
  update: Prisma.PostUncheckedUpdateInput,
) => {
  return prisma.post.update({ where, data: update });
};

export const deletePost = (post_id: string) => {
  return prisma.post.delete({
    where: { id: post_id },
  });
};
