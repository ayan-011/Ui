"use client"
import { useRef, useState, type MouseEvent } from "react";

/**
 * TypeSpecimenSection
 * ---------------------------------------------------------------------------
 * A 4-row typography specimen (headline / subhead / body / caption), each row
 * showing its own type-scale meta (size range, leading, tracking).
 *
 * Hovering a row reveals a small animated visual that follows the cursor,
 * clipped to that row only — every row has its own distinct visual + motion.
 *
 * Requires only Tailwind (no extra deps). Drop into any React + Tailwind app.
 */

type Spec = {
  id: string;
  copy: string;
  family: "sans" | "serif";
  sizeClass: string; // responsive font-size classes
  leadingClass: string;
  trackingClass: string;
  sizeLabel: string; // e.g. "24–55pt/px"
  leadingLabel: string; // e.g. "120% Leading"
  trackingLabel: string; // e.g. "-1% Tracking"
  visual: "ripple" | "wave" | "coin" | "grid";
  accent: string; // tailwind color token used by that row's visual
};

const SPECS: Spec[] = [
  {
    id: "headline",
    copy:
      "Our team works diligently to recover lost funds, correct inaccuracies, and keep your financial records accurate—so you can feel confident about every dollar in your account.",
    family: "sans",
    sizeClass: "text-[26px] sm:text-[34px] md:text-[44px]",
    leadingClass: "leading-[1.2]",
    trackingClass: "tracking-[-0.01em]",
    sizeLabel: "24–55pt/px",
    leadingLabel: "120% Leading",
    trackingLabel: "-1% Tracking",
    visual: "ripple",
    accent: "bg-emerald-500",
  },
  {
    id: "subhead",
    copy:
      "Every case is assigned a dedicated specialist who verifies the timeline, checks the numbers twice, and stays with your dispute until it's closed.",
    family: "sans",
    sizeClass: "text-[19px] sm:text-[21px] md:text-[24px]",
    leadingClass: "leading-[1.25]",
    trackingClass: "tracking-[-0.005em]",
    sizeLabel: "18–24pt/px",
    leadingLabel: "125% Leading",
    trackingLabel: "-0.5% Tracking",
    visual: "wave",
    accent: "bg-sky-500",
  },
  {
    id: "body",
    copy:
      "Financial errors shouldn't slow you down or cause unnecessary stress. Whether it's an incorrect charge, a duplicate transaction, or a miscalculated fee, we step in to make things right. Our process is simple, straightforward, and designed to get your money back where it belongs—quickly and without hassle.",
    family: "serif",
    sizeClass: "text-[16px] sm:text-[17px] md:text-[18px]",
    leadingClass: "leading-[1.3]",
    trackingClass: "tracking-[0em]",
    sizeLabel: "0–24pt/px",
    leadingLabel: "130% Leading",
    trackingLabel: "0% Tracking",
    visual: "coin",
    accent: "bg-amber-500",
  },
  {
    id: "caption",
    copy:
      "Most disputes are reviewed within two business days, and approved funds are typically returned within one billing cycle.",
    family: "serif",
    sizeClass: "text-[12px] sm:text-[12.5px] md:text-[13px]",
    leadingClass: "leading-[1.4]",
    trackingClass: "tracking-[0.005em]",
    sizeLabel: "0–13pt/px",
    leadingLabel: "140% Leading",
    trackingLabel: "0.5% Tracking",
    visual: "grid",
    accent: "bg-rose-500",
  },
];

function VisualRipple({ accent }: { accent: string }) {
  return (
    <div className="relative h-36 w-36">
      <span className={`absolute inset-0 rounded-full ${accent} opacity-20 animate-ping`} />
      <span className={`absolute inset-4 rounded-full ${accent} opacity-30 animate-ping [animation-delay:200ms]`} />
      <span className={`absolute inset-10 rounded-full ${accent} shadow-lg`} />
    </div>
  );
}

function VisualWave({ accent }: { accent: string }) {
  return (
    <div className="flex h-28 w-36 items-end justify-center gap-1.5 rounded-2xl bg-white/80 p-4 shadow-lg backdrop-blur">
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={`w-2 rounded-full ${accent} animate-bounce`}
          style={{
            height: `${18 + (i % 3) * 10}px`,
            animationDelay: `${i * 90}ms`,
            animationDuration: "900ms",
          }}
        />
      ))}
    </div>
  );
}

function VisualCoin({ accent }: { accent: string }) {
  return (
    <div className="flex h-32 w-32 items-center justify-center">
      <div className={`flex h-24 w-24 animate-pulse items-center justify-center rounded-full ${accent} shadow-xl`}>
        <span className="font-serif text-3xl font-medium text-white">$</span>
      </div>
    </div>
  );
}

function VisualGrid({ accent }: { accent: string }) {
  return (
    <div className="grid h-24 w-24 grid-cols-3 gap-1.5 rounded-xl bg-white/80 p-3 shadow-lg backdrop-blur">
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className={`h-2.5 w-2.5 rounded-full ${accent} animate-pulse`}
          style={{ animationDelay: `${i * 80}ms` }}
        />
      ))}
    </div>
  );
}

const VISUALS = {
  ripple: VisualRipple,
  wave: VisualWave,
  coin: VisualCoin,
  grid: VisualGrid,
};

function SpecimenRow({ spec }: { spec: Spec }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = rowRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Visual = VISUALS[spec.visual];

  return (
    <div
      ref={rowRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMove}
      className="group relative overflow-hidden border-b border-neutral-200 py-10 first:pt-0 last:border-b-0"
    >
      {/* cursor-following visual, clipped to this row */}
      <div
        aria-hidden
        className="pointer-events-none absolute z-10 transition-[opacity,transform] duration-200 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 1 : 0.85})`,
          opacity: hover ? 1 : 0,
        }}
      >
        <Visual accent={spec.accent} />
      </div>

      <p
        className={[
          spec.family === "serif" ? "font-serif" : "font-sans",
          spec.sizeClass,
          spec.leadingClass,
          spec.trackingClass,
          "max-w-3xl text-neutral-900",
        ].join(" ")}
      >
        {spec.copy}
      </p>

      <div className="mt-8 flex items-center justify-between  pt-4 text-sm text-neutral-500">
        <span>{spec.sizeLabel}</span>
        <span>{spec.leadingLabel}</span>
        <span>{spec.trackingLabel}</span>
      </div>
    </div>
  );
}

export default function TypeSpecimenSection() {
  return (
    <section className="mx-auto max-w-4xl bg-white px-6 py-16 sm:px-10">
      {SPECS.map((spec) => (
        <SpecimenRow key={spec.id} spec={spec} />
      ))}
    </section>
  );
}