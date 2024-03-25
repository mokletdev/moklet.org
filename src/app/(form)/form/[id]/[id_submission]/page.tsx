import { H2, P } from "@/app/_components/global/Text";
import React from "react";
import { findForm } from "@/utils/database/form.query";
import { nextGetServerSession } from "@/lib/next-auth";
import { redirect, RedirectType, notFound } from "next/navigation";
import Link from "next/link";
import { findSubmissionWithForm } from "@/utils/database/submission.query";
import Form from "../../_components/Form";
import ForbiddenForm from "../../_components/ForbiddenForm";
import { Metadata } from "next";

type Props = {
  params: { id: string; id_submission: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let form = await findForm({ id: params.id });

  return {
    title: form?.title ?? "Not Found",
    description: form?.description,
  };
}

function transformToArrayCheckbox(inputArray: Array<any>) {
  return inputArray.reduce((acc, item) => {
    const group = acc.find(
      (group: { field_id: string }) => group.field_id === item.field_id,
    );
    if (group) {
      group.value = [].concat(group.value, item.value);
    } else {
      acc.push({
        ...item,
        value: item.value,
      });
    }
    return acc;
  }, []);
}

const page = async ({ params }: Props) => {
  const session = await nextGetServerSession();
  if (!session)
    return redirect(
      "/auth/signin?callbackUrl=/form/" +
        params.id +
        "/" +
        params.id_submission,
      RedirectType.replace,
    );

  const submission = await findSubmissionWithForm({
    user_id: session.user?.id,
    form_id: params.id,
    id: params.id_submission,
  });

  if (!submission) return notFound();

  const form = submission?.form;

  if (!form.is_open) return <ForbiddenForm />;
  if (
    (form.open_at && new Date(form.open_at).getTime() > new Date().getTime()) ||
    (form.close_at && new Date(form.close_at).getTime() < new Date().getTime())
  )
    return <ForbiddenForm />;

  if (!form.allow_edit)
    return <ForbiddenForm message="Anda sudah menjawab formulir ini." />;

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
      <Form
        form={form}
        a={session.user?.id!}
        b={params.id}
        answers={transformToArrayCheckbox(submission.fields)}
      />
    </div>
  );
};

export default page;
