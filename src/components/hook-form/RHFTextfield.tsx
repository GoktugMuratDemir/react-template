import { FC, InputHTMLAttributes, useState } from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { ErrorMessage } from "./RHFErrorMessage";
import SvgColor from "../svg-color";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type?: string;
}

const PasswordToggleButton: FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    className="text-gray-500 absolute top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    type="button"
    onClick={onClick}
  >
    <SvgColor width={24} height={24} src={`/icons/ic_password_eye.svg`} />
  </button>
);

export const RHFTextfield: FC<InputProps> = ({
  name,
  label,
  type = "text",
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error: FieldError | undefined = errors[name] as FieldError;
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () =>
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));

  const inputClass = `font-medium text-base border border-gray-200 rounded-lg px-4 py-5 w-full bg-gray-300 ${
    inputType === "password" ? "font-black tracking-widest" : ""
  }`;

  return (
    <div>
      <div className="relative">
        <input
          id={name}
          type={inputType}
          placeholder={label}
          className={inputClass}
          {...register(name)}
          {...props}
        />
        {type === "password" && (
          <PasswordToggleButton onClick={togglePasswordVisibility} />
        )}
      </div>
      <ErrorMessage error={error} />
    </div>
  );
};
