import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const findAllSubmission = async (
  filter?: Prisma.SubmissionWhereInput,
) => {
  return await prisma.submission.findMany({ where: filter });
};

export const findSubmission = async (filter: Prisma.SubmissionWhereInput) => {
  return await prisma.submission.findFirst({
    where: filter,
    include: { fields: true },
  });
};

export const createSubmission = async (
  data: Prisma.SubmissionUncheckedCreateInput,
) => {
  return await prisma.submission.create({ data });
};

export const updateSubmission = async (
  where: Prisma.SubmissionWhereUniqueInput,
  update: Prisma.SubmissionUncheckedUpdateInput,
) => {
  return await prisma.submission.update({ where, data: update });
};

export const deleteSubmission = async (form_id: string) => {
  return await prisma.submission.delete({ where: { id: form_id } });
};
