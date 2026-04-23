import { createFileRoute } from "@tanstack/react-router";
import site from "@/content/site.json";
import { SiteLayout } from "@/components/SiteLayout";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Legal Eyes" },
      { name: "description", content: "Our philosophy: legal clarity through intelligent analysis. Meet the practice behind Legal Eyes." },
      { property: "og:title", content: "About — Legal Eyes" },
      { property: "og:description", content: "Legal clarity through intelligent analysis." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <Section eyebrow={site.about.eyebrow} title={site.about.title} className="pt-40">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <Reveal className="md:col-span-7">
            <p className="text-xl text-foreground/85 leading-relaxed">
              {site.about.description}
            </p>

            <blockquote className="mt-16 border-l-2 border-gold pl-8 font-serif text-3xl md:text-5xl leading-[1.1] italic text-foreground">
              "{site.about.pullQuote}"
            </blockquote>

            <div className="mt-16">
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Vision</div>
              <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
                {site.about.vision}
              </p>
            </div>
          </Reveal>

          <Reveal delay={150} className="md:col-span-5 md:sticky md:top-32">
            <div className="aspect-[4/5] relative bg-card border border-border/60 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-bronze/12" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Logo size={200} animated={false} />
              </div>
            </div>
            <div className="mt-8 border-t border-border/60 pt-6">
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-2">A note from the founder</div>
              <p className="text-foreground/85 leading-relaxed italic">"{site.about.founder.note}"</p>
              <div className="mt-4">
                <div className="font-serif text-lg">{site.about.founder.name}</div>
                <div className="text-sm text-muted-foreground">{site.about.founder.role}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </SiteLayout>
  );
}
