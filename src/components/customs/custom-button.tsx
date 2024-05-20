import { FC, ButtonHTMLAttributes } from "react";

// Define the button colors as a type for better type checking
export type ButtonColor =
  | "indigo"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "black";

// Define the button variants as a type for better type checking
export type ButtonVariant = "outlined" | "contained" | "link";

// Define the button types as a type for better type checking
type ButtonType = "button" | "submit" | "reset";

// Define the button sizes as a type for better type checking
export type ButtonSize = "sm" | "md" | "lg";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  isSubmitting?: boolean;
  label?: string;
  variant: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
}

const baseClassName =
  "group relative w-full flex justify-center py-2 px-4 border border-transparent font-semibold rounded-lg text-white transition-colors duration-200";

export const CustomButton: FC<CustomButtonProps> = ({
  type = "button",
  label = "",
  variant = "contained",
  color = "indigo",
  size = "md",
  ...props
}) => {
  const variantClassNames = {
    outlined: `bg-transparent border-${color}-500 text-${color}-500 hover:bg-${color}-500 hover:text-white`,
    contained: `bg-${color}-500 hover:bg-${color}-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 hover:shadow-lg`,
    link: `bg-transparent text-${color}-500 hover:text-${color}-600`,
  };

  const sizeClassNames = {
    sm: "px-3 py-4 text-sm",
    md: "px-4 py-5 text-base",
    lg: "px-5 py-6 text-lg",
  };

  const className = `${baseClassName} ${variantClassNames[variant]} ${sizeClassNames[size]}`;

  return (
    <button type={type} className={className} {...props}>
      {label}
    </button>
  );
};
