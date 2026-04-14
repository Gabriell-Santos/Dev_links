import type React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      className="bg-white h-15 rounded-2xl text-xl px-2 font-bold  my-4"
      {...props}
    />
  );
}
