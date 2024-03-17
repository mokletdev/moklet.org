import Image from "next/image";

export interface PersonDataProps {
  name: string;
  role: string;
  image: string;
}

export default function PersonData({
  name,
  role,
  image,
}: Readonly<PersonDataProps>) {
  return (
    <div className="mb-[22px] flex items-center gap-[12px]">
      <Image
        src={image}
        alt={name}
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
