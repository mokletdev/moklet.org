import Image from "@/app/_components/global/Image";
import Link from "next/link";
import { P } from "./Text";

interface FootOption {
  title: string;
  href: string;
}

const footToS: FootOption[] = [
  { title: "SLA", href: "/policies/tos/service-level-aggreement" },
  { title: "AUP", href: "/policies/tos/acceptable-use-policy" },
];

const footOptions: FootOption[] = [
  { title: "Berita", href: "/berita" },
  { title: "Sub-organ", href: "/sub-organ" },
  { title: "Tentang", href: "/tentang" },
  { title: "Developer", href: "/developer" },
];

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-between">
      <div className="mb-[42px] mt-[82px] flex flex-col lg:flex-row w-full justify-between gap-[62px]">
        <div className="w-full md:w-1/3">
          <div className="flex flex-col gap-[59px]">
            <div className="">
              <Image
                alt="logo"
                src={"/horizontal.svg"}
                width={110}
                height={39}
              />
              <P className="pt-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ullamcorper odio justo.
              </P>
            </div>
            <p className="font-normal text-black hidden md:block">
              © 2024 Copyright MokletDev
            </p>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col md:flex-row text-black w-full gap-[52px] md:gap-0 md:w-[58%]">
          <div className="flex flex-col gap-[22px] w-full md:w-1/4">
            <h3 className="font-normal text-neutral-500">Menu Utama</h3>
            <div className="flex flex-col gap-[14px] ">
              {footOptions.map((footOption) => (
                <Link href={footOption.href} key={footOption.title}>
                  <h3 className="transition-all duration-300 hover:text-neutral-400">
                    {footOption.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[22px] w-full md:w-1/4">
            <h3 className="font-normal text-neutral-500">Menu Utama</h3>
            <div className="flex flex-col gap-[14px] ">
              {footOptions.map((footOption) => (
                <Link href={footOption.href} key={footOption.title}>
                  <h3 className="transition-all duration-300 hover:text-neutral-400">
                    {footOption.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[22px] w-full md:w-1/4">
            <h3 className="font-normal text-neutral-500">Menu Utama</h3>
            <div className="flex flex-col gap-[14px] ">
              {footOptions.map((footOption) => (
                <Link href={footOption.href} key={footOption.title}>
                  <h3 className="transition-all duration-300 hover:text-neutral-400">
                    {footOption.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[22px] w-full md:w-1/4">
            <h3 className="font-normal text-neutral-500">Term Of Service</h3>
            <div className="flex flex-col gap-[14px] ">
              {footToS.map((footToS) => (
                <Link href={footToS.href} key={footToS.title}>
                  <h3 className="transition-all duration-300 hover:text-neutral-400">
                    {footToS.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="font-normal text-black block md:hidden">
          © 2024 Copyright MokletDev
        </p>
      </div>
    </footer>
  );
}
