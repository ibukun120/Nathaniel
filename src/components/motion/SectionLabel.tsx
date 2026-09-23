type Props = {
  index: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

/** Editorial chapter marker ("01 — The Artist") that threads the page into one story. */
export default function SectionLabel({ index, children, tone = "light", className = "" }: Props) {
  return (
    <p
      data-reveal
      data-section-label
      className={`flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.35em] ${
        tone === "dark" ? "text-white/60" : "text-fg/50"
      } ${className}`}
    >
      <span className="tabular-nums text-gold-deep">{index}</span>
      <span aria-hidden className="h-px w-10 bg-gold" />
      {children}
    </p>
  );
}
