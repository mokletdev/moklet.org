interface InputProps {
  label?: string;
  placeholder: string;
  className?: string;
}

interface OptionFieldProps {
  label: string;
  options: any;
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

export function NumberField({
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
        type="number"
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

export function RadioField({
  label,
  options,
  className,
}: Readonly<OptionFieldProps>) {
  return (
    <div className={"flex flex-col gap-2 " + className}>
      {label && (
        <label htmlFor={label}>
          {label.replace(label[0], label[0].toUpperCase())}
        </label>
      )}
      {options &&
        options.map((option: any) => (
          <div className=" flex gap-x-6" key={option.id}>
            <input
              type="radio"
              name={label}
              value={option.value}
              className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id={option.id}
            />
            <label htmlFor={option.id} className="text-sm  ms-2 ">
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
}: Readonly<OptionFieldProps>) {
  return (
    <div className={"flex flex-col gap-2 " + className}>
      {label && (
        <label htmlFor={label}>
          {label.replace(label[0], label[0].toUpperCase())}
        </label>
      )}
      {options &&
        options.map((option: any) => (
          <div className=" flex gap-x-6" key={option.id}>
            <div className="flex">
              <input
                type="checkbox"
                name={label}
                value={option.value}
                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id={option.id}
              />
              <label
                htmlFor={option.id}
                className="text-sm text-gray-500 ms-3 dark:text-gray-400"
              >
                {option.value}
              </label>
            </div>
          </div>
        ))}
    </div>
  );
}
