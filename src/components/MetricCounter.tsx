import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function MetricCounter({ value, suffix = "", label, duration = 1600 }: Props) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className="border-t border-border/60 pt-6">
      <div className="font-serif text-5xl md:text-6xl text-gold leading-none">
        {n}
        <span className="text-3xl md:text-4xl">{suffix}</span>
      </div>
      <div className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
