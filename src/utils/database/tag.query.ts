import prisma from "@/lib/prisma";
import { paginator } from "../paginator";
import { Prisma, Tag } from "@prisma/client";

const paginate = paginator({ perPage: 10 });

export const findAllTags = async (page?: number) => {
  if (page) {
    return await paginate<Tag, Prisma.TagFindManyArgs>(
      prisma.post,
      { page },
      {
        include: {
          _count: {
            select: { posts: { where: { published: true } } },
          },
        },
      },
    );
  }

  return await prisma.tag.findMany({
    include: {
      _count: {
        select: { posts: { where: { published: true } } },
      },
    },
  });
};

export const findPostByTag = async (tagName: string, published?: boolean) => {
  const findTag = await prisma.tag.findUnique({
    where: { tagName },
    select: {
      posts: {
        orderBy: { published_at: "desc" },
        where: { published },
        include: {
          user: { select: { name: true, user_pic: true } },
          tags: true,
        },
      },
    },
  });

  return findTag?.posts;
};
