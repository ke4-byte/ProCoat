import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "default" | "lg";
  variant?: "default" | "outline" | "ghost";
};

export function Button({ className = "", size = "default", variant = "default", ...props }: ButtonProps) {
  const sizeClass = size === "lg" ? "h-11 px-8" : "h-10 px-4 py-2";
  const variantClass = variant === "outline"
    ? "border border-current bg-transparent"
    : variant === "ghost"
      ? "bg-transparent hover:bg-slate-100"
      : "bg-[#D97706] text-white hover:bg-[#B45309]";
  return <button className={`inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${sizeClass} ${variantClass} ${className}`} {...props} />;
}