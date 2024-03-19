import Image from "@/app/_components/global/Image";
import Link from "next/link";
import { H1, H2, P } from "../global/Text";
import ArrowIcon from "../icons/ArrowIcon";

export default function Header() {
  return (
    <section className="min-h-[1000px] md:min-h-screen w-full">
      <div className="w-full h-screen left-0 top-0 absolute bg-gradient-to-b from-primary-50 to-white -z-10"></div>
      <div className="relative h-full md:h-[605px] w-full my-auto py-[82px] md:py-0">
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 md:-translate-y-[75%]">
          <H1 className="mx-auto mb-[18px] w-full max-w-[794px] text-center hidden sm:block">
            <span className="text-primary-400">Jelajahi</span> Kreativitas dan
            Inovasi di SMK Telkom Malang
          </H1>
          <H2 className="mx-auto mb-[18px] w-full max-w-[794px] text-center block sm:hidden">
            <span className="text-primary-400">Jelajahi</span> Kreativitas dan
            Inovasi di SMK Telkom Malang
          </H2>
          <P className="mx-auto mb-[80px] w-full max-w-[510px] text-center">
            Portal menuju kegiatan kreatif nan inovatif oleh
            organisasi-organisasi di MOKLET
          </P>
          <Link
            href={"#berita"}
            className="relative mx-auto block h-[50px] w-[50px] animate-bounce rounded-full bg-primary-400 transition-all duration-500 hover:bg-primary-200"
          >
            <ArrowIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          </Link>
        </div>
        <Image
          src={"/images/Header-1.png"}
          width={383}
          height={510}
          alt="Header's image"
          className="absolute left-0 hidden md:block top-[100px] -z-10"
        />
        <Image
          src={"/images/Header-2.png"}
          width={383}
          height={510}
          alt="Header's image"
          className="absolute right-0 hidden md:block top-[80px] -z-10"
        />
        <Image
          src={"/images/Header-3.png"}
          width={383}
          height={510}
          alt="Header's image"
          className="absolute left-0 block md:hidden top-[550px] -z-10"
        />
        <Image
          src={"/images/Header-4.png"}
          width={383}
          height={510}
          alt="Header's image"
          className="absolute right-0 block md:hidden top-[400px] -z-10"
        />
      </div>
    </section>
  );
}
