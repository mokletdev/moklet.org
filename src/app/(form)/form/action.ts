"use server";

import {
  deleteForm,
  findAllForms,
  findForm,
} from "@/utils/database/form.query";
import {
  createSubmission,
  findSubmission,
} from "@/utils/database/submission.query";
import { Prisma } from "@prisma/client";

export const findFormById = async (form_id: string, active: boolean) => {
  const form = await findForm({ id: form_id, is_open: active });

  return form;
};

export const findFormByUserId = async (user_id: string) => {
  const forms = await findAllForms({ user_id });

  return forms;
};

export const deleteFormById = async (form_id: string) => {
  const form = await deleteForm(form_id);

  return form;
};

export const submitForm = async (
  user_id: string,
  form_id: string,
  answers: Array<{ name: string; value: string }>,
) => {
  const form = await findForm({ id: form_id, is_open: true });

  if (!form) throw new Error("Form not found!");
  if (
    (form.open_at && new Date(form.open_at).getTime() > new Date().getTime()) ||
    (form.close_at && new Date(form.close_at).getTime() < new Date().getTime())
  )
    throw new Error("Form closed!");

  if (form.submit_once) {
    const submission = await findSubmission({ user_id, form_id });
    if (submission) throw new Error("Already submit!");
  }

  answers = answers.filter((answer) => answer.value != "");

  const invalidAnswer = answers.find(
    (item) => !form.fields.find((i) => item.name == i.id.toString()),
  );
  console.log(invalidAnswer);

  if (invalidAnswer) throw new Error("Invalid request!");

  for (let i = 0; i < form.fields.length; i++) {
    const field = form.fields[i];

    const qAnswer = answers.find((item) => item.name == answers[i].name);

    if (field.required && !qAnswer)
      throw new Error(field.label + " is required.");

    if (qAnswer && (field.type == "radio" || field.type == "checkbox")) {
      const invalidAnswer = !field.options.find(
        (i) => qAnswer.value == i.value,
      );
      if (invalidAnswer) throw new Error("Invalid request!");
    }
  }

  let fields_create: Prisma.Submission_FieldUncheckedCreateWithoutSubmissionInput[] =
    answers.map((answer) => {
      return { field_id: parseInt(answer.name), value: answer.value };
    });

  let submission = await createSubmission({
    user_id,
    form_id,
    fields: { create: fields_create },
  });

  return { submission_id: submission.id, success: true };
};
