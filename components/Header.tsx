"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-ink/70 border-b border-white/10 backdrop-blur-2xl" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Uzair Rehman home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-sm font-bold text-acid shadow-glow">UR</span>
          <span className="text-sm font-medium uppercase tracking-[.28em] text-white/80 group-hover:text-white">Uzair.dev</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/62 transition hover:text-white">{item}</a>)}
        </nav>
        <a href="#contact" className="hidden rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-acid md:block">Start a Project</a>
        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 md:hidden" aria-label="Toggle menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-5 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => <a onClick={() => setOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="text-lg text-white/80">{item}</a>)}
            <a onClick={() => setOpen(false)} href="#contact" className="rounded-full bg-acid px-5 py-3 text-center font-semibold text-ink">Start a Project</a>
          </div>
        </div>
      )}
    </header>
  );
}
