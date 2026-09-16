import { useState } from "react";
import { Calendar, Clock, CheckCircle2, Home, Building2, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    service: "",
    budget: "",
    timeline: "",
    details: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="bg-[#F9F9F9] py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="rounded-2xl bg-white p-12 shadow-lg">
            <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-500" />
            <h2 className="mt-6 font-serif text-3xl font-bold">
              Request Received!
            </h2>
            <p className="mt-4 text-slate-600">
              Thank you, {formData.name}! Our team will contact you at{" "}
              {formData.email} within 24 hours to schedule your free
              on-site estimate.
            </p>
            <Button
              className="mt-8 bg-[#D97706] hover:bg-[#B45309]"
              onClick={() => setSubmitted(false)}
            >
              Request Another Quote
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="bg-[#F9F9F9] py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#D97706]">
            Free Estimate
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Get Your Free Quote
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Fill out the form below and we'll get back to you within 24 hours
            with a detailed estimate.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                required
                placeholder="John Mwangi"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+254 712 345 678"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Property Type</Label>
              <Select
                value={formData.propertyType}
                onValueChange={(value) =>
                  setFormData({ ...formData, propertyType: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">
                    <span className="flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      Residential Home
                    </span>
                  </SelectItem>
                  <SelectItem value="commercial">
                    <span className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Commercial Building
                    </span>
                  </SelectItem>
                  <SelectItem value="institutional">
                    <span className="flex items-center gap-2">
                      <School className="h-4 w-4" />
                      School / Institution
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Service Needed</Label>
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential Painting</SelectItem>
                  <SelectItem value="commercial">Commercial Painting</SelectItem>
                  <SelectItem value="institutional">Institutional Painting</SelectItem>
                  <SelectItem value="surface">Surface & Coatings</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Budget Range (KSh)</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) =>
                  setFormData({ ...formData, budget: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10k-50k">KSh 10,000 - 50,000</SelectItem>
                  <SelectItem value="50k-150k">KSh 50,000 - 150,000</SelectItem>
                  <SelectItem value="150k-500k">KSh 150,000 - 500,000</SelectItem>
                  <SelectItem value="500k+">KSh 500,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Preferred Timeline</Label>
              <Select
                value={formData.timeline}
                onValueChange={(value) =>
                  setFormData({ ...formData, timeline: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="1-2">1-2 weeks</SelectItem>
                  <SelectItem value="3-4">3-4 weeks</SelectItem>
                  <SelectItem value="1-2mo">1-2 months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label>Project Details</Label>
              <Textarea
                placeholder="Describe your project - rooms, square footage, current condition, colors, etc."
                rows={4}
                value={formData.details}
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Preferred Site Visit Date
              </Label>
              <Input
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Preferred Time
              </Label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData({ ...formData, time })}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                      formData.time === time
                        ? "border-[#D97706] bg-amber-50 text-[#D97706]"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-8 w-full bg-[#D97706] hover:bg-[#B45309]"
          >
            Request Free Quote
          </Button>
        </form>
      </div>
    </section>
  );
}