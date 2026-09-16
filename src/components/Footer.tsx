import { useState } from "react";
import { Mail, MapPin, Phone, Share2, MessageCircle, Globe, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl font-bold">
              ProCoat<span className="text-[#D97706]">.</span>
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Professional Contract Painting
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Reliable. Professional. Trusted. Contract painting for homes,
              apartments, schools, and offices across Nakuru and surrounding
              areas.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@procoat.co.ke
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +254 712 345 678
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Nakuru, Kenya
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <p className="mt-2 text-sm text-slate-400">
              Get seasonal painting tips, color trends, and exclusive offers.
            </p>
            {subscribed ? (
              <p className="mt-4 rounded-lg bg-emerald-500/10 p-3 text-sm text-emerald-400">
                Thanks for subscribing! Check your inbox for our latest tips.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <Input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 text-white placeholder:text-slate-500"
                />
                <Button
                  type="submit"
                  className="shrink-0 bg-[#D97706] hover:bg-[#B45309]"
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>

          <div>
            <h4 className="font-semibold">Connect</h4>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#D97706]"
                aria-label="Facebook"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#D97706]"
                aria-label="Instagram"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#D97706]"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#D97706]"
                aria-label="Portfolio"
              >
                <Briefcase className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row">
          <p>© 2025 ProCoat Painting Kenya. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Warranty Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}