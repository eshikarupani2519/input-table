import React, { useState } from "react";
import { InputField } from "./InputField";

interface FormProps {
  mode: "light" | "dark";
}

export const Form: React.FC<FormProps> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailError =
    email && !emailRegex.test(email) ? "Invalid email format" : "";

  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  const passwordError =
    password && !passRegex.test(password)
      ? "Password must be 8+ chars, include uppercase, lowercase, number, special char"
      : "";

  const isValid =
    !emailError && !passwordError && email !== "" && password !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      alert("Form submitted successfully!");
    }
  };

  // Theme classes
  const bgClass = mode === "dark" ? "bg-gray-800" : "bg-white";
  const textClass = mode === "dark" ? "text-gray-200" : "text-gray-800";
  const borderClass = mode === "dark" ? "border-gray-600" : "border-gray-300";

  return (
    <form
      className={`flex flex-col gap-4 max-w-sm mx-auto border p-6 rounded-md shadow ${bgClass} ${textClass} ${borderClass}`}
      onSubmit={handleSubmit}
    >
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        errorMessage={emailError}
        helperText="Ex. something@gmail.com"
        required
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        errorMessage={passwordError}
        helperText="At least 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special"
        required
      />
      <button
        type="submit"
        disabled={!isValid}
        className="bg-blue-500 text-white py-2 px-4 rounded-md disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  );
};
