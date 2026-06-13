"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import cn from "@/lib/clsx";

import HamburgerIcon from "../icons/HamburgerIcon";

interface NavOption {
  title: string;
  href: string;
}

const navOptions: NavOption[] = [
  { title: "Beranda", href: "/" },
  { title: "Berita", href: "/berita" },
  { title: "Organisasi", href: "/organisasi" },
  { title: "Tentang", href: "/tentang" },
  { title: "Kontribusi", href: "/kontributor" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="xl:relative fixed z-[999] mx-auto w-full flex flex-col">
      <div className="w-full flex xl:max-w-[1192px] mx-auto z-[999] py-4 xl:py-0 px-5 bg-white xl:bg-transparent justify-between items-center">
        <Link href={"/"} className="xl:mt-12">
          <span className="block w-[130px] h-[32px] bg-contain bg-[url(/horizontal.svg)] text-transparent bg-no-repeat pointer-events-none select-none">
            Moklet Organization: SMK Telkom Malang
          </span>
        </Link>
        <div
          className={cn(
            `fixed hidden left-1/2 top-[24.5px] xl:flex xl:items-center justify-between w-full transition-all duration-300 ${scrolled ? "max-w-[826px]" : "max-w-[602px]"} -translate-x-1/2 rounded-full border border-neutral-300 bg-white px-[50px] py-3 shadow-md`,
          )}
        >
          {scrolled && (
            <Link href="/">
              <Image
                src={"/horizontal.svg"}
                alt="Moklet Organization: SMK Telkom Malang"
                width={120}
                height={40}
                className={cn(
                  `pointer-events-none h-[40px] transition-all duration-300 ${scrolled ? "w-[120px]" : "w-0"}`,
                )}
              />
            </Link>
          )}
          {navOptions.map((navOption) => (
            <Link
              key={navOption.title}
              href={navOption.href}
              // Splitted "/a/b" will form an array: ["", "a", "b"], that's why we use the second index as comparation
              className={cn(
                `rounded-full py-2 text-center transition-all duration-300 hover:text-primary-400 ${pathname.split("/")[1] === navOption.href.split("/")[1] ? "text-red-400" : ""}`,
              )}
            >
              {navOption.title}
            </Link>
          ))}
        </div>
        <button
          className="block xl:hidden"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <HamburgerIcon />
        </button>
      </div>
      <div
        className={cn(
          `block xl:hidden h-[300px] w-full z-[800] bg-white transition-all duration-500 ${isExpanded ? "mt-0" : " -mt-96"}`,
        )}
      >
        <div className="flex flex-col gap-8 text-start justify-start items-start my-[21px] ms-[20px] lg:ms-[52px]">
          {navOptions.map((navOption) => (
            <Link
              key={navOption.title}
              href={navOption.href}
              // Splitted "/a/b" will form an array: ["", "a", "b"], that's why we use the second index as comparation
              className={cn(
                `rounded-full text-center text-[16px] transition-all duration-300 hover:text-primary-400 ${pathname.split("/")[1] === navOption.href.split("/")[1] ? "text-red-400" : ""}`,
              )}
              onClick={() => setIsExpanded(false)}
            >
              {navOption.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
