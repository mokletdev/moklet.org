import { PrimaryButton, TertiaryButton } from "@/app/_components/global/Button";
import {
  CheckboxField,
  RadioField,
  TextArea,
  TextField,
} from "@/app/_components/global/Input";
import { H1, H2, P, Pblk } from "@/app/_components/global/Text";
import React from "react";
import { findForm } from "@/utils/database/form.query";
import { nextGetServerSession } from "@/lib/next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { findSubmission } from "@/utils/database/submission.query";

const page = async ({ params }: { params: { id: string } }) => {
  const session = await nextGetServerSession();
  if (!session) return redirect("/auth/signin?callbackUrl=/form/" + params.id);

  var form = await findForm({ id: params.id });

  if (!form) return <H1>Not found</H1>;
  if (!form.is_open) return <H1>Formulir tidak dapat diakses!</H1>;
  if (
    (form.open_at && new Date(form.open_at).getTime() > new Date().getTime()) ||
    (form.close_at && new Date(form.close_at).getTime() < new Date().getTime())
  )
    return <H1>Formulir tidak dapat diakses!</H1>;

  if (form.submit_once) {
    const submission = await findSubmission({
      user_id: session.user?.id,
      form_id: params.id,
    });
    if (submission) return <H1>Already submit</H1>;
  }

  return (
    <div className="items-start justify-between mx-auto max-w-[90vw] w-[640px] bg-white rounded-md">
      <div className="w-full p-6 border-b border-black box-border">
        <H2>{form.title}</H2>
        <P>{form.description}</P>
        <P className="mt-4 font-medium">{session.user?.name}</P>{" "}
        <Link
          className="hover:cursor-pointer text-info-500 hover:text-info-700 transition-all"
          href={"/auth/signout?callbackUrl=/form/" + params.id}
        >
          Ganti akun
        </Link>
        <P className="text-red-500 text-sm mt-4">
          * Menunjukkan pertanyaan yang wajib diisi
        </P>
      </div>
      <form className="block mx-auto p-6">
        {form.fields &&
          form.fields.map((field) => (
            <div key={field.id}>
              {["email", "text", "password", "number"].includes(field.type) && (
                <TextField
                  type={field.type as string}
                  label={field.label}
                  name={field.id.toString()}
                  placeholder={"Jawaban Anda"}
                  className="mb-6 w-full"
                  required={field.required}
                />
              )}
              {field.type === "longtext" && (
                <TextArea
                  label={field.label}
                  name={field.id.toString()}
                  placeholder={"Jawaban Anda"}
                  className="mb-6 w-full"
                  required={field.required}
                />
              )}
              {field.type === "radio" && (
                <RadioField
                  label={field.label}
                  name={field.id.toString()}
                  options={field.options.map((item) => {
                    return {
                      id: item.field_id + "_" + item.id,
                      name: item.id.toString(),
                      value: item.value,
                    };
                  })}
                  className="mb-6 w-full"
                  required={field.required}
                />
              )}
              {field.type === "checkbox" && (
                <CheckboxField
                  label={field.label}
                  name={field.id.toString()}
                  options={field.options.map((item) => {
                    return {
                      id: item.field_id + "_" + item.id,
                      value: item.value,
                    };
                  })}
                  className="mb-6 w-full"
                  required={field.required}
                />
              )}
            </div>
          ))}
        <div className="flex justify-between">
          <PrimaryButton type="submit">Kirim</PrimaryButton>
          <button
            type="reset"
            className="cursor-pointer text-neutral-500 hover:text-primary-500 transition-all"
          >
            Hapus jawaban
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
