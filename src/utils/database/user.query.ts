import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const findAllUsers = async (filter?: Prisma.UserWhereInput) => {
  return await prisma.user.findMany({ where: filter });
};

export const findUser = async (filter: Prisma.UserWhereInput) => {
  return await prisma.user.findFirst({ where: filter });
};

export const findUserAuth = async (email: string) => {
  return await prisma.user_Auth.findUnique({ where: { userEmail: email } });
};

export const findUserId = async (id: string) => {
  return await prisma.user_Auth.findUnique({ where: { id: id } });
}

export const createUser = async (data: Prisma.UserUncheckedCreateInput) => {
  return await prisma.user.create({ data });
};

export const updateUser = async (
  where: Prisma.UserWhereUniqueInput,
  update: Prisma.UserUncheckedUpdateInput,
) => {
  return await prisma.user.update({ where, data: update });
};

export const updateUserAuth = async (
  where: Prisma.User_AuthWhereUniqueInput,
  update: Prisma.User_AuthUncheckedUpdateInput,
) => {
  return await prisma.user_Auth.update({ where, data: update });
};

export const deleteUser = async (user_id: string) => {
  return await prisma.user.delete({ where: { id: user_id } });
};
