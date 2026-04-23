import { createFileRoute } from "@tanstack/react-router";
import site from "@/content/site.json";
import { SiteLayout } from "@/components/SiteLayout";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Legal Eyes" },
      { name: "description", content: "A small bench of senior practitioners chosen for judgment, not headcount." },
      { property: "og:title", content: "Team — Legal Eyes" },
      { property: "og:description", content: "Meet the partners and counsel of Legal Eyes." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <SiteLayout>
      <Section eyebrow="The Bench" title={site.team.title} description={site.team.description} className="pt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60">
          {site.team.members.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <article className="group relative bg-background overflow-hidden">
                <div className="aspect-[3/4] relative bg-card overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-bronze/15 transition-opacity duration-500 group-hover:opacity-150" />
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    <span className="font-serif text-[10rem] leading-none text-foreground/[0.08] select-none">
                      {m.initials}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-background via-background/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {m.expertise.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/40 px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8 border-t border-border/60">
                  <h3 className="font-serif text-2xl text-foreground">{m.name}</h3>
                  <div className="text-sm text-muted-foreground mt-1">{m.role}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
