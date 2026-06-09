"use client";
import { motion } from "framer-motion";
import { ArrowDownRight, Github, Mail, MousePointer2 } from "lucide-react";
import { orbitItems, proof } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-28 lg:px-8">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[130px]" />
      <div className="absolute right-[-140px] top-32 h-[420px] w-[420px] rounded-full bg-grape/20 blur-[120px]" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="pb-10 pt-12 lg:pt-28">
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-acid shadow-[0_0_18px_#c6ff4f]" />
            Available for websites, stores & automation MVPs
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .08 }} className="text-balance text-[clamp(3.4rem,9vw,9.6rem)] font-black uppercase leading-[.82] tracking-[-.08em]">
            Build<br />Digital<br /><span className="text-outline">Systems</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .18 }} className="mt-7 max-w-2xl text-balance text-lg leading-8 text-white/68 md:text-xl">
            I’m Uzair Rehman — a web developer building premium websites, WordPress and Shopify experiences, Next.js frontends, landing pages, AI automations, and future Solana products.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .28 }} className="mt-9 flex flex-wrap gap-4">
            <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-ink transition hover:bg-acid">View Work <ArrowDownRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} /></a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"><Mail size={18} /> Let’s Work</a>
            <a href="https://github.com/rehmanuzair43" className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white/75 backdrop-blur-xl transition hover:text-white"><Github size={18} /> GitHub</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .96, y: 28 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: .18 }} className="relative min-h-[560px] pb-10">
          <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[.025] shadow-card backdrop-blur-xl" />
          <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15 animate-spinSlow" />
          {orbitItems.map((item, index) => {
            const angle = (index / orbitItems.length) * Math.PI * 2;
            const x = Math.cos(angle) * 180;
            const y = Math.sin(angle) * 180;
            return (
              <div key={item} style={{ transform: `translate(${x}px, ${y}px)` }} className="absolute left-1/2 top-1/2 -ml-16 -mt-5 grid h-10 w-32 place-items-center rounded-full border border-white/10 bg-ink/80 text-xs font-semibold uppercase tracking-[.18em] text-white/72 backdrop-blur-xl">
                {item}
              </div>
            );
          })}
          <div className="absolute left-1/2 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/10 bg-panel/95 p-4 shadow-card backdrop-blur-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-ember" /><span className="h-3 w-3 rounded-full bg-acid" /><span className="h-3 w-3 rounded-full bg-cyan" /></div>
              <MousePointer2 size={16} className="text-white/45" />
            </div>
            <div className="rounded-2xl bg-white/[.035] p-4">
              <p className="text-xs uppercase tracking-[.25em] text-white/35">Current Stack</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-.04em]">Websites + AI + Web3</h2>
              <div className="mt-5 space-y-3">
                {["Next.js interface", "WordPress engine", "Shopify conversion", "AI workflow", "Solana roadmap"].map((row, i) => <div key={row} className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[.035] px-3 py-3 text-sm text-white/70"><span>{row}</span><span className="text-acid">0{i + 1}</span></div>)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
        {proof.map((item) => <div key={item.label} className="bg-ink/80 p-5 backdrop-blur-xl"><div className="text-3xl font-black text-white">{item.value}</div><div className="mt-1 text-sm text-white/50">{item.label}</div></div>)}
      </div>
    </section>
  );
}
