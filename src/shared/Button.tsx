import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";
import Loader from "./Loader";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "success" | "warning" | "error" | "transparent";
  variant: "fill" | "outline";
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  withLoader?: boolean;
  fullWidth?: boolean;
  marginTop?: number;
}

const bgColors: { [key in Props["color"]]: string } = {
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  transparent: "bg-transparent",
};

const bgColorsHover: { [key in Props["color"]]: string } = {
  primary: "hover:bg-primary-hover",
  success: "hover:bg-success-hover",
  warning: "hover:bg-warning-hover",
  error: "hover:bg-error-hover",
  transparent: "hover:bg-transparent",
};

function Button({
  type,
  children,
  disabled,
  color,
  icon,
  withLoader,
  fullWidth,
  marginTop,
  onClick,
  variant,
}: Props) {
  return (
    <button
      className={`${bgColors[color]} ${bgColorsHover[color]} ${
        fullWidth ? "w-full" : "w-max"
      } ${
        variant === "fill"
          ? "text-white rounded-sm"
          : "border-gray-300 border rounded-md font-bold text-black"
      } mt-${marginTop} focus:outline-none disabled:bg-gray-300 px-4 py-2 font-sans`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && (
        <span className="inline-block mr-2 align-text-bottom">{icon}</span>
      )}
      {withLoader ? <Loader /> : children}
    </button>
  );
}

export default Button;
