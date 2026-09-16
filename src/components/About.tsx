import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800"
                alt="Professional painter at work"
                className="h-[500px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#D97706] p-6 text-white shadow-lg sm:block">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm">Client Satisfaction</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#D97706]">
              About Us
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              At ProCoat, we specialise in high-quality contract painting for
              residential, commercial, educational, and institutional
              properties across Nakuru and surrounding areas. We deliver
              clean, durable finishes that protect and enhance your spaces —
              whether it's a family home, an apartment block, a school, or an
              office.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our work is built on precision, reliability, and genuine care
              for every client. We take pride in every brushstroke and every
              completed project.
            </p>

            <div className="mt-6 rounded-xl bg-amber-50 p-4">
              <p className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D97706]" />
                <span>
                  Every project is treated with the same dedication,
                  regardless of size.
                </span>
              </p>
            </div>

            <Button
              className="mt-8 bg-[#D97706] hover:bg-[#B45309]"
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Work With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}