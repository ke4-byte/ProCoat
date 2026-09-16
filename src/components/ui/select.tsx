import { createContext, useContext, useState, type ReactNode } from "react";

type SelectContextValue = { value: string; onValueChange: (value: string) => void; open: boolean; setOpen: (open: boolean) => void };
const SelectContext = createContext<SelectContextValue | null>(null);
function useSelect() {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Select components must be used inside Select");
  return context;
}

export function Select({ value, onValueChange, children }: { value: string; onValueChange: (value: string) => void; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>{children}</SelectContext.Provider>;
}

export function SelectTrigger({ children }: { children: ReactNode }) {
  const { open, setOpen } = useSelect();
  return <button type="button" onClick={() => setOpen(!open)} className="flex h-10 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 text-left text-sm outline-none focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20">{children}</button>;
}

export function SelectValue({ placeholder }: { placeholder: string }) {
  const { value } = useSelect();
  return <span className={value ? "text-slate-900" : "text-slate-400"}>{value || placeholder}</span>;
}

export function SelectContent({ children }: { children: ReactNode }) {
  const { open } = useSelect();
  if (!open) return null;
  return <div className="absolute z-50 mt-1 w-full rounded-lg border border-slate-200 bg-white p-1 shadow-lg">{children}</div>;
}

export function SelectItem({ value, children }: { value: string; children: ReactNode }) {
  const { onValueChange, setOpen } = useSelect();
  return <button type="button" onClick={() => { onValueChange(value); setOpen(false); }} className="flex w-full rounded-md px-3 py-2 text-left text-sm hover:bg-amber-50">{children}</button>;
}