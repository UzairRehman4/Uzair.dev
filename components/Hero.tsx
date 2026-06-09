"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Github, Mail, Sparkles } from "lucide-react";
import { proof, signalStack } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-28 lg:px-8">
      <div className="absolute inset-0 editorial-grid opacity-70" />
      <div className="absolute left-[-12%] top-[-20%] h-[620px] w-[620px] rounded-full bg-cyan/10 blur-[130px]" />
      <div className="absolute bottom-[-18%] right-[-10%] h-[680px] w-[680px] rounded-full bg-grape/20 blur-[150px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-[1540px] items-end gap-10 lg:grid-cols-[1.08fr_.92fr]">
        <div className="pb-12 pt-10 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex flex-wrap items-center gap-3"
          >
            <span className="rounded-full border border-white/10 bg-white/[.045] px-4 py-2 text-xs font-semibold uppercase tracking-[.24em] text-white/62 backdrop-blur-xl">
              Independent Web Developer
            </span>
            <span className="rounded-full border border-acid/30 bg-acid/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.24em] text-acid">
              Available for select builds
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08 }}
            className="max-w-6xl text-[clamp(4.4rem,12vw,15rem)] font-black uppercase leading-[.76] tracking-[-.105em]"
          >
            Digital
            <br />
            <span className="ml-[.08em] text-outline">Builder</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="mt-8 grid max-w-5xl gap-6 lg:grid-cols-[.72fr_1fr]"
          >
            <p className="text-sm uppercase leading-6 tracking-[.26em] text-white/40">
              Pakistan → Worldwide<br />Websites / Commerce / Automation
            </p>
            <p className="text-balance text-xl leading-9 text-white/72 md:text-2xl">
              I’m Uzair Rehman — building premium web experiences, conversion-focused stores, automation systems, and product interfaces with a strong visual identity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-ink transition hover:bg-acid">
              Explore Work
              <ArrowDownRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[.055] px-6 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
              <Mail size={18} /> Start a Project
            </a>
            <a href="https://github.com/UzairRehman4" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[.035] px-6 py-4 font-semibold text-white/70 backdrop-blur-xl transition hover:text-white">
              <Github size={18} /> GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative pb-12 lg:min-h-[680px]"
        >
          <div className="relative ml-auto max-w-[620px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#08090d]/85 p-4 shadow-card backdrop-blur-2xl">
            <div className="rounded-[1.7rem] border border-white/10 bg-white/[.035] p-5">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[.28em] text-white/36">Creative system</p>
                  <h2 className="mt-2 text-3xl font-black tracking-[-.06em]">Uzair.dev OS</h2>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-acid text-ink">
                  <Sparkles size={20} />
                </div>
              </div>

              <div className="space-y-3">
                {signalStack.map((item, i) => (
                  <div key={item.title} className="group grid grid-cols-[58px_1fr_auto] items-center gap-4 rounded-2xl border border-white/10 bg-ink/70 p-4 transition hover:border-acid/40 hover:bg-white/[.055]">
                    <span className="font-mono text-xs text-white/34">0{i + 1}</span>
                    <div>
                      <h3 className="font-semibold tracking-[-.02em] text-white/86">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/42">{item.text}</p>
                    </div>
                    <span className="h-2.5 w-2.5 rounded-full bg-acid opacity-70 shadow-[0_0_22px_#c6ff4f]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -left-4 bottom-20 hidden w-64 rounded-[1.6rem] border border-white/10 bg-white/[.055] p-5 backdrop-blur-2xl lg:block">
            <p className="text-xs uppercase tracking-[.26em] text-white/38">Focus</p>
            <p className="mt-3 text-2xl font-black uppercase leading-none tracking-[-.05em]">Websites that feel expensive and convert.</p>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1540px] grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-4">
        {proof.map((item) => (
          <div key={item.label} className="bg-ink/80 p-5 backdrop-blur-xl md:p-7">
            <div className="text-4xl font-black tracking-[-.05em] text-white">{item.value}</div>
            <div className="mt-2 text-sm text-white/48">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
