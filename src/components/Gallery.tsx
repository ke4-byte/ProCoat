import { useState } from "react";
import { X, MapPin, Ruler, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Westlands Apartment Transformation",
    category: "residential",
    location: "Westlands, Nairobi",
    size: "1,200 sq ft",
    duration: "3 days",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    description:
      "Complete interior repaint with premium matte finish. Two-tone accent wall and ceiling refresh for a modern Nairobi apartment.",
  },
  {
    id: 2,
    title: "Corporate Office Renovation",
    category: "commercial",
    location: "Upper Hill, Nairobi",
    size: "8,500 sq ft",
    duration: "2 weeks",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    description:
      "Full office repaint with low-VOC paints for a corporate client in Upper Hill. Open plan areas, conference rooms, and executive suites.",
  },
  {
    id: 3,
    title: "Karen Villa Exterior",
    category: "exterior",
    location: "Karen, Nairobi",
    size: "3,200 sq ft",
    duration: "1 week",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    description:
      "Complete exterior repaint with weather-resistant paint for a luxury villa in Karen. Trim, shutters, and front porch refresh.",
  },
  {
    id: 4,
    title: "Restaurant Interior Refresh",
    category: "commercial",
    location: "Kilimani, Nairobi",
    size: "2,400 sq ft",
    duration: "5 days",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    description:
      "Bold accent walls and durable satin finish for a high-traffic restaurant in Kilimani.",
  },
  {
    id: 5,
    title: "Modern Kitchen Cabinet Refinish",
    category: "residential",
    location: "Lavington, Nairobi",
    size: "40 cabinets",
    duration: "4 days",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800",
    description:
      "Cabinet refinishing with durable enamel paint for a home in Lavington. New hardware installation included.",
  },
  {
    id: 6,
    title: "Retail Store Makeover",
    category: "commercial",
    location: "Two Rivers Mall",
    size: "5,000 sq ft",
    duration: "1 week",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    description:
      "Complete retail space repaint with brand colors and feature walls at Two Rivers Mall.",
  },
];

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Exterior", value: "exterior" },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#D97706]">
            Our Work
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Recent Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Browse our portfolio of completed residential and commercial
            painting projects across Kenya.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? "bg-[#D97706] text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#1A1A1A] opacity-0 transition-opacity group-hover:opacity-100">
                  View Details
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{project.title}</h3>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Ruler className="h-3.5 w-3.5" />
                    {project.size}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {project.duration}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-96 w-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-bold">
                {selectedProject.title}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="mt-1 font-medium">{selectedProject.location}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Size</p>
                  <p className="mt-1 font-medium">{selectedProject.size}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Duration</p>
                  <p className="mt-1 font-medium">{selectedProject.duration}</p>
                </div>
              </div>
              <p className="mt-6 leading-relaxed text-slate-600">
                {selectedProject.description}
              </p>
              <Button
                className="mt-6 w-full bg-[#D97706] hover:bg-[#B45309] sm:w-auto"
                onClick={() => {
                  setSelectedProject(null);
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get a Similar Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}