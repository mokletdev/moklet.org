import { Post, User, Tag } from "@prisma/client";

export type PostSeeder = Post & { user: User; tag: Tag };
