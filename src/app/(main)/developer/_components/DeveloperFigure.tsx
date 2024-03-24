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
    <figure className="w-[372px] flex flex-col gap-[32px]">
      <div className="flex flex-col gap-2">
        <H4>{dev.name}</H4>
        <P>{dev.role}</P>
      </div>
      <div className="w-full h-0 border border-black"></div>
      <div className="w-full h-[278px]">
        <Image
          src={dev.picture}
          alt={"waw"}
          width={372}
          height={278}
          className="w-full h-[278px]"
          unoptimized
        />
      </div>
      <div>
        <div className="flex gap-[46px] mb-2">
          <span className="w-[84px] text-neutral-500 font-[14px]">
            Instagram
          </span>
          <span className="text-black font-normal">{dev.instagram}</span>
        </div>
        <div className="flex gap-[46px]">
          <span className="w-[84px] text-neutral-500 font-[14px]">Email</span>
          <span className="text-black font-normal">{dev.email}</span>
        </div>
      </div>
    </figure>
  );
}
