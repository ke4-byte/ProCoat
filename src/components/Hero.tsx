import { ArrowRight, Home, Building2, School } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920"
          alt="Professional painter working"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/80 to-[#1A1A1A]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,119,6,0.2),transparent_50%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Nakuru, Kenya — Reliable. Professional. Trusted.
          </div>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to{" "}
            <span className="text-[#D97706]">ProCoat</span>
          </h1>

          <p className="mt-4 text-xl font-medium text-white/90">
            Reliable. Professional. Trusted.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Contract painting for homes, apartments, schools, and offices
            across Nakuru and surrounding areas. We bring precision, quality
            materials, and genuine care to every project — large or small.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-[#D97706] hover:bg-[#B45309]"
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Our Services
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Home className="h-5 w-5 text-[#D97706]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Residential</p>
                <p className="text-xs text-slate-400">Homes & Apartments</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Building2 className="h-5 w-5 text-[#D97706]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Commercial</p>
                <p className="text-xs text-slate-400">Offices & Shops</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <School className="h-5 w-5 text-[#D97706]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Institutional</p>
                <p className="text-xs text-slate-400">Schools & Colleges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}