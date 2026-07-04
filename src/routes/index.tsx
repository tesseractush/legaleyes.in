import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, Briefcase, Scale, Lightbulb, ShieldCheck, Compass, Users, Gavel, Landmark, Building2, FileText, Home } from "lucide-react";
import site from "@/content/site.json";
import { SiteLayout } from "@/components/SiteLayout";
import { Section } from "@/components/Section";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { MetricCounter } from "@/components/MetricCounter";
import { Button } from "@/components/ui/button";

const iconMap = { Briefcase, Scale, Lightbulb, ShieldCheck, Compass, Users, Gavel, Landmark, Building2, FileText, Home } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Legal Eyes — Justice Through Insight" },
      { name: "description", content: "Precision-driven legal counsel for modern challenges. Corporate, litigation, IP, compliance and advisory practice." },
      { property: "og:title", content: "Legal Eyes — Justice Through Insight" },
      { property: "og:description", content: "Precision-driven legal counsel for modern challenges." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <AboutTeaser />
      <PracticeTeaser />
      <WhyUs />
      <CtaBand />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/40" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gold/8 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10 text-center">
        <div className="flex justify-center mb-10 animate-fade-up">
          <Logo size={120} />
        </div>

        <div className="text-xs uppercase tracking-[0.4em] text-gold mb-6 animate-fade-up" style={{ animationDelay: "120ms" }}>
          {site.hero.eyebrow}
        </div>

        <h1
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] text-foreground animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          Justice <em className="text-gold not-italic font-normal italic">Through</em> Insight
        </h1>

        <p
          className="mt-8 mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up"
          style={{ animationDelay: "380ms" }}
        >
          {site.hero.subtext}
        </p>

        <div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "520ms" }}
        >
          <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-none h-12 px-8 text-sm tracking-wide">
            <Link to="/contact">{site.hero.cta_primary} <ArrowRight className="ml-1" /></Link>
          </Button>
          <Button asChild variant="outline" className="rounded-none h-12 px-8 text-sm tracking-wide border-foreground/30 hover:border-gold hover:text-gold bg-transparent">
            <Link to="/practice-areas">{site.hero.cta_secondary}</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground animate-fade-up" style={{ animationDelay: "800ms" }}>
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <Section eyebrow={site.about.eyebrow} title={site.about.title}>
      <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
        <Reveal className="md:col-span-7">
          <p className="text-lg text-foreground/80 leading-relaxed">
            {site.about.description}
          </p>
          <blockquote className="mt-12 border-l-2 border-gold pl-6 font-serif text-3xl md:text-4xl leading-tight text-foreground italic">
            "{site.about.pullQuote}"
          </blockquote>
          <div className="mt-10">
            <Link to="/about" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold">
              <span className="gold-underline">Read our philosophy</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={150} className="md:col-span-5">
          <div className="aspect-[4/5] relative bg-card border border-border/60 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-bronze/10" />
            <div className="absolute inset-0">
  <img
    src="https://github.com/tesseractush/legaleyes.in/blob/ba0023c4cad148cb62764c36dd097a36b27c00c8/src/routes/ayush-gupta.jpg?raw=true"
    alt="Adv Ayush Gupta"
    className="h-full w-full object-cover object-top"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

  <div className="absolute bottom-8 left-8">
    <div className="text-xs uppercase tracking-[0.25em] text-gold">
      {site.about.founder.role}
    </div>

    <div className="mt-2 font-serif text-3xl text-white">
      {site.about.founder.name}
    </div>
  </div>
</div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
              <div className="text-xs uppercase tracking-[0.2em] text-gold">{site.about.founder.role}</div>
              <div className="font-serif text-xl mt-1">{site.about.founder.name}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function PracticeTeaser() {
  return (
    <Section eyebrow="Practice" title="Five disciplines. One standard.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60">
        {site.services.map((svc, i) => {
          const Icon = iconMap[svc.icon as keyof typeof iconMap] ?? Briefcase;
          return (
            <Reveal key={svc.title} delay={i * 80}>
              <Link
                to="/practice-areas"
                className="group block bg-background p-10 h-full hover:bg-card transition-colors duration-500"
              >
                <Icon className="text-gold mb-8" size={28} />
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  <span className="gold-underline">{svc.title}</span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
                <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function WhyUs() {
  return (
    <Section eyebrow="Why Us" title={site.whyUs.title} description={site.whyUs.description}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {site.whyUs.metrics.map((m) => (
          <MetricCounter key={m.label} value={m.value} suffix={m.suffix} label={m.label} />
        ))}
      </div>

      <div className="mt-24 grid md:grid-cols-2 gap-x-16 gap-y-12">
        {site.whyUs.pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} className="border-t border-border/60 pt-6">
            <h4 className="font-serif text-2xl text-foreground mb-3">{p.title}</h4>
            <p className="text-muted-foreground leading-relaxed">{p.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CtaBand() {
  return (
    <section className="relative py-32 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            When the matter is critical, <em className="text-gold not-italic">choose perspective</em>.
          </h2>
          <Button asChild className="mt-12 bg-gold text-gold-foreground hover:bg-gold/90 rounded-none h-12 px-10 text-sm tracking-wide">
            <Link to="/contact">Begin a conversation <ArrowRight className="ml-1" /></Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
