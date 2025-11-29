"use client";

import { SelectField } from "@/app/_components/global/Input";
import { SmallSectionWrapper } from "@/app/_components/global/Wrapper";
import { useRouter } from "next-nprogress-bar";

export default function PeriodSelect({
  periods,
  period,
}: {
  periods: {
    value: string;
    label: string;
  }[];
  period: string;
}) {
  const router = useRouter();

  return (
    <SmallSectionWrapper id="selector" className="pb-0 flex justify-end">
      <div className="w-full max-w-[200px]">
        <SelectField
          className="bg-white shadow-sm border-neutral-200 hover:border-primary-400 rounded-full cursor-pointer text-sm font-medium text-neutral-600 focus:ring-2 focus:ring-primary-100 transition-all duration-300"
          options={periods}
          value={period}
          handleChange={(e) => {
            router.push(`/organisasi/${e.currentTarget.value}`, {
              scroll: false,
            });
          }}
          name=""
        />
      </div>
    </SmallSectionWrapper>
  );
}
