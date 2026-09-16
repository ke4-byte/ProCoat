import { useState } from "react";
import { Menu, X, Paintbrush, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D97706]">
            <Paintbrush className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-[#1A1A1A]">
              ProCoat
            </span>
            <p className="text-xs text-slate-500">Professional Contract Painting</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#D97706]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="flex items-center gap-1 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-[#D97706]" />
            Nakuru, Kenya
          </span>
          <Button className="bg-[#D97706] hover:bg-[#B45309]">
            Get a Quote
          </Button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-[#D97706]"
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full bg-[#D97706] hover:bg-[#B45309]">
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}