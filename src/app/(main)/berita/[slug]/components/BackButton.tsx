"use client";
import { BackButton } from "../../_components/parts/Button";
import ArrowLeft from "../../_components/icons/ArrowLeft";
import { useRouter } from "next/navigation";

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
