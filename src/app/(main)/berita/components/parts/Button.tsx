import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  href: string;
}

export default function PrimaryLinkButton({
  children,
  href,
}: Readonly<ButtonProps>) {
  return (
    <Link
      href={href}
      className="inline-block w-fit rounded-full bg-primary-400 px-[13px] py-[13px] transition-all duration-500 hover:bg-primary-200"
    >
      <span className="text-base text-white">{children}</span>
    </Link>
  );
}
