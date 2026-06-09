import { About, Contact, Footer, Marquee, Process, Services, Work } from "@/components/Sections";
import { CursorGlow } from "@/components/CursorGlow";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <CursorGlow />
      <Header />
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
