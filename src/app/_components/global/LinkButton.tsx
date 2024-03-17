import Link from "next/link";
import { ReactNode } from "react";

interface LinkButtonProps {
  children?: ReactNode;
  href: string;
}

export default function LinkButton({
  children,
  href,
}: Readonly<LinkButtonProps>) {
  return (
    <Link
      href={href}
      className="inline-block w-fit rounded-full bg-primary-400 px-6 py-3 transition-all duration-500 hover:bg-primary-200"
    >
      <span className="text-base text-white">{children}</span>
    </Link>
  );
}
