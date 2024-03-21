import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const findAllForms = async (filter?: Prisma.FormWhereInput) => {
  return await prisma.form.findMany({ where: filter });
};

export const findForm = async (filter: Prisma.FormWhereInput) => {
  return await prisma.form.findFirst({
    where: filter,
    include: { fields: { include: { options: true } } },
  });
};

export const createForm = async (data: Prisma.FormUncheckedCreateInput) => {
  return await prisma.form.create({ data });
};

export const updateForm = async (
  where: Prisma.FormWhereUniqueInput,
  update: Prisma.FormUncheckedUpdateInput,
) => {
  return await prisma.form.update({ where, data: update });
};

export const deleteForm = async (form_id: string) => {
  return await prisma.form.delete({ where: { id: form_id } });
};
