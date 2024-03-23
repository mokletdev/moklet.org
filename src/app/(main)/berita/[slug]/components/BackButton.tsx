"use client"
import { BackButton } from "../../components/parts/Button";
import ArrowLeft from "../../components/icons/ArrowLeft";
import {useRouter} from "next/navigation";

export default function GoBack() {
    const router = useRouter()
  return (
    <BackButton onClick={()=>{router.back()}}>
      <ArrowLeft />
    </BackButton>
  );
}
