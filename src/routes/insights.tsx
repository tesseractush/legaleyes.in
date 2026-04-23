import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import site from "@/content/site.json";
import { SiteLayout } from "@/components/SiteLayout";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Legal Eyes" },
      { name: "description", content: "Long-form thinking on law, regulation, and the art of strategic counsel." },
      { property: "og:title", content: "Insights — Legal Eyes" },
      { property: "og:description", content: "Case notes and editorial thinking from the partners at Legal Eyes." },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <SiteLayout>
      <Section eyebrow="Insights" title={site.insights.title} description={site.insights.description} className="pt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60">
          {site.insights.posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 60}>
              <a href="#" className="group block bg-background p-8 h-full hover:bg-card transition-colors duration-500">
                <div className="aspect-[4/3] relative mb-6 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/15 via-transparent to-bronze/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-7xl text-foreground/10 select-none">
                      {post.category[0]}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold bg-background/80 backdrop-blur px-2 py-1">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-serif text-2xl leading-tight text-foreground mb-3">
                  <span className="gold-underline">{post.title}</span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read essay <ArrowUpRight size={12} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
