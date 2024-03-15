import Image from "next/image";

interface PersonDataProps {
  name: string;
  role: string;
}

export default function PersonData({ name, role }: Readonly<PersonDataProps>) {
  return (
    <div className="mb-[22px] flex items-center gap-[12px]">
      <Image
        src={"https://i.scdn.co/image/ab67616d00001e02f99ee9d6d91c399522b0baf9"}
        alt="Budi"
        width={44}
        height={44}
        className="h-full max-h-[44px] w-full max-w-[44px] rounded-full"
        unoptimized
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold text-primary-400">{name}</span>
        <span className="text-base font-normal text-black">{role}</span>
      </div>
    </div>
  );
}
