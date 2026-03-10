// app/page.tsx
"use client";

import { useState } from "react";
import { ventures, type Venture, type VentureType } from "./data/ventures";
import { VenturePanel } from "./components/VenturePanel";

export default function Home() {
  const [filter, setFilter] = useState<VentureType>("project");
  const [selected, setSelected] = useState<Venture | null>(null);

  const filteredVentures = ventures.filter((v) => v.type === filter);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 pt-16 pb-20 md:pt-24 md:pb-24 max-w-5xl mx-auto">
        <header className="flex items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Spect Labs</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#model" className="hover:text-white">
              Model
            </a>
            <a href="#ventures" className="hover:text-white">
              Projects
            </a>
            <a href="#team" className="hover:text-white">
              Team
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        <div className="mt-14 space-y-8 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
            Strategic MVP studio
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Spect Labs – Strategic MVP builder taking your idea to market with
            AI.
          </h1>
          <p className="text-base md:text-lg text-zinc-300 max-w-2xl">
            We partner with founders to design, build, and launch AI‑native
            products from zero to first customers — compressing months of
            wandering into weeks of focused execution.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-zinc-200 transition"
            >
              Share a project
            </a>
            <span className="text-xs text-zinc-400">
              Builder studio in Zürich · shipping globally
            </span>
          </div>
        </div>
      </section>

      {/* Model / built-in founding team */}
      <section
        id="model"
        className="px-6 py-14 md:py-18 border-y border-zinc-900 bg-zinc-950"
      >
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[1.1fr_1fr] items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Model
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Your built‑in founding team.
            </h2>
            <p className="text-sm md:text-base text-zinc-300">
              Spect Labs combines product strategy, UX, engineering, and growth
              into a compact team that behaves like a co‑founder — but slots in
              next to you and your vision instead of replacing it.
            </p>
            <p className="text-sm md:text-base text-zinc-300">
              We work in tight sprints: pressure‑testing the idea, building a
              sharp MVP, then validating it with real customers and data before
              you commit full‑time capital and headcount.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-zinc-800 bg-black/40 p-5">
            <p className="text-xs font-medium text-zinc-400 uppercase tracking-[0.2em]">
              What we bring
            </p>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                • Product and UX to shape a lovable first version, not just a
                demo.
              </li>
              <li>
                • AI architecture to choose the right models, prompts, and data
                flows.
              </li>
              <li>
                • Engineering to ship fast, stable releases to real customers.
              </li>
              <li>
                • Go‑to‑market experiments to find signal before you scale.
              </li>
            </ul>
          </div>
        </div>
      </section>

        {/* Ventures grid */}
  <section id="ventures" className="px-6 py-16 md:py-20 max-w-5xl mx-auto">
    {/* header + copy unchanged */}

    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {filteredVentures.map((v) => (
        <button
          key={v.id}
          onClick={() => setSelected(v)}
          className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 text-left hover:border-zinc-500 hover:bg-zinc-900 transition"
          type="button"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="uppercase tracking-[0.18em]">
                {v.type === "project" ? "Project" : "Venture"}
              </span>
              <span className="rounded-full border border-zinc-700 px-2 py-0.5">
                {v.stage}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{v.name}</h3>
            <p className="text-sm text-zinc-300">{v.tagline}</p>
          </div>
        </button>
      ))}
    </div>
  </section>

      {/* Team / contact */}
      <section
        id="team"
        className="px-6 py-16 md:py-20 border-t border-zinc-900 bg-zinc-950"
      >
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[1.1fr_1fr] items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Team
            </p>
            <h2 className="text-2xl font-semibold">
              Builders, not consultants.
            </h2>
            <p className="text-sm md:text-base text-zinc-300">
              Spect Labs is led by operators across product, design, and GTM
              who have shipped in health, fintech, and AI tooling. We plug into
              your world for the intense zero‑to‑one phase, then help you hire
              the permanent team.
            </p>
          </div>

          <div id="contact" className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Start a conversation
            </p>
            <p className="text-sm text-zinc-300">
              Tell us about the problem, why now, and what “launched” means for
              you in the next 3–6 months.
            </p>
            <a
              href="mailto:hello@spectrlabs.io?subject=New%20project"
              className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-zinc-200 transition"
            >
              Email hello@spectrlabs.io
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-6 text-xs text-zinc-500 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span>© {new Date().getFullYear()} Spect Labs.</span>
          <span>Zürich · Remote‑first</span>
        </div>
      </footer>
      <VenturePanel venture={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
