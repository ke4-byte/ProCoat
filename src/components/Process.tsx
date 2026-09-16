import { MessageSquare, FileText, Paintbrush, PaintRoller, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Listen & Understand",
    description:
      "We carefully listen to your needs, vision, and expectations before any work begins.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Transparent Quotation",
    description:
      "We provide clear, honest pricing with no hidden costs or surprises.",
  },
  {
    icon: Paintbrush,
    step: "03",
    title: "Thorough Preparation",
    description:
      "Surfaces are cleaned, repaired, and primed to ensure a flawless, long-lasting finish.",
  },
  {
    icon: PaintRoller,
    step: "04",
    title: "Professional Application",
    description:
      "Quality paints applied with expert technique for a clean, durable result.",
  },
  {
    icon: Sparkles,
    step: "05",
    title: "Clean Handover",
    description:
      "We leave your space spotless and ready to enjoy — no mess, no stress.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#1A1A1A] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#D97706]">
            Our Process
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            We treat every project as a long-term relationship, not just a
            one-time job. Here is our proven approach from start to finish.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl bg-white/5 p-6 backdrop-blur transition-all hover:bg-white/10"
            >
              <span className="text-4xl font-bold text-[#D97706]/30">
                {step.step}
              </span>
              <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#D97706]/20">
                <step.icon className="h-5 w-5 text-[#D97706]" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}