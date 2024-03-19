import prisma from "@/lib/prisma";

export const findAllTag = async () => {
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
