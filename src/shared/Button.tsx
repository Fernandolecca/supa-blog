import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";
import Loader from "./Loader";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "success" | "warning" | "error";
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
};

const bgColorsHover: { [key in Props["color"]]: string } = {
  primary: "bg-primary-hover",
  success: "bg-success-hover",
  warning: "bg-warning-hover",
  error: "bg-error-hover",
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
}: Props) {
  return (
    <button
      className={`${bgColors[color]} hover:${
        bgColorsHover[color]
      } text-white px-4 py-2 font-sans ${
        fullWidth ? "w-full" : "w-max"
      } rounded-sm mt-${marginTop} focus:outline-none disabled:bg-gray-300`}
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
