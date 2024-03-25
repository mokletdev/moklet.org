import { H4, P } from "@/app/_components/global/Text";
import Image from "@/app/_components/global/Image";
import Link from "next/link";

interface DeveloperData {
  name: string;
  role: string;
  picture: string;
  instagram: string;
  linkedin: string;
  website?: string;
}

export default function DeveloperFigure({ dev }: { dev: DeveloperData }) {
  return (
    <figure className="w-full lg:w-[29.5%] xl:w-[372px] flex flex-col gap-[32px] text-wrap">
      <div className="flex flex-col gap-2 text-wrap">
        <H4>{dev.name}</H4>
        <P>{dev.role}</P>
      </div>
      <div className="w-full h-0 border border-neutral-400 rounded-full"></div>
      <Image
        src={dev.picture}
        alt={`${dev.name}'s Picture`}
        width={372}
        height={278}
        className="w-full h-full xl:h-[278px] lg:h-[278px] rounded-xl"
        unoptimized
      />
      <div>
        <div className="flex gap-[34px] mb-2 flex-row lg:flex-col lg:gap-0 xl:gap-[46px] xl:flex-row">
          <span className="w-[84px] text-neutral-500 font-[14px]">
            Instagram
          </span>
          <Link
            className="text-black font-normal hover:text-primary-400 transition-all"
            href={"https://instagram.com/" + dev.instagram}
            target="_blank"
          >
            @{dev.instagram}
          </Link>
        </div>
        <div className="flex gap-[34px] mb-2 flex-row lg:flex-col lg:gap-0 xl:gap-[46px] xl:flex-row">
          <span className="w-[84px] text-neutral-500 font-[14px]">
            LinkedIn
          </span>
          <Link
            className="text-black font-normal hover:text-primary-400 transition-all"
            href={`https://linkedin.com/${dev.linkedin}`}
            target="_blank"
          >
            {dev.linkedin}
          </Link>
        </div>
        <div className="flex gap-[34px] mb-2 flex-row lg:flex-col lg:gap-0 xl:gap-[46px] xl:flex-row">
          <span className="w-[84px] text-neutral-500 font-[14px]">Website</span>
          <Link
            className="text-black font-normal hover:text-primary-400 transition-all"
            href={dev.website ? `https://${dev.website}` : "#"}
            target="_blank"
          >
            {dev.website ?? "-"}
          </Link>
        </div>
      </div>
    </figure>
  );
}
