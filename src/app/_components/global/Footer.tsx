"use client";

import Link from "next/link";
import Image from "next/image";

interface FootOption {
  title: string;
  href: string;
}

const footOptions: FootOption[] = [
  { title: "Berita", href: "/berita" },
  { title: "Sub-organ", href: "/sub-organ" },
  { title: "Tentang", href: "/tentang" },
  { title: "Developer", href: "/developer" },
];

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-center">
      <div className="mb-[42px] mt-[82px] flex w-full justify-center gap-[158px]">
        <div className="w-full max-w-[394px] justify-start">
          <div className="flex flex-col gap-[59px]">
            <div className="">
              <Image
                alt="logo"
                src={"/horizontal.svg"}
                width={110}
                height={39}
              />
              <h3 className="pt-[18px] font-normal text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ullamcorper odio justo.
              </h3>
            </div>
            <div className="">
              <h3 className="font-normal text-black">
                Copyright MokletDev 2024
              </h3>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex gap-[72px] text-black">
          <div className="flex flex-col gap-[22px]">
            <div className="min-w-[106px]">
              <h3 className="font-normal text-neutral-500">Menu Utama</h3>
            </div>
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
          <div className="flex flex-col gap-[22px]">
            <div className="min-w-[106px]">
              <h3 className="font-normal text-neutral-500">Menu Utama</h3>
            </div>
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
          <div className="flex flex-col gap-[22px]">
            <div className="min-w-[106px]">
              <h3 className="font-normal text-neutral-500">Menu Utama</h3>
            </div>
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
          <div className="flex flex-col gap-[22px]">
            <div className="min-w-[106px]">
              <h3 className="font-normal text-neutral-500">Menu Utama</h3>
            </div>
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
        </div>
      </div>
    </footer>
  );
}
