"use client";
import { BackButton } from "../../components/parts/Button";
import ArrowLeft from "../../components/icons/ArrowLeft";
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
