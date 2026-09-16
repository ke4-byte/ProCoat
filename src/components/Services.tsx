import { Home, Building2, School, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Residential Painting",
    description:
      "Houses, apartments, and compounds — interior and exterior finishes that last.",
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    description:
      "Offices, shops, and business premises painted to impress clients and staff alike.",
  },
  {
    icon: School,
    title: "Institutional Painting",
    description:
      "Schools, colleges, and public buildings refreshed with durable, vibrant finishes.",
  },
  {
    icon: Layers,
    title: "Surface & Coatings",
    description:
      "Full surface prep, priming, colour consultation, and protective coatings suited to Kenyan conditions.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#F9F9F9] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#D97706]">
            Our Services
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            What We Offer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We handle projects of all sizes with the same attention to detail
            and professionalism. From a single room refresh to a full building
            exterior, no job is too big or too small.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                <service.icon className="h-6 w-6 text-[#D97706]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <Button
                variant="ghost"
                className="mt-4 w-full text-[#D97706] hover:bg-amber-50"
                onClick={() =>
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get a Quote
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}