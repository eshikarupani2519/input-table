import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "email" | "password";
  required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  value = "",
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
  type = "text",
  required = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const sizeClasses =
    size === "sm"
      ? "px-2 py-1 text-sm" 
      : size === "lg"
      ? "px-4 py-3 text-lg"
      : "px-3 py-2 text-base";

  const variantClasses =
    variant === "filled"
      ? "bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500"
      : variant === "ghost"
      ? "bg-transparent border border-transparent focus:border-blue-500"
      : "bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500";

  const borderClasses = invalid
    ? "border-red-500 focus:ring-red-500"
    : "border-gray-300";

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="font-medium text-sm">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`w-full rounded-md sm:placeholder:!text-xs  ${sizeClasses} ${variantClasses} ${borderClasses} disabled:bg-gray-100 disabled:cursor-not-allowed`}
        />
        {/* Clear button */}
        {value && !disabled && (
          <button
            type="button"
            onClick={() =>
              onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
          >
            <X size={16} />
          </button>
        )}
        {/* Password toggle */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
      {helperText && !errorMessage && (
        <p className="text-xs text-gray-500">{helperText}</p>
      )}
      {errorMessage && (
        <p className="text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};
