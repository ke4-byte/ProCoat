import { ShieldCheck, ThumbsUp, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          Looking for a Painter You Can Trust?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Let's discuss your next project. Whether it's a single room, a full
          apartment block, a school, or an office — ProCoat is ready to
          deliver the quality and reliability you deserve.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="flex items-center justify-center gap-2 rounded-xl bg-emerald-50 p-4">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-800">
              Commitment to Quality
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-xl bg-amber-50 p-4">
            <ThumbsUp className="h-5 w-5 text-[#D97706]" />
            <span className="text-sm font-medium text-amber-800">
              Client Satisfaction
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 p-4">
            <BadgeCheck className="h-5 w-5 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">
              No Hidden Costs
            </span>
          </div>
        </div>

        <Button
          size="lg"
          className="mt-8 bg-[#D97706] hover:bg-[#B45309]"
          onClick={() =>
            document
              .getElementById("booking")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Get Your Free Quote
        </Button>
      </div>
    </section>
  );
}