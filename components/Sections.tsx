"use client";

import Image from "next/image";
import { ArrowUpRight, Check, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { process, projects, services, skills, social } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Marquee() {
  const row = [...skills, ...skills];
  return (
    <section className="overflow-hidden border-y border-white/10 bg-white/[.015] py-5">
      <div className="flex w-max animate-marquee gap-4">
        {row.map((skill, i) => (
          <span key={`${skill}-${i}`} className="rounded-full border border-white/10 bg-white/[.035] px-5 py-3 text-sm font-semibold uppercase tracking-[.18em] text-white/55">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="px-5 py-32 lg:px-8">
      <div className="mx-auto max-w-[1540px]">
        <Reveal>
          <div className="mb-16 grid gap-8 lg:grid-cols-[.85fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[.4em] text-acid">Selected Work</p>
              <h2 className="max-w-5xl text-balance text-6xl font-black uppercase leading-[.82] tracking-[-.075em] md:text-8xl lg:text-9xl">
                Proof over promises.
              </h2>
            </div>
            <p className="max-w-2xl text-xl leading-9 text-white/58">
              A curated system of client work, product thinking, automation concepts, and Web3 direction — presented like case studies, not thumbnails.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-12">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.045}>
              <article className={`project-card group min-h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.032] p-3 shadow-card backdrop-blur-xl ${project.size === "large" ? "lg:col-span-7" : "lg:col-span-5"}`}>
                <div className="relative aspect-[1.35] overflow-hidden rounded-[1.45rem] bg-white/[.025]">
                  <Image src={project.image} alt={`${project.title} visual`} fill className="project-img object-cover transition duration-700 ease-out" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink/70 px-4 py-2 text-xs uppercase tracking-[.22em] text-white/62 backdrop-blur-xl">
                    {project.metric}
                  </div>
                </div>
                <div className="p-5 md:p-7">
                  <div className="mb-5 flex items-center justify-between text-sm text-white/42">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="max-w-xl text-4xl font-black uppercase leading-[.9] tracking-[-.06em] md:text-6xl">{project.title}</h3>
                    <ArrowUpRight className="project-arrow mt-2 shrink-0 text-acid transition duration-300" />
                  </div>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/58">{project.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-xs text-white/55">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="relative px-5 py-32 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-grape/10 to-transparent" />
      <div className="relative mx-auto max-w-[1540px]">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[.4em] text-cyan">Services</p>
              <h2 className="max-w-5xl text-balance text-6xl font-black uppercase leading-[.82] tracking-[-.075em] md:text-8xl">
                Things I can ship.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-white/55">
              From quick website fixes to full premium builds, every service is shaped around clarity, speed, conversion, and launch-readiness.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.035}>
                <div className="group h-full rounded-[1.6rem] border border-white/10 bg-white/[.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[.06]">
                  <div className="mb-12 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink transition group-hover:bg-acid">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs text-white/28">0{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-[-.04em]">{service.title}</h3>
                  <p className="mt-4 leading-7 text-white/55">{service.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="px-5 py-32 lg:px-8">
      <div className="mx-auto max-w-[1540px]">
        <Reveal>
          <div className="mb-16 grid gap-8 lg:grid-cols-[.85fr_1fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[.4em] text-ember">Process</p>
              <h2 className="text-balance text-6xl font-black uppercase leading-[.82] tracking-[-.075em] md:text-8xl">
                Built with direction.
              </h2>
            </div>
            <p className="max-w-2xl text-xl leading-9 text-white/58">
              The difference between a normal portfolio and a serious digital product is structure. I design the system before decorating the screen.
            </p>
          </div>
        </Reveal>

        <div className="rounded-[2rem] border border-white/10 bg-white/[.025]">
          {process.map(([num, title, text]) => (
            <Reveal key={title}>
              <div className="grid gap-6 border-b border-white/10 p-6 last:border-b-0 md:grid-cols-[120px_1fr_1.4fr] md:p-8 lg:p-10">
                <span className="font-mono text-sm text-acid">{num}</span>
                <h3 className="text-4xl font-black uppercase leading-none tracking-[-.055em]">{title}</h3>
                <p className="leading-8 text-white/58">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="px-5 py-32 lg:px-8">
      <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div className="sticky top-28">
            <p className="mb-4 text-sm uppercase tracking-[.4em] text-acid">About</p>
            <h2 className="text-balance text-6xl font-black uppercase leading-[.82] tracking-[-.075em] md:text-8xl">
              A builder, not a template editor.
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-white/[.035] p-7 md:p-10 lg:p-12">
            <p className="text-3xl font-medium leading-[1.2] tracking-[-.04em] text-white/86 md:text-5xl">
              I build websites and systems that look premium, explain the offer clearly, and help people take action.
            </p>
            <p className="mt-8 text-lg leading-9 text-white/58">
              I’m Uzair Rehman, a developer from Pakistan. My work started with WordPress and Shopify, then expanded into React, Next.js, automation, AI tools, and product thinking.
            </p>
            <p className="mt-6 text-lg leading-9 text-white/58">
              I care about websites that do more than look good — structure, speed, conversion, UX, deployment, contact flow, hosting, DNS, and real business goals all matter.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {["Design + development mindset", "Business-first execution", "WordPress, Shopify, Next.js", "Automation and Solana direction"].map((x) => (
                <div key={x} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.03] p-4 text-white/68">
                  <Check size={18} className="text-acid" />
                  {x}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-5 py-32 lg:px-8">
      <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <div>
            <p className="mb-4 text-sm uppercase tracking-[.4em] text-cyan">Contact</p>
            <h2 className="text-balance text-6xl font-black uppercase leading-[.82] tracking-[-.075em] md:text-8xl">
              Let’s build something sharp.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/58">
              Tell me what you want to build. I’ll help turn it into a clean, modern, deployable digital experience.
            </p>
            <div className="mt-8 grid gap-3">
              {social.map(([label, href]) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[.035] px-5 py-4 text-white/68 transition hover:bg-white/[.06] hover:text-white">
                  <span>{label}</span>
                  <ArrowUpRight size={18} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <form onSubmit={submit} className="rounded-[2rem] border border-white/10 bg-white/[.035] p-5 shadow-card backdrop-blur-xl md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Your name" className="rounded-2xl border border-white/10 bg-ink/60 px-5 py-4 outline-none transition placeholder:text-white/30 focus:border-acid" />
              <input required type="email" name="email" placeholder="Email address" className="rounded-2xl border border-white/10 bg-ink/60 px-5 py-4 outline-none transition placeholder:text-white/30 focus:border-acid" />
              <input name="company" placeholder="Company / project" className="rounded-2xl border border-white/10 bg-ink/60 px-5 py-4 outline-none transition placeholder:text-white/30 focus:border-acid" />
              <select name="budget" className="rounded-2xl border border-white/10 bg-ink/60 px-5 py-4 text-white/50 outline-none transition focus:border-acid">
                <option>Budget range</option>
                <option>$300 - $700</option>
                <option>$700 - $1,500</option>
                <option>$1,500 - $3,000</option>
                <option>$3,000+</option>
              </select>
            </div>
            <textarea required name="message" placeholder="Tell me about the project..." rows={7} className="mt-4 w-full rounded-2xl border border-white/10 bg-ink/60 px-5 py-4 outline-none transition placeholder:text-white/30 focus:border-acid" />
            <button disabled={status === "loading"} className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-bold text-ink transition hover:bg-acid disabled:opacity-60">
              <Send size={18} />
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <p className="mt-4 text-sm text-acid">Message captured. Connect Resend env variables on Vercel to receive emails.</p>}
            {status === "error" && <p className="mt-4 text-sm text-ember">Something went wrong. Email me directly at rehmanuzair43@gmail.com.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-[1540px] flex-col justify-between gap-5 text-sm text-white/45 md:flex-row">
        <p>Uzair Rehman — Web Developer, Automation Builder & Future Solana Developer.</p>
        <p>Built with Next.js, Tailwind CSS, and clean digital energy.</p>
      </div>
    </footer>
  );
}
