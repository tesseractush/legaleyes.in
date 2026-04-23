import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import site from "@/content/site.json";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-foreground" aria-label="Legal Eyes home">
          <Logo size={36} withWordmark />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {site.nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              <span className="gold-underline">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="default" className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-none px-6 h-10 font-medium tracking-wide">
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {site.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl text-foreground/80 hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-none mt-2 w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>Book Consultation</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
