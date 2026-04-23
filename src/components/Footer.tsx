import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import site from "@/content/site.json";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Logo size={44} withWordmark />
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              {site.branding.tagline}. A boutique counsel for institutions, founders, and individuals who require precision over volume.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Navigate</h4>
            <ul className="space-y-3">
              {site.nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-sm text-foreground/70 hover:text-gold transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Connect</h4>
            <ul className="space-y-3">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-foreground/70 hover:text-gold transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Office</h4>
            <p className="text-sm text-foreground/70 leading-relaxed">{site.contact.address}</p>
            <p className="mt-3 text-sm text-foreground/70">{site.contact.phone}</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row gap-4 justify-between text-xs text-muted-foreground">
          <p className="max-w-2xl">{site.branding.disclaimer}</p>
          <p>© {new Date().getFullYear()} {site.branding.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
