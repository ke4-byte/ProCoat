import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { Community } from "@/components/Community";
import { CTA } from "@/components/CTA";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Community />
        <CTA />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}