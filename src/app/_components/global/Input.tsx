import { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  placeholder: string;
  className?: string;
  required?: boolean;
  name: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface OptionFieldProps {
  label: string;
  required?: boolean;
  options: { id: string; value: string }[];
  className?: string;
  value?: string | Array<string>;
  name: string;
}

interface TextFieldProps extends InputProps {
  type: "email" | "text" | "password" | "number" | string;
}

export function TextField({
  label,
  placeholder,
  className,
  required,
  type = "text",
}: Readonly<TextFieldProps>) {
  return (
    <div className={"flex flex-col gap-2 " + className}>
      {label && (
        <label
          htmlFor={label}
          className={`first-letter:capitalize ${
            required ? "after:text-red-500 after:content-['*']" : ""
          }`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={label}
        placeholder={placeholder}
        className="rounded-xl border border-neutral-500 px-[18px] active:border-black hover:border-black py-[14px] text-black placeholder-neutral-500 focus:outline-none transition-all duration-500"
        required={required}
      />
    </div>
  );
}

export function TextArea({
  label,
  placeholder,
  className,
  required,
}: Readonly<InputProps>) {
  return (
    <div className={"flex flex-col gap-2 " + className}>
      {label && (
        <label
          htmlFor={label}
          className={`first-letter:capitalize ${
            required ? "after:text-red-500 after:content-['*']" : ""
          }`}
        >
          {label}
        </label>
      )}
      <textarea
        name={label}
        placeholder={placeholder}
        required={required}
        className="h-[144px] rounded-xl border border-neutral-500 px-[18px] active:border-black hover:border-black py-[14px] text-black placeholder-neutral-500 focus:outline-none transition-all duration-500"
      />
    </div>
  );
}

export function RadioField({
  label,
  options,
  className,
  required,
  value,
  name,
}: Readonly<OptionFieldProps>) {
  return (
    <div className={"flex flex-col gap-2 " + className}>
      {label && (
        <label
          htmlFor={label}
          className={`first-letter:capitalize ${
            required ? "after:text-red-500 after:content-['*']" : ""
          }`}
        >
          {label}
        </label>
      )}
      {options &&
        options.map((option) => (
          <div className="flex gap-x-4 cursor-pointer" key={option.id}>
            <input
              type="radio"
              name={name}
              defaultChecked={option.value == value}
              value={option.value}
              className="w-5 h-5 cursor-pointer accent-primary-500 shrink-0 mt-0.5 border-gray-200 rounded-full text-primary-500 disabled:opacity-50 disabled:pointer-events-none transition-all ease-linear"
              id={option.id}
              required={required}
            />
            <label htmlFor={option.id} className="cursor-pointer text-sm ms-2">
              {option.value}
            </label>
          </div>
        ))}
    </div>
  );
}

export function CheckboxField({
  label,
  options,
  className,
  required,
  value,
  name,
}: Readonly<OptionFieldProps>) {
  return (
    <div className={"flex flex-col gap-2 " + className}>
      {label && (
        <label
          htmlFor={label}
          className={`first-letter:capitalize ${
            required ? "after:text-red-500 after:content-['*']" : ""
          }`}
        >
          {label}
        </label>
      )}
      {options &&
        options.map((option: any) => (
          <div className="flex gap-x-4 cursor-pointer" key={option.id}>
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={value?.includes(option.value)}
              className="w-4 h-4 cursor-pointer bg-white text-primary-500 accent-primary-500 shrink-0 mt-0.5 border-gray-200 rounded focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none transition-all"
              id={option.id}
              required={required}
            />
            <label htmlFor={option.id} className="cursor-pointer text-sm ms-2">
              {option.value}
            </label>
          </div>
        ))}
    </div>
  );
}
