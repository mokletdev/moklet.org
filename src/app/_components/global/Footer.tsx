import Image from "@/app/_components/global/Image";

import LinkButton from "./Button";
import { P } from "./Text";

interface FootOption {
  title: string;
  href: string;
}

const footToS: FootOption[] = [
  {
    title: "Service Level Aggreement",
    href: "/policies/tos/service-level-aggreement",
  },
  {
    title: "Acceptable Use Policy",
    href: "/policies/tos/acceptable-use-policy",
  },
];

const mainMenus: FootOption[] = [
  { title: "Berita", href: "/berita" },
  { title: "Organisasi", href: "/organisasi" },
  { title: "Tentang", href: "/tentang" },
  { title: "Gabung Kontributor", href: "/kontributor" },
];

const usefulLinks: FootOption[] = [
  { title: "Profil Sekolah", href: "https://www.smktelkom-mlg.sch.id" },
  { title: "PPDB Moklet", href: "https://ppdb.smktelkom-mlg.sch.id" },
  { title: "YPT", href: "https://ypt.or.id/" },
  { title: "MokletDev", href: "https://github.com/mokletdev" },
];

const socialMedias: FootOption[] = [
  {
    title: "Moklet",
    href: "https://www.instagram.com/smktelkommalang",
  },
  {
    title: "OSIS Moklet",
    href: "https://www.instagram.com/osismoklet",
  },
  {
    title: "MPK Moklet",
    href: "https://www.instagram.com/mpkmoklet",
  },
  {
    title: "METIC Moklet",
    href: "https://www.instagram.com/meticmoklet",
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full">
      <div className="mb-[42px] mt-[82px] flex flex-col xl:flex-row w-full justify-between gap-[62px] lg:gap-[80px]">
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
            <div className="hidden xl:block">
              <p className="font-normal text-black">
                © {currentYear} Copyright MokletDev
              </p>
              <div className="flex gap-4">
                {footToS.map((footToS) => (
                  <LinkButton
                    variant="tertiary"
                    href={footToS.href}
                    key={footToS.title}
                  >
                    <span className="text-sm text-neutral-500">
                      {footToS.title}
                    </span>
                  </LinkButton>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Image
              alt="Netlify Icon"
              src={"/images/netlify-icon.svg"}
              width={24}
              height={24}
            />
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-500"
            >
              Supported by Netlify
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-black w-full justify-start gap-[52px] xl:gap-0 xl:justify-between xl:w-[58%]">
          <div className="flex flex-col gap-[22px] w-full xl:w-[112px]">
            <h3 className="font-normal text-neutral-500">Menu Utama</h3>
            <div className="flex flex-col gap-[14px] ">
              {mainMenus.map((footOption) => (
                <LinkButton
                  variant="tertiary"
                  href={footOption.href}
                  key={footOption.title}
                >
                  {footOption.title}
                </LinkButton>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[22px] w-full xl:w-[112px]">
            <h3 className="font-normal text-neutral-500">Tautan</h3>
            <div className="flex flex-col gap-[14px] ">
              {usefulLinks.map((footOption) => (
                <LinkButton
                  variant="tertiary"
                  href={footOption.href}
                  key={footOption.title}
                  target="_blank"
                >
                  {footOption.title}
                </LinkButton>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[22px] w-full xl:w-[112px]">
            <h3 className="font-normal text-neutral-500">Media Sosial</h3>
            <div className="flex flex-col gap-[14px] ">
              {socialMedias.map((footOption) => (
                <LinkButton
                  variant="tertiary"
                  href={footOption.href}
                  key={footOption.title}
                  target="_blank"
                >
                  {footOption.title}
                </LinkButton>
              ))}
            </div>
          </div>
        </div>
        <div className="block xl:hidden">
          <p className="font-normal text-black">
            © {currentYear} Copyright MokletDev
          </p>
          <div className="flex gap-4">
            {footToS.map((footToS) => (
              <LinkButton
                variant="tertiary"
                href={footToS.href}
                key={footToS.title}
              >
                <span className="text-sm text-neutral-500">
                  {footToS.title}
                </span>
              </LinkButton>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
