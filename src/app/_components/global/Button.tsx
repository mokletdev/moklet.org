import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function PrimaryButton({
  children,
  type,
  onClick,
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-block w-fit rounded-full bg-primary-400 px-6 py-3 transition-all duration-500 hover:bg-primary-200"
    >
      <span className="text-base text-white">{children}</span>
    </button>
  );
}
