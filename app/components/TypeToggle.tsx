"use client";

import { type VentureType } from "../data/ventures";
import { useState } from "react";

type Props = {
  value: VentureType;
  onChange: (value: VentureType) => void;
};

export function TypeToggle({ value, onChange }: Props) {
  return (
    <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 p-1 text-xs font-medium">
      {(["project", "venture"] as VentureType[]).map((type) => {
        const active = value === type;
        return (
          <button
            key={type}
            onClick={() => onChange(type)}
            className={`px-3 py-1 rounded-full transition ${
              active
                ? "bg-white text-black"
                : "text-zinc-400 hover:text-white"
            }`}
            type="button"
          >
            {type === "project" ? "Project" : "Venture"}
          </button>
        );
      })}
    </div>
  );
}
