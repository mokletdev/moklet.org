import Link from "next/link";
import { ReactNode } from "react";

interface LinkButtonProps {
  children?: ReactNode;
  href: string;
  scroll?: boolean;
}

export default function PrimaryLinkButton({
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

export function SecondaryLinkButton({
  children,
  href,
}: Readonly<LinkButtonProps>) {
  return (
    <Link
      href={href}
      className="inline-block w-fit rounded-full border border-primary-400 hover:bg-primary-50 px-6 py-3 transition-all duration-500"
    >
      <span className={"text-base text-primary-400"}>{children}</span>
    </Link>
  );
}

export function TertiaryLinkButton({
  children,
  href,
  scroll,
}: Readonly<LinkButtonProps>) {
  return (
    <Link
      href={href}
      scroll={scroll}
      className={
        "text-base text-black hover:text-primary-400 transition-all duration-500"
      }
    >
      {children}
    </Link>
  );
}
