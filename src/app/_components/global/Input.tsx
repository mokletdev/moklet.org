interface InputProps {
  label?: string;
  placeholder: string;
  className?: string;
}

export function TextField({
  label,
  placeholder,
  className,
}: Readonly<InputProps>) {
  return (
    <div className={"flex flex-col gap-2 " + className}>
      {label && (
        <label htmlFor={label}>
          {label.replace(label[0], label[0].toUpperCase())}
        </label>
      )}
      <input
        type="text"
        name={label}
        placeholder={placeholder}
        className="rounded-xl border border-neutral-500 px-[18px] active:border-black hover:border-black py-[14px] text-black placeholder-neutral-500 focus:outline-none transition-all duration-500"
      />
    </div>
  );
}

export function TextArea({
  label,
  placeholder,
  className,
}: Readonly<InputProps>) {
  return (
    <div className={"flex flex-col gap-2 " + className}>
      {label && (
        <label htmlFor={label}>
          {label.replace(label[0], label[0].toUpperCase())}
        </label>
      )}
      <textarea
        name={label}
        placeholder={placeholder}
        className="h-[144px] rounded-xl border border-neutral-500 px-[18px] active:border-black hover:border-black py-[14px] text-black placeholder-neutral-500 focus:outline-none transition-all duration-500"
      />
    </div>
  );
}
