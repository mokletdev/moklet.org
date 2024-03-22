import { PrimaryButton } from "@/app/_components/global/Button";
import {
  CheckboxField,
  NumberField,
  RadioField,
  TextArea,
  TextField,
} from "@/app/_components/global/Input";
import { H1, H2, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import EclipseIcon from "@/app/_components/icons/EclipseIcon";
import React from "react";
import { findForm } from "@/utils/database/form.query";

const page = async ({ params }: { params: { id: string } }) => {
  var form = await findForm({ id: params.id });
  if (!form) return <H1>Not found</H1>;

  return (
    <SectionWrapper id="form">
      <div className="relative flex flex-col w-full items-start justify-between gap-[54px]">
        <div className="w-full">
          <H2 className="mb-[18px]">{form.title}</H2>
          <P>{form.description}</P>
        </div>
        <form className="block w-full">
          {form.fields &&
            form.fields.map((field) => (
              <div key={field.id}>
                {field.type === "text" && (
                  <TextField
                    label={field.label}
                    placeholder={"Masukkan " + field.label}
                    className="mb-6 w-full"
                  />
                )}
                {field.type === "number" && (
                  <NumberField
                    label={field.label}
                    placeholder={"Masukkan " + field.label}
                    className="mb-6 w-full"
                  />
                )}
                {field.type === "longtext" && (
                  <TextArea
                    label={field.label}
                    placeholder={"Masukkan " + field.label}
                    className="mb-6 w-full"
                  />
                )}
                {field.type === "radio" && (
                  <RadioField
                    label={field.label}
                    options={field.options}
                    className="mb-6 w-full"
                  />
                )}
                {field.type === "checkbox" && (
                  <CheckboxField
                    label={field.label}
                    options={field.options}
                    className="mb-6 w-full"
                  />
                )}
              </div>
            ))}
          <PrimaryButton>Kirim aspirasi</PrimaryButton>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default page;
