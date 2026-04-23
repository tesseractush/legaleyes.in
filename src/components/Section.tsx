import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
}

export function Section({ children, className = "", id, eyebrow, title, description, align = "left" }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {(eyebrow || title || description) && (
          <div className={`max-w-3xl mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-5">{eyebrow}</div>
            )}
            {title && (
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
