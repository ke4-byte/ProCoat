import { X, ArrowRight } from "lucide-react";
import { Artwork } from "@/lib/data";
import { Button } from "@/components/ui/button";

interface LightboxProps {
  item: Artwork;
  onClose: () => void;
}

export function Lightbox({ item, onClose }: LightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1A1A1A] shadow-md transition-colors hover:bg-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col p-8">
            <span className="text-sm font-medium text-[#D97706]">
              {item.category}
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold">{item.title}</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {item.description}
            </p>

            <div className="mt-6 space-y-3 border-t border-slate-200 pt-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Medium</span>
                <span className="font-medium">{item.medium}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Dimensions</span>
                <span className="font-medium">{item.dimensions}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Year</span>
                <span className="font-medium">{item.year}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Status</span>
                <span className="font-medium">{item.status}</span>
              </div>
            </div>

            <Button
              className="mt-8 w-full bg-[#D97706] hover:bg-[#B45309]"
              onClick={() => {
                onClose();
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Inquire About This Piece
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}