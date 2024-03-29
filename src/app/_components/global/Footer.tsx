import Image from "@/app/_components/global/Image";
import { P } from "./Text";
import { TertiaryLinkButton } from "./LinkButton";

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
    <footer className="flex items-center justify-between">
      <div className="mb-[42px] mt-[82px] flex flex-col xl:flex-row w-full justify-between gap-[62px]">
        <div className="w-full xl:w-1/3">
          <div className="flex flex-col gap-[59px]">
            <div className="">
              <Image
                alt="logo"
                src={"/horizontal.svg"}
                width={110}
                height={39}
              />
              <P className="pt-[18px]">
                Platform informasi organisasi & sub-organ untuk siswa SMK Telkom
                Malang
              </P>
            </div>
            <p className="font-normal text-black hidden xl:block">
              © 2024 Copyright MokletDev
            </p>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col md:flex-row text-black w-full gap-[52px] xl:gap-0 xl:w-[58%]">
          <div className="flex flex-col gap-[22px] w-full xl:w-1/4">
            <h3 className="font-normal text-neutral-500">Menu Utama</h3>
            <div className="flex flex-col gap-[14px] ">
              {footOptions.map((footOption) => (
                <TertiaryLinkButton
                  href={footOption.href}
                  key={footOption.title}
                >
                  {footOption.title}
                </TertiaryLinkButton>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[22px] w-full xl:w-1/4">
            <h3 className="font-normal text-neutral-500">Menu Utama</h3>
            <div className="flex flex-col gap-[14px] ">
              {footOptions.map((footOption) => (
                <TertiaryLinkButton
                  href={footOption.href}
                  key={footOption.title}
                >
                  {footOption.title}
                </TertiaryLinkButton>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[22px] w-full xl:w-1/4">
            <h3 className="font-normal text-neutral-500">Menu Utama</h3>
            <div className="flex flex-col gap-[14px] ">
              {footOptions.map((footOption) => (
                <TertiaryLinkButton
                  href={footOption.href}
                  key={footOption.title}
                >
                  {footOption.title}
                </TertiaryLinkButton>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[22px] w-full xl:w-1/4">
            <h3 className="font-normal text-neutral-500">Term Of Service</h3>
            <div className="flex flex-col gap-[14px] ">
              {footToS.map((footToS) => (
                <TertiaryLinkButton href={footToS.href} key={footToS.title}>
                  {footToS.title}
                </TertiaryLinkButton>
              ))}
            </div>
          </div>
        </div>
        <p className="font-normal text-black block xl:hidden">
          © 2024 Copyright MokletDev
        </p>
      </div>
    </footer>
  );
}
