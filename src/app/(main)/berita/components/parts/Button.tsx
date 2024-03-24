import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

interface ButtonLinkProps {
  children?: ReactNode;
  href: string;
}

export default function PrimaryLinkButton({
  children,
  href,
}: Readonly<ButtonLinkProps>) {
  return (
    <Link
      href={href}
      scroll={false}
      className="inline-block w-fit rounded-full bg-primary-400 px-[13px] py-[13px] transition-all duration-500 hover:bg-primary-200"
    >
      <span className="text-base text-white">{children}</span>
    </Link>
  );
}

export function SearchButton({
  children,
  type,
  onClick,
  isDisabled,
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className="hidden md:inline-block w-fit rounded-full bg-primary-400 px-6 py-3 transition-all duration-500 hover:bg-primary-500 disabled:bg-neutral-300"
    >
      <span
        className={`text-base ${isDisabled ? "text-neutral-500" : "text-white"}`}
      >
        {children}
      </span>
    </button>
  );
}

export function SmallSearchButton({
  children,
  type,
  onClick,
  isDisabled,
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className="inline-block md:hidden w-fit rounded-full bg-primary-400 p-[13px] transition-all duration-500 hover:bg-primary-500 disabled:bg-neutral-300"
    >
      {children}
    </button>
  );
}
