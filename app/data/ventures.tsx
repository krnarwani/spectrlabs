export type VentureType = "project" | "venture";

export type Venture = {
  id: string;
  name: string;
  type: VentureType;
  tagline: string;
  stage: string;
  description: string;
  website?: string;
  investors?: string;
};

export const ventures: Venture[] = [
  {
    id: "walnut-health",
    name: "Walnut Health",
    type: "venture",
    tagline: "AI-first care navigation for chronic conditions.",
    stage: "Seed",
    description:
      "Walnut Health helps patients navigate complex care journeys using AI copilots that coordinate providers, insurance, and home care. Spectr Labs partnered from discovery to MVP launch, owning product, UX, and GTM experiments.",
    website: "https://walnut.health",
    investors: "Operator angels in health tech and data infra.",
  },
  {
    id: "docknote",
    name: "Docknote",
    type: "project",
    tagline: "AI notes that translate expert insight into action.",
    stage: "Concept",
    description:
      "Docknote turns expert conversations into structured briefs, tickets, and docs. Spectr Labs is validating the concept with design partners in consulting, strategy, and product.",
    website: "https://docknote.ai",
    investors: "Pre‑seed in progress.",
  },
  // add more…
];
