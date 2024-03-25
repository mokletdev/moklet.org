import { H4, P } from "@/app/_components/global/Text";
import Image from "@/app/_components/global/Image";

interface DeveloperData {
  name: string;
  role: string;
  picture: string;
  instagram: string;
  email: string;
}

export default function DeveloperFigure({ dev }: { dev: DeveloperData }) {
  return (
    <figure className="w-full lg:w-[29.5%] xl:w-[372px] flex flex-col gap-[32px] text-wrap">
      <div className="flex flex-col gap-2 text-wrap">
        <H4>{dev.name}</H4>
        <P>{dev.role}</P>
      </div>
      <div className="w-full h-0 border border-black"></div>
      <div className="w-full h-[278px] lg xl:h-[278px] lg:h-[183px]">
        <Image
          src={dev.picture}
          alt={`${dev.name}'s Picture`}
          width={372}
          height={278}
          className="w-full h-full"
          unoptimized
        />
      </div>
      <div>
        <div className="flex gap-[34px] mb-2 flex-row lg:flex-col lg:gap-0 xl:gap-[46px] xl:flex-row">
          <span className="w-[84px] text-neutral-500 font-[14px]">
            Instagram
          </span>
          <span className="text-black font-normal">{dev.instagram}</span>
        </div>
        <div className="flex gap-[34px] mb-2 flex-row lg:flex-col lg:gap-0 xl:gap-[46px] xl:flex-row">
          <span className="w-[84px] text-neutral-500 font-[14px]">Email</span>
          <span className="text-black font-normal">{dev.email}</span>
        </div>
      </div>
    </figure>
  );
}
