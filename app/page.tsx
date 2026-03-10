// app/page.tsx
"use client";

import { useState } from "react";

type VentureType = "mvp" | "product";

type Venture = {
  id: string;
  name: string;
  type: VentureType;
  tagline: string;
  stage: string;
  description: string;
  website?: string;
  investors?: string;
};

const ventures: Venture[] = [
  {
    id: "walnut-health",
    name: "Walnut Health",
    type: "product",
    tagline: "AI-first care navigation for chronic conditions.",
    stage: "Seed",
    description:
      "Walnut Health helps patients navigate complex care journeys using AI copilots that coordinate providers, insurance, and home care. Spectr Labs partnered from discovery to MVP launch, then evolved the product with real-world data.",
    website: "https://walnut.health",
    investors: "Operator angels in health tech and data infra.",
  },
  {
    id: "docknote",
    name: "Docknote",
    type: "mvp",
    tagline: "AI notes that translate expert insight into action.",
    stage: "Concept",
    description:
      "Docknote turns expert conversations into structured briefs, tickets, and docs. Spectr Labs is validating the MVP with design partners in consulting, strategy, and product.",
    website: "https://docknote.ai",
    investors: "Pre‑seed in progress.",
  },
  {
    id: "growth-rhythm",
    name: "Growth Rhythm",
    type: "product",
    tagline: "Design-led growth ops for B2B product teams.",
    stage: "Angel",
    description:
      "Growth Rhythm builds experimentation infrastructure for B2B SaaS – from onboarding flows to pricing tests – so teams can learn faster than their market.",
  },
  {
    id: "studio-zero",
    name: "Studio Zero",
    type: "mvp",
    tagline: "Zero‑to‑one experimentation engine for new markets.",
    stage: "Lab",
    description:
      "Studio Zero is Spectr Labs’ internal lab for testing new categories and GTM motions before turning them into full products.",
  },
];

function TypeToggle({
  value,
  onChange,
}: {
  value: VentureType;
  onChange: (v: VentureType) => void;
}) {
  const items: { label: string; value: VentureType }[] = [
    { label: "MVP", value: "mvp" },
    { label: "Product", value: "product" },
  ];

  return (
    <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/80 p-1 text-xs font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      {items.map((item) => {
        const active = value === item.value;
        return (
          <button
            key={item.value}
            onClick={() => onChange(item.value)}
            className={`relative px-3 py-1 rounded-full transition-all duration-200 ${
              active
                ? "bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/80"
            }`}
            type="button"
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

function VenturePanel({
  venture,
  onClose,
}: {
  venture: Venture | null;
  onClose: () => void;
}) {
  const open = Boolean(venture);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Slide-in panel (also full-width on very small screens) */}
      <aside
        className={`fixed inset-y-2 right-2 left-2 md:left-auto md:inset-y-4 md:right-4 z-50 w-auto md:w-full md:max-w-xl rounded-3xl bg-white text-black shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
          open
            ? "translate-x-0"
            : "translate-x-full md:translate-x-[120%]"
        }`}
      >
        {venture && (
          <div className="flex h-full flex-col overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-zinc-200">
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-500">
                {venture.type === "mvp" ? "MVP" : "Product"}
              </div>
              <button
                onClick={onClose}
                className="h-8 w-8 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 transition"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-4 md:px-6 pb-4 md:pb-6 pt-3 md:pt-4 grid gap-6 md:gap-8 md:grid-cols-[1.1fr_1fr]">
              {/* Image placeholders */}
              <div className="space-y-3 md:space-y-4">
                <div className="aspect-[4/3] rounded-2xl bg-zinc-100" />
                <div className="aspect-[4/3] rounded-2xl bg-zinc-100 hidden md:block" />
              </div>

              {/* Text */}
              <div className="space-y-3 md:space-y-4 text-sm leading-relaxed text-zinc-700">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold">
                    {venture.name}
                  </h2>
                  <p className="mt-1 text-[11px] md:text-xs text-zinc-500">
                    {venture.stage} ·{" "}
                    {venture.type === "mvp" ? "MVP" : "Product"}
                  </p>
                </div>

                <p className="text-sm">{venture.description}</p>

                {venture.investors && (
                  <div className="pt-2 border-t border-zinc-200">
                    <h3 className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Investors
                    </h3>
                    <p className="mt-2 text-sm">{venture.investors}</p>
                  </div>
                )}

                {venture.website && (
                  <div className="pt-2">
                    <a
                      href={venture.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition"
                    >
                      {new URL(venture.website).hostname} ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

export default function Home() {
  const [filter, setFilter] = useState<VentureType>("mvp");
  const [selected, setSelected] = useState<Venture | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const filteredVentures = ventures.filter((v) => v.type === filter);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-5 sm:px-6 pt-6 sm:pt-16 pb-12 sm:pb-20 md:pt-24 md:pb-24 max-w-5xl mx-auto">
        <header className="flex items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-medium tracking-wide">Spectr Labs</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6">
            <a href="#model" className="hover:text-white">
              Model
            </a>
            <a href="#ventures" className="hover:text-white">
              Work
            </a>
            <a href="#team" className="hover:text-white">
              Team
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/80 hover:bg-zinc-900 transition"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open navigation"
          >
            <span className="block h-[1.5px] w-4 bg-zinc-200 mb-1" />
            <span className="block h-[1.5px] w-4 bg-zinc-200 mb-1" />
            <span className="block h-[1.5px] w-4 bg-zinc-200" />
          </button>
        </header>

        {/* Mobile nav overlay */}
        {mobileNavOpen && (
          <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden">
            <div className="absolute inset-x-4 top-4 rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Spectr Labs
                </span>
                <button
                  onClick={() => setMobileNavOpen(false)}
                  className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 transition"
                  aria-label="Close navigation"
                >
                  ✕
                </button>
              </div>
              <nav className="flex flex-col gap-3 text-sm">
                <a
                  href="#model"
                  onClick={() => setMobileNavOpen(false)}
                  className="py-1 text-zinc-200"
                >
                  Model
                </a>
                <a
                  href="#ventures"
                  onClick={() => setMobileNavOpen(false)}
                  className="py-1 text-zinc-200"
                >
                  Work
                </a>
                <a
                  href="#team"
                  onClick={() => setMobileNavOpen(false)}
                  className="py-1 text-zinc-200"
                >
                  Team
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileNavOpen(false)}
                  className="py-1 text-zinc-200"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        )}

        <div className="mt-10 sm:mt-14 space-y-6 sm:space-y-8 max-w-3xl">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-zinc-400">
            Strategic MVP studio
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight">
            Spectr Labs – Strategic MVP builder taking your idea to market with
            AI.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl">
            We partner with founders to design, build, and launch AI‑native
            products from zero to first customers — compressing months of
            wandering into weeks of focused execution.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-white px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-black hover:bg-zinc-200 transition"
            >
              Share a project
            </a>
            <span className="text-[11px] sm:text-xs text-zinc-400">
              Builder studio in Zürich · shipping globally
            </span>
          </div>
        </div>
      </section>

      {/* Model / built-in founding team */}
      <section
        id="model"
        className="px-5 sm:px-6 py-10 sm:py-14 md:py-18 border-y border-zinc-900 bg-zinc-950"
      >
        <div className="max-w-5xl mx-auto grid gap-8 sm:gap-10 md:grid-cols-[1.1fr_1fr] items-start">
          <div className="space-y-4">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-zinc-500">
              Model
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Your built‑in founding team.
            </h2>
            <p className="text-sm sm:text-base text-zinc-300">
              Spectr Labs combines product strategy, UX, engineering, and growth
              into a compact team that behaves like a co‑founder — but slots in
              next to you and your vision instead of replacing it.
            </p>
            <p className="text-sm sm:text-base text-zinc-300">
              We work in tight sprints: pressure‑testing the idea, building a
              sharp MVP, then validating it with real customers and data before
              you commit full‑time capital and headcount.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 rounded-2xl border border-zinc-800 bg-black/40 p-4 sm:p-5">
            <p className="text-[11px] sm:text-xs font-medium text-zinc-400 uppercase tracking-[0.2em]">
              What we bring
            </p>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-zinc-300">
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

      {/* Ventures grid with MVP/Product filter */}
      <section
        id="ventures"
        className="px-5 sm:px-6 py-12 sm:py-16 md:py-20 max-w-5xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-zinc-500">
              Work
            </p>
            <h2 className="mt-2 text-xl sm:text-2xl font-semibold">
              MVPs and products in the lab.
            </h2>
          </div>
          <TypeToggle value={filter} onChange={setFilter} />
        </div>

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-400 max-w-2xl">
          Toggle between MVPs in exploration and shipped products we continue to
          evolve with founders.
        </p>

        <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 md:grid-cols-2">
          {filteredVentures.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelected(v)}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 sm:p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-zinc-500 hover:bg-zinc-900/80 hover:shadow-[0_22px_60px_rgba(0,0,0,0.65)]"
              type="button"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] sm:text-xs text-zinc-400">
                  <span className="uppercase tracking-[0.18em]">
                    {v.type === "mvp" ? "MVP" : "Product"}
                  </span>
                  <span className="rounded-full border border-zinc-700 px-2 py-0.5">
                    {v.stage}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold group-hover:text-white">
                  {v.name}
                </h3>
                <p className="text-sm text-zinc-300 group-hover:text-zinc-100">
                  {v.tagline}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Team / contact */}
      <section
        id="team"
        className="px-5 sm:px-6 py-12 sm:py-16 md:py-20 border-t border-zinc-900 bg-zinc-950"
      >
        <div className="max-w-5xl mx-auto grid gap-8 sm:gap-10 md:grid-cols-[1.1fr_1fr] items-start">
          <div className="space-y-4">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-zinc-500">
              Team
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold">
              Builders, not consultants.
            </h2>
            <p className="text-sm sm:text-base text-zinc-300">
              Spectr Labs is led by operators across product, design, and GTM who
              have shipped in health, fintech, and AI tooling. We plug into your
              world for the intense zero‑to‑one phase, then help you hire the
              permanent team.
            </p>
          </div>

          <div id="contact" className="space-y-4">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-zinc-500">
              Start a conversation
            </p>
            <p className="text-sm text-zinc-300">
              Tell us about the problem, why now, and what “launched” means for
              you in the next 3–6 months.
            </p>
            <a
              href="mailto:hello@spectrlabs.io?subject=New%20project"
              className="inline-flex items-center rounded-full bg-white px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-black hover:bg-zinc-200 transition"
            >
              Email hello@spectrlabs.io
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 sm:px-6 py-5 sm:py-6 text-[11px] sm:text-xs text-zinc-500 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-2 sm:gap-0 sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Spectr Labs.</span>
          <span>Zürich · Remote‑first</span>
        </div>
      </footer>

      {/* Slide-in case study panel */}
      <VenturePanel venture={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
