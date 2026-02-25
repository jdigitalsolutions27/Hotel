type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeader({ eyebrow, title, description, align = "left", tone = "dark" }: SectionHeaderProps) {
  const titleColor = tone === "light" ? "text-white" : "text-ink";
  const bodyColor = tone === "light" ? "text-slate-200" : "text-slate-600";
  const eyebrowStyle =
    tone === "light"
      ? "bg-white/15 text-amber-100"
      : "bg-amber-100 text-amber-700";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${eyebrowStyle}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-heading text-3xl leading-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base sm:text-lg ${bodyColor}`}>{description}</p> : null}
    </div>
  );
}
