"use client";
import { BackButton } from "../../_components/parts/Button";
import ArrowLeft from "../../_components/icons/ArrowLeft";
import { default as useRouter } from "@/utils/customRouter";

export default function GoBack() {
  const router = useRouter();

  return (
    <BackButton
      onClick={() => {
        router.back();
      }}
    >
      <ArrowLeft />
    </BackButton>
  );
}
