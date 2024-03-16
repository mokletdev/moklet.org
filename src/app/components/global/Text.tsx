import { ReactNode } from "react";

interface TextProps {
  children?: ReactNode;
  className?: string;
}

export function H1({ children, className }: Readonly<TextProps>) {
  return (
    <h1 className={"text-[44px] font-bold leading-[140%] " + className}>
      {children}
    </h1>
  );
}

export function P({ children, className }: Readonly<TextProps>) {
  return <p className={"text-neutral-500 " + className}>{children}</p>;
}

export function H2({ children, className }: Readonly<TextProps>) {
  return (
    <h2 className={"text-4xl font-bold text-black " + className}>{children}</h2>
  );
}

export function UnderlineTitle({
  children,
  className,
  lineWidth,
}: Readonly<TextProps & { lineWidth: string | number }>) {
  return (
    <div className="relative">
      <h2 className={"z-10 text-4xl font-bold text-black " + className}>
        {children}
      </h2>
      <div
        className={`absolute left-[3px] top-[28px] -z-10 h-[16px] bg-primary-100`}
        style={{ width: lineWidth }}
      ></div>
    </div>
  );
}
