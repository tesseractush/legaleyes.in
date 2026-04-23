import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, Scale, Lightbulb, ShieldCheck, Compass, ArrowRight, Users, Gavel, Landmark, Building2, FileText, Home } from "lucide-react";
import site from "@/content/site.json";
import { SiteLayout } from "@/components/SiteLayout";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

const iconMap = { Briefcase, Scale, Lightbulb, ShieldCheck, Compass, Users, Gavel, Landmark, Building2, FileText, Home } as const;

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Legal Eyes" },
      { name: "description", content: "Corporate, litigation, intellectual property, compliance and advisory — five disciplines, one standard." },
      { property: "og:title", content: "Practice Areas — Legal Eyes" },
      { property: "og:description", content: "Five disciplines. One standard." },
    ],
  }),
  component: PracticePage,
});

function PracticePage() {
  return (
    <SiteLayout>
      <Section eyebrow="Practice Areas" title="Five disciplines. One standard." description="Each practice is partner-led and built around outcomes, not hours." className="pt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/60">
          {site.services.map((svc, i) => {
            const Icon = iconMap[svc.icon as keyof typeof iconMap] ?? Briefcase;
            return (
              <Reveal key={svc.title} delay={i * 80}>
                <article className="group bg-background p-10 md:p-14 h-full hover:bg-card transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 font-serif text-[10rem] leading-none text-foreground/[0.03] select-none">
                    0{i + 1}
                  </div>
                  <Icon className="text-gold mb-8 relative" size={32} />
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 relative">
                    <span className="gold-underline">{svc.title}</span>
                  </h2>
                  <p className="text-foreground/70 leading-relaxed relative max-w-md">
                    {svc.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-24 text-center">
          <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-none h-12 px-10 tracking-wide">
            <Link to="/contact">Discuss your matter <ArrowRight className="ml-1" /></Link>
          </Button>
        </Reveal>
      </Section>
    </SiteLayout>
  );
}
