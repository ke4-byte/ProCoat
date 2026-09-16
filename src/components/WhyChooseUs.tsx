import { Clock, Handshake, Star, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Reliability You Can Count On",
    description:
      "We show up on time, work efficiently, and complete projects exactly as promised — no delays, no excuses.",
  },
  {
    icon: Handshake,
    title: "Trustworthy Service",
    description:
      "Clear communication, honest pricing, and careful protection of your property throughout the entire job.",
  },
  {
    icon: Star,
    title: "Professional Standards",
    description:
      "Proper preparation, quality materials, and neat, lasting results — every single time, without exception.",
  },
  {
    icon: HeartHandshake,
    title: "Strong Relationships",
    description:
      "Our business grows through trust. Most of our work comes from referrals and repeat clients who recommend us to family, neighbours, and colleagues.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#D97706]">
            Why Choose Us
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Why Clients Choose ProCoat
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-slate-100 bg-[#F9F9F9] p-6 transition-all hover:border-[#D97706]/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D97706]/10">
                <reason.icon className="h-6 w-6 text-[#D97706]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}