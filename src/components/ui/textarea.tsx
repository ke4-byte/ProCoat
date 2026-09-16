import type { TextareaHTMLAttributes } from "react";

export function Textarea({ className = "", ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`flex min-h-20 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none placeholder:text-slate-400 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 ${className}`} {...props} />;
}