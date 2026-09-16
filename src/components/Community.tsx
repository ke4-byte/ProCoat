import { MapPin, Users, HeartHandshake } from "lucide-react";

export function Community() {
  return (
    <section className="bg-[#F9F9F9] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#D97706]">
              Our Community
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Serving Nakuru with Pride
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              Based in Nakuru, ProCoat understands the local climate, building
              styles, and client expectations unique to this region. The
              highland weather, humidity levels, and common building materials
              all influence how paint performs — and we know exactly how to
              work with them.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              From residential neighbourhoods to offices and schools across
              Nakuru and surrounding areas, we bring a consistent standard of
              workmanship that clients appreciate and recommend to others.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50">
                  <MapPin className="h-5 w-5 text-[#D97706]" />
                </div>
                <div>
                  <p className="font-semibold">Local Knowledge</p>
                  <p className="text-sm text-slate-500">
                    Climate-suited techniques
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50">
                  <Users className="h-5 w-5 text-[#D97706]" />
                </div>
                <div>
                  <p className="font-semibold">Community Trust</p>
                  <p className="text-sm text-slate-500">
                    Referral-driven growth
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800"
                alt="Nakuru city view"
                className="h-[500px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-6 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
                  <HeartHandshake className="h-5 w-5 text-[#D97706]" />
                </div>
                <div>
                  <p className="font-semibold">Proudly Local</p>
                  <p className="text-sm text-slate-500">Nakuru, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}