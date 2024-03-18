import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const findAllUsers = (filter?: Prisma.UserWhereInput) => {
  return prisma.user.findMany({ where: filter });
};

export const findUser = (filter: Prisma.UserWhereInput) => {
  return prisma.user.findMany({ where: filter });
};

export const findUserAuth = (email: string) => {
  return prisma.user_Auth.findUnique({ where: { userEmail: email } });
};

export const createUser = (data: Prisma.UserUncheckedCreateInput) => {
  return prisma.user.create({ data });
};

export const updateUser = (
  where: Prisma.UserWhereUniqueInput,
  update: Prisma.UserUncheckedUpdateInput,
) => {
  return prisma.user.update({ where, data: update });
};

export const updateUserAuth = (
  where: Prisma.User_AuthWhereUniqueInput,
  update: Prisma.User_AuthUncheckedUpdateInput,
) => {
  return prisma.user_Auth.update({ where, data: update });
};

export const deleteUser = (user_id: string) => {
  return prisma.user.delete({ where: { id: user_id } });
};
