"use client";

import type { Venture } from "../data/ventures";

type Props = {
  venture: Venture | null;
  onClose: () => void;
};

export function VenturePanel({ venture, onClose }: Props) {
  const open = Boolean(venture);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <aside
        className={`fixed inset-y-4 right-4 z-50 w-full max-w-xl rounded-3xl bg-white text-black shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {venture && (
          <div className="flex h-full flex-col overflow-hidden">
            {/* Close button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {venture.type === "project" ? "Project" : "Venture"}
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
            <div className="flex-1 overflow-y-auto px-6 pb-6 pt-4 grid gap-8 md:grid-cols-[1.1fr_1fr]">
              <div className="space-y-4">
                {/* You can swap this placeholder for real images/video later */}
                <div className="aspect-[4/3] rounded-2xl bg-zinc-100" />
                <div className="aspect-[4/3] rounded-2xl bg-zinc-100 hidden md:block" />
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-zinc-700">
                <div>
                  <h2 className="text-xl font-semibold">{venture.name}</h2>
                  <p className="mt-1 text-xs text-zinc-500">{venture.stage}</p>
                </div>

                <p className="text-sm text-zinc-700">{venture.description}</p>

                {venture.investors && (
                  <div className="pt-2 border-t border-zinc-200">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Investors
                    </h3>
                    <p className="mt-2 text-sm text-zinc-700">
                      {venture.investors}
                    </p>
                  </div>
                )}

                {venture.website && (
                  <div className="pt-2">
                    <a
                      href={venture.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600"
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
